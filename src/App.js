import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ToDo from "./components/ToDo";
import { db } from "./firebase";
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from "firebase/firestore";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `max-w-[500px] w-full mx-auto bg-white rounded-md shadow-md p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 mb-4 p-2`,
  form: `flex justify-between items-center`,
  input: `border border-gray-300 rounded-md p-2 w-full mr-2`,
  button: `border bg-purple-500 text-white p-1 rounded-md hover:bg-blue-600`,
  count: `text-center my-2`
};

function App() {

  const [todos, setTodos] = 
  useState(['Learn React', 'Grind Leetcode']);

  const [input, setInput] = useState('')

  // console.log(input)


  // create todo 

  const createTodo = async function(e) {
    e.preventDefault(e);
    if(input === '') {
      alert('Please enter a todo')
      return
    }
    await addDoc(collection(db, 'todos'), {
      text: input, 
      completed: false
    })
    setInput('')
  }



  // read todo from firebase

  useEffect(() => {
    const q = query(collection(db, 'todos'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = []
      querySnapshot.forEach((doc) => {
        todosArr.push({...doc.data(), id: doc.id })
      });
      setTodos(todosArr)
    })

    return () => unsubscribe();
  }, [])
  


  // update todo in firebase

  const toggleComplete = async function(todo) {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    })
  }
  // delete todo

  const deleteTodo = async function(id) {
    await deleteDoc(doc(db, 'todos', id),{
      completed: !id.completed
    })
  }


  return (
    <div className={style.bg}>
      <div className={style.container}>   
        <h3 className={style.heading}>TODO</h3>
        <form onSubmit={createTodo} className={style.form}>
          <input value={input} onChange={(e) => setInput(e.target.value)} className={style.input} type="text" placeholder="Add a todo" />
          <button className={style.button} type='submit'>
            <AiOutlinePlus size={30} />
          </button>
        </form>

        <ul>

         {todos.map((todo, index) => (
          <ToDo 
          key={index} 
          todo={todo} 
          toggleComplete={toggleComplete} 
          deleteTodo={deleteTodo}
          />
         ))}


        </ul>

        {todos.length < 1 
        ? null 
        : <p className={style.count}>{`You have ${todos.length} todos`}</p>}



      </div>    
    </div>
  );
}

export default App;
