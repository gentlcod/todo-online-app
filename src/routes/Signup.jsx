import React, { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import { IoEye, IoEyeOff } from "react-icons/io5";

const styles = {
  bg: 'h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]',
  container: 'max-w-[700px] w-full mx-auto bg-white rounded-md shadow-md p-4 flex flex-col items-center justify-center',
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px',
    maxWidth: '400px',
    width: '100%'
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  button: {
    width: '100%',
    padding: '12px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#1CB5E0',
    color: '#fff',
    marginBottom: '10px'
  },
  signInLink: {
    marginTop: '10px',
    textAlign: 'center',
    color: '#333',
    cursor: 'pointer'
  }
};

const SignUp = () => {
  const { signUpWithEmail } = UserAuth();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignUpWithEmail = async (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await signUpWithEmail(email, password);
      navigate('/home'); // Redirect to '/home' after successful sign-up
    } catch (error) {
      setError(error.message); // Display error message
      console.error(error.message);
    }
  };

  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <div style={styles.formContainer}>
          <img
            src='/icon.png'  // Ensure this path is correct relative to your public folder
            alt='logo'
            width={75}
            height={75}
            className={styles.logo} // Apply the logo style class
          />
          <br />
          <h2 className='text-2xl font-bold mb-4'>Create Account</h2>
          {error && <p className='bg-red-300 my-2 p-3'>{error}</p>}
          <form onSubmit={handleSignUpWithEmail} className='w-[350px]'>
            <div className='my-4'>
              <label>Full Name</label>
              <div className='my-2 w-full relative rounded-2xl shadow-xl'>
                <input
                  onChange={(e) => setName(e.target.value)}
                  className='w-full p-2 bg-primary border border-input rounded-2xl'
                  type="text"
                />
                <FaRegUser className='absolute right-2 top-3 text-gray-400' />
              </div>
            </div>
            <div className='my-4'>
              <label>Email</label>
              <div className='my-2 w-full relative rounded-2xl shadow-xl'>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-full p-2 bg-primary border border-input rounded-2xl'
                  type="email"
                />
                <AiOutlineMail className='absolute right-2 top-3 text-gray-400' />
              </div>
            </div>
            <div className='my-4'>
              <label>Password</label>
              <div className='my-2 w-full relative rounded-2xl shadow-xl'>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className='w-full p-2 bg-primary border border-input rounded-2xl'
                  type={showPassword ? "text" : "password"}
                />
                <AiFillLock className='absolute right-2 top-3 text-gray-400' />
                <button
                  type="button"
                  className="absolute right-10 top-3 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoEye /> : <IoEyeOff />}
                </button>
              </div>
            </div>
            <div className='my-4'>
              <label>Repeat Password</label>
              <div className='my-2 w-full relative rounded-2xl shadow-xl'>
                <input
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  value={repeatPassword}
                  className='w-full p-2 bg-primary border border-input rounded-2xl'
                  type={showRepeatPassword ? "text" : "password"}
                />
                <AiFillLock className='absolute right-2 top-3 text-gray-400' />
                <button
                  type="button"
                  className="absolute right-10 top-3 text-gray-400"
                  onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                >
                  {showRepeatPassword ? <IoEye /> : <IoEyeOff />}
                </button>
              </div>
            </div>
            <button className='bg-[#20abd2] w-full my-2 p-3 text-white rounded-2xl shadow-xl hover:shadow-2xl ease-in duration-300'>
              Sign Up
            </button>
          </form>
          <div style={styles.signInLink}>
            Already have an account? 
            <Link to="/sign-in">
              <p className='hover:text-[#1CB5E0] duration-300 ease-in-out underline'>Log In</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
