import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import ToDo from '../components/ToDo';
import { db, auth } from '../firebase';
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore';

const style = {
    bg: 'min-h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]', // Adjusted height to min-h-screen
    container: 'max-w-[500px] w-full mx-auto bg-white rounded-md shadow-md p-4',
    heading: 'text-3xl font-bold text-center text-gray-800 mb-4 p-2',
    form: 'flex justify-between items-center',
    input: 'border border-gray-300 rounded-md p-2 w-full mr-2',
    button: 'border bg-blue-500 text-white p-1 rounded-md hover:bg-[#1CB5E0]',
    count: 'text-center my-2',
};

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
            if (!user) {
                navigate('/');
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    useEffect(() => {
        if (user) {
            const q = query(collection(db, 'users', user.uid, 'todos'));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const todosArr = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                setTodos(todosArr);
            });

            return () => unsubscribe();
        }
    }, [user]);

    const createTodo = async (e) => {
        e.preventDefault();
        if (input === '') {
            alert('Please enter a todo');
            return;
        }
        if (user) {
            await addDoc(collection(db, 'users', user.uid, 'todos'), {
                text: input,
                completed: false
            });
            setInput('');
        }
    };

    const toggleComplete = async (todo) => {
        if (user) {
            await updateDoc(doc(db, 'users', user.uid, 'todos', todo.id), {
                completed: !todo.completed
            });
        }
    };

    const deleteTodo = async (id) => {
        if (user) {
            await deleteDoc(doc(db, 'users', user.uid, 'todos', id));
        }
    };

    const handleSignOut = async () => {
        await auth.signOut();
        navigate('/');
    };

    return (
        <div className={style.bg}>
            <div className={style.container}>
                <h3 className={style.heading}>TODO</h3>
                <form onSubmit={createTodo} className={style.form}>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className={style.input}
                        type="text"
                        placeholder="Add a todo"
                    />
                    <button className={style.button} type='submit'>
                        <AiOutlinePlus size={30} />
                    </button>
                </form>
                <ul>
                    {todos.map((todo, index) => (
                        <ToDo key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
                    ))}
                </ul>
                {todos.length > 0 && <p className={style.count}>{`You have ${todos.length} todos`}</p>}
                <br />
                {user && (
                    <>
                        <p className="text-center text-gray-700 mt-4">{user.email}</p>
                        <button onClick={handleSignOut} className="block mx-auto mt-4 bg-red-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-600">
                            Sign Out
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Home;
