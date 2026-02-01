import React, {useState} from 'react';
import {registerUser} from "../services/userService";
import { useNavigate } from 'react-router-dom';


const RegisterPage = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();
    const [showSuccess, setShowSuccess] = useState(false);


    const RegisterHandler = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Validate if filds are not empty

        try {
            const result = await registerUser(name, email, password);
            console.log("Registration successful:", result);
            setShowSuccess(true);


        }
        catch (error) {
            console.error("Registration failed:", error);
        }
    }

    const handleOk = () => {
         setShowSuccess(false);
        navigate("/login");
    };


    return (
        <div className="register-page page">
            <h1 className="register-title">Register Page</h1>
            <form className="register-form" onSubmit={RegisterHandler}>
                <input type="text" placeholder="Name" className="register-input input" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Email" className="register-input input" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" className="register-input input" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder="Confirm password" className="register-input input" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <button type="submit" className="register-button">Register</button>

                {showSuccess && (
                    <div className="modal-overlay">
                        <div className="modal-box">
                        <h3>Готово!</h3>
                        <p>Регистрация прошла успешно!</p>
                        <button onClick={handleOk}>OK</button>
                        </div>
                    </div>
                    )}

            </form>
        </div>
    );
}

export default RegisterPage;