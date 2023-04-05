import React, { useReducer, useState } from "react";
import "./register.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { dispatchFun } from "../../App";

import {
    auth,
    signInWithGoogle,
    signInWithFacebook,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
} from "./firebase";



const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const signIn = () => { };

    const handleSignIn = (e) => {
        e.preventDefault();
    };

    const handleRegister = (e) => {
        e.preventDefault();
    };

    const HandleReset = (e) => {
        e.preventDefault();
    };
    return (
        <div className="login">
            <div className="login__container">
                <div className="login__logo">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png"
                        alt=""
                    />
                </div>
                <div className="login__desc">
                    <p>A Place to Share knowledge and better understand the world</p>
                </div>
                <div className="login__auth">
                    <div className="login__authOptions">
                        <div className="login__authOption">
                            <img
                                className="login__googleAuth"
                                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                                alt=""
                            />
                            <p onClick={signIn}>Continue With Google</p>
                        </div>
                        <div className="login__authOption">
                            <img
                                className="login__googleAuth"
                                src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
                                alt=""
                            />
                            <span>Continue With Facebook</span>
                        </div>
                    </div>
                    <div className="login__emailPass">
                        <div className="login__label">
                            <h4>Register</h4>
                        </div>
                        <div className="login__inputFields">
                            <div className="login__inputField">
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="login__inputField">
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="text"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="login__inputField">
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div className="login__forgButt">
                            <small>Already have a account?</small>
                        </div>
                        <button onClick={handleRegister}>Register</button>
                    </div>
                </div>
                <div className="login__lang">
                    <p>हिन्दी</p>
                    <ArrowForwardIosIcon fontSize="small" />
                </div>
                <div className="login__footer">
                    <p>About</p>
                    <p>Languages</p>
                    <p>Careers</p>
                    <p>Businesses</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Contact</p>
                    <p>&copy; Quora Clone Inc. 2023</p>
                </div>
            </div>
        </div>
    );
};

export default Register;