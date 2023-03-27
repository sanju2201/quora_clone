import React from 'react';
import './App.css';
import Quora from './components/quora/Quora';
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice';
import Login from './components/auth/Login';




function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      {user ? (<Quora />) : (<Login />)}

    </div>
  );
}

export default App;
