import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { AiOutlinePlus } from "react-icons/ai";
import ToDo from "../components/ToDo";
import { db } from "../firebase";
import Footer from "../components/Footer";
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from "firebase/firestore";

const style = {
    bg: `lg:h-[782px] h-100vh w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
    container: `max-w-[500px] w-full mx-auto bg-white rounded-md shadow-md p-4`,
    heading: `text-3xl font-bold text-center text-gray-800 mb-4 p-2`,
    form: `flex justify-between items-center`,
    input: `border border-gray-300 rounded-md p-2 w-full mr-2`,
    button: `border bg-purple-500 text-white p-1 rounded-md hover:bg-blue-600`,
    count: `text-center my-2`
};

const Home = () => {
    const location = useLocation();
    const { name, email } = location.state || {};
    const [todos, setTodos] = useState(['Learn React', 'Grind Leetcode']);
    const [input, setInput] = useState('');
  
    const createTodo = async (e) => {
      e.preventDefault();
      if(input === '') {
        alert('Please enter a todo');
        return;
      }
      await addDoc(collection(db, 'todos'), {
        text: input,
        completed: false
      });
      setInput('');
    };
  
    useEffect(() => {
      const q = query(collection(db, 'todos'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let todosArr = [];
        querySnapshot.forEach((doc) => {
          todosArr.push({...doc.data(), id: doc.id });
        });
        setTodos(todosArr);
      });
  
      return () => unsubscribe();
    }, []);
  
    const toggleComplete = async (todo) => {
      await updateDoc(doc(db, 'todos', todo.id), {
        completed: !todo.completed
      });
    };
  
    const deleteTodo = async (id) => {
      await deleteDoc(doc(db, 'todos', id));
    };

    return (
      <div className={style.bg}>
        <div className={style.container}>
          {name && email && (
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-center text-gray-800">Welcome, {name}!</h2>
              <p className="text-center text-gray-600">{email}</p>
            </div>
          )}
          <h3 className={style.heading}>TODO</h3>
          <form onSubmit={createTodo} className={style.form}>
            <input value={input} onChange={(e) => setInput(e.target.value)} className={style.input} type="text" placeholder="Add a todo" />
            <button className={style.button} type='submit'>
              <AiOutlinePlus size={30} />
            </button>
          </form>
          <ul>
            {todos.map((todo, index) => (
              <ToDo key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
            ))}
          </ul>
          {todos.length < 1 ? null : <p className={style.count}>{`You have ${todos.length} todos`}</p>}
        </div>
        <Footer />
      </div>
    );
}

export default Home;
