import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import './App.css'
import Dashboard from './pages/Dashboard';
import { Audience } from './pages/Audience';
import Campaigns from './pages/Campaigns';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Campaign } from './pages/Campaign';
import { Login } from './pages/Login';
import { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  //const [user, setUser] = useState<any>(null);
  
  const login = useGoogleLogin({
    onSuccess: (response: any) => {
      console.log(response);
      setIsLoggedIn(true);
        //setUser(response);
    },
    onError: (error) => {
      console.error('Login Failed:', error);
    },
  });

  return (
    <Router>
      <div className="App">
      <ToastContainer />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/campaigns/:id" element={<Campaign />} />
          <Route path="/audience" element={<Audience />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
