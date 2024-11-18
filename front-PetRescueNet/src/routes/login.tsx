import { useState } from "react";
import { useAuth } from "../assets/auth/authProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { API_URL } from "../assets/auth/constants";
import { AuthResponse, AuthResponseError } from "../assets/types/types";
import Footer from "../components/footer/footer";

import "./login.css"

export default function Login() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorResponse, setErrorResponse] = useState("");
    const auth = useAuth();
    const goTo = useNavigate();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        try {
           const response = await fetch(`${API_URL}/login`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password,
            }),
           });
           
           if(response.ok){
            console.log("Login successful");
            setErrorResponse("");
            const json = (await response.json()) as AuthResponse;
            if(json.body.accessToken && json.body.refreshToken){
                auth.saveUser(json);
                goTo("/dashboard")
            }

            
           }else{
            console.log("Sometrhing went wrong");
            const json = await response.json() as AuthResponseError;
            setErrorResponse(json.body.error);
            return;
           }
        } catch (error) {
            console.log(error);
        }
    }

    if(auth.isAuthenticated){
        return <Navigate to="/dashboard" />;
    }
    return (

        <div id="main-container">
        <div id="left-container">
            
            <form action="" className="form" id="formu" onSubmit={handleSubmit}>
            <div id="title-container">
                    <h1>PET RESCUE NET</h1>
                    <h1>BIENVENIDO DE VUELTA</h1>
   
            </div>
            <div id="separator-container">
                    <div className="line"></div>
                    <span>Inicia sección ahora</span>
                    <div className="line"></div>   
            </div>
            <div id="separator-container">
                    <div className="line"></div>
                    <span>Conoce más sobre mascotas</span>
                    <div className="line"></div>   
            </div>
            <div id="inputs-container">
            {!!errorResponse && <div className="errorMessage">{errorResponse} </div>}
                <label htmlFor="">Email</label>
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} name="" id="" />
        
                <label htmlFor="">Password</label>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} name="" id="" />
            </div>
            <div id="buttons-container">
                <button className="btn">INICIA SECCIÓN</button>
            </div>
            <div id="options-container">
                <span>¿Todavía no tienes una cuenta? </span><a href="http:/Signup">Registrate</a>
            </div>

            </form>
        </div>
        <div id="right-container">
        <form action="" className="form" id="formu" onSubmit={handleSubmit}>
            <div id="title-container">
                    <h1>PET RESCUE NET</h1>
                    <h1>BIENVENIDOS</h1>

            </div>
            <div id="separator-container">
                    <div className="line"></div>
                    <span>Inicia sección</span>
                    <div className="line"></div>
            </div>
            <div id="separator-container">
                    <div className="line"></div>
                    <span>Inicia sección</span>
                    <div className="line"></div>
            </div>
            <div id="inputs-container">
            {!!errorResponse && <div className="errorMessage">{errorResponse} </div>}
                <label htmlFor="">Email</label>
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} name="" id="" />
        
                <label htmlFor="">Password</label>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} name="" id="" />
            </div>
            <div id="buttons-container">
                <button className="btn">Login</button>
            </div>
            <div id="options-container">
                <span>¿Todavía no tienes una cuenta? </span><a href="http:/Signup">Registrate</a>
            </div>

            </form>
        </div>
        
            <Footer></Footer>

        </div>
       
        
    );
}