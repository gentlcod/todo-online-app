import React from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import Footer from '../components/Footer';

const styles = { 
  bg: 'h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]',
  container: 'max-w-[500px] w-full mx-auto bg-white rounded-md shadow-md p-4 flex flex-col items-center justify-center',
  logo: 'mb-4',
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px'
  }
};

const Main = () => {
  const { signInWithGoogle } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      console.log("Google sign-in successful");
      navigate('/home');
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };

  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <img
          src='/icon.png'
          alt='logo'
          width={75}
          height={75}
          className={styles.logo}
        />
        <h1 className='text-black font-bold text-4xl text-center mt-4'>
          Welcome
        </h1>
        <p className='text-center text-gray-700 my-4'>
          TODO is your personal task manager where you can 
          <br /> keep track of your daily tasks, notes, and more...
        </p>
        <div className='border-gray-400 border-b w-[190px]'></div>
        <div style={styles.formContainer}>
          <a href='/sign-in' className='bg-[#20abd2] text-white py-2 px-4 rounded-lg text-center mb-4'>
            Sign in with Email
          </a>
          <p className='text-center text-gray-700 my-2'>or</p>
          <button onClick={handleGoogleSignIn}>
            <GoogleButton />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
