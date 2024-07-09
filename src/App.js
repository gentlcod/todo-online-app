import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PrivacyPolicy from './routes/PrivacyPolicy';
import TermsOfService from './routes/TermsOfService';
import { AuthProvider } from './context/AuthContext';
import Home from './routes/Home';
import Main from './routes/Main';
import SignUp from './routes/Signup';
import SignIn from './routes/Sigin'
import Preloader from './components/Preloader';
import PrivateRoute from './components/PrivateRoute';
import { auth } from './firebase';

function App() {
  const [user, setUser] = useState(null);
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
      setAuthLoaded(true);
    });

    return () => unsubscribe();
  }, []);

  if (!authLoaded) {
    return <Preloader />;
  }

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
