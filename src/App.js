import React, { useReducer } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Quora from './components/quora/Quora';
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import { auth } from './components/auth/firebase';
let dispatchFun = {};
const initialState = { status: "login" };

const reducer = (state, action) => {
  switch (action.type) {
    case "register":
      return { status: "register" };
    case "login":
      return { status: "login" };
    case "logout":
      return { status: "logout" };
    case "forgotPassword":
      return { status: "forgotPassword" };
    default:
      return initialState;
  }
};

console.log(auth)
function App() {
  const user = useSelector(selectUser);
  const [state, dispatch] = useReducer(reducer, initialState);
  dispatchFun = { dispatch }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route >
            <Route path='/' element={<Quora />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            {/* <Route path="/profile">
              <Route path=":userId" element={<Profile />} />
              <Route path=":userId/edit" element={<EditProfile />} />
            </Route> */}
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export { dispatchFun };
export default App;
