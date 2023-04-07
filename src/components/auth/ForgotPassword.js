// import React, { useReducer, useState } from "react";
// import "./forgotPassword.scss";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// // import { dispatchFun } from "../../App";
// import { useNavigate } from "react-router-dom";

// import {
//     auth,
//     signInWithGoogle,
//     signInWithFacebook,
//     logInWithEmailAndPassword,
//     registerWithEmailAndPassword,
//     sendPasswordReset,
//     logout,
// } from "./firebase";


// const Login = () => {
//     const [email, setEmail] = useState("");
//     const navigate = useNavigate();


//     const HandleReset = (e) => {
//         e.preventDefault();
//         setEmail("");

//     };
//     return (
//         <div className="login">
//             <div className="login__container">
//                 <div className="login__logo">
//                     <img
//                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png"
//                         alt=""
//                     />
//                 </div>
//                 <div className="login__desc">
//                     <p>A Place to Share knowledge and better understand the world</p>
//                 </div>
//                 <div className="login__auth">
//                     <div className="login__authOptions">
//                         <div className="login__authOption">
//                             <img
//                                 className="login__googleAuth"
//                                 src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
//                                 alt=""
//                             />
//                             <p onClick={signInWithGoogle}>Continue With Google</p>
//                         </div>
//                         <div className="login__authOption">
//                             <img
//                                 className="login__googleAuth"
//                                 src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
//                                 alt=""
//                             />
//                             <span onClick={signInWithFacebook}>Continue With Facebook</span>
//                         </div>
//                     </div>
//                     <div className="login__emailPass">
//                         <div className="login__label">
//                             <h4>Reset Your Password</h4>
//                         </div>
//                         <div className="login__inputFields">
//                             <div className="login__inputField">
//                                 <input
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     type="text"
//                                     placeholder="Email"
//                                 />
//                             </div>
//                             <div className="login__inputField"></div>
//                         </div>
//                         <div className="login__forgButt">
//                             <small>Don't have a account?</small>
//                         </div>
//                         <button onClick={HandleReset}>Send Reset link</button>
//                     </div>
//                 </div>
//                 <div className="login__lang">
//                     <p>हिन्दी</p>
//                     <ArrowForwardIosIcon fontSize="small" />
//                 </div>
//                 <div className="login__footer">
//                     <p>About</p>
//                     <p>Languages</p>
//                     <p>Careers</p>
//                     <p>Businesses</p>
//                     <p>Privacy</p>
//                     <p>Terms</p>
//                     <p>Contact</p>
//                     <p>&copy; Quora Clone Inc. 2023</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;
