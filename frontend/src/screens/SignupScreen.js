
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'


export default function SignupScreen() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const submitHandler = async (e) => {
        console.log("email :", email)
        console.log("pass :", password)
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Password and confirm password are not match");
            return;
        }
        try {
            const { data } = await axios.post('http://localhost:5000/api/users/signup', {
                email,
                password,
            })
            console.log("data: ", data);
            navigate('/signin')
        } catch (e) {
            console.log("e", e.message)
        }

    };

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign Up</h1>
                </div>
                <div>
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        pattern="^[a-zA-Z0-9]{6,}$"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Enter confirm password"
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">
                        Register
                    </button>
                </div>
                <div>
                    <label />
                    <div>
                        Already registered?
                        <Link to={"/signin"}>Sign In</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}
