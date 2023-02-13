import React, { useState } from "react";
import "./Login.css";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

function Login() {
    const [data,setData] = useState([{'username':'joel@gmail.com','password':'password1','preference':'economics'},{'username':'mayur@gmail.com','password':'password1','preference':'startups'}]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();
        
        try {
            const response = data.filter(d=> {return d.username===email})
            console.log(response,'somethinginastring')
            if(response[0].password!=password)
            {
                toast.error('Invalid Credentials');
            }
            else{
                toast.success('Login Successful');
                navigate('/',{state:{details: response[0]}})
            }
        }
        catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="login-container">
            
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="form-input">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;