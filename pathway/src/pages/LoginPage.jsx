import React, {useState} from 'react';
import { loginUser } from "../services/userService";

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const LoginHandler = async (e) => {
        e.preventDefault();

        if (email == "" || password == "") {
            alert('Fill all fields!');
            return;
        }

        try {
            const result = await loginUser(email, password);

            localStorage.setItem("accessToken", result.accessToken);

            console.log("Login successful:", result);

            window.location.replace("/universities");
        }
        catch (error) {
            console.error("Login failed:", error); 
        }
    }

    return (
        <div className="login-page page">
            <h1 className="login-title">Login Page</h1>
            <form className="login-form" onSubmit={LoginHandler}>
                <input type="text" placeholder="Email" className="login-input input" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" className="login-input input" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="login-button button">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;