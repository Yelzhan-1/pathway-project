import React, {useState} from 'react';
import {registerUser} from "../services/userService";

const RegisterPage = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const RegisterHandler = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            const result = await registerUser(name, email, password);
            console.log("Registration successful:", result);
        }
        catch (error) {
            console.error("Registration failed:", error);
        }
    }

    return (
        <div className="register-page page">
            <h1 className="register-title">Register Page</h1>
            <form className="register-form" onSubmit={RegisterHandler}>
                <input type="text" placeholder="Name" className="register-input input" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Email" className="register-input input" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" className="register-input input" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder="Confirm password" className="register-input input" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <button type="submit" className="register-button button">Register</button>
            </form>
        </div>
    );
}

export default RegisterPage;