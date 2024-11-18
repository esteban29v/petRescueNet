import React, { useState } from "react";
import { useAuth } from "../assets/auth/authProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { API_URL } from "../assets/auth/constants";
import { AuthResponseError } from "../assets/types/types";
import "../components/signup.css"
import Footer from "../components/footer/footer";

export default function Singup() {
    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [errorResponse, setErrorResponse] = useState("");

    const auth = useAuth();
    const goTo = useNavigate();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        try {
           const response = await fetch(`${API_URL}/signup`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                lastname,
                username,
                password,
                email
            }),
           });
           
           if(response.ok){
            console.log("User created succesfully");
            setErrorResponse("");
            goTo("/login")
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
                </div>

                <div id="separator-container">
                    <div className="line"></div>
                    <span>Registrate ahora</span>
                    <div className="line"></div>
                </div>

                <div id="inputs-container">
                {!!errorResponse && <div className="errorMessage">{errorResponse} </div>}
                <label htmlFor="">Nombres</label>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} name="" id="" />

                <label htmlFor="">Apellidos</label>
                <input type="text" value={lastname} onChange={(e)=> setLastName(e.target.value)} name="" id="" />

                <label htmlFor="">Apodo</label>
                <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} name="" id="" />

                <label htmlFor="">Email</label>
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} name="" id="" />
        
                <label htmlFor="">Password</label>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} name="" id="" />
                </div>
        
                <div id="buttons-container">
                    <button className="btn">REGISTRATE</button>
                </div>

                <div id="options-container">
                    <span>¿Ya tienes una cuenta? </span><a href="http:/login">Inicia sección</a>
                </div>           
            </form>
            </div>
            
           <div id="right-container">
           <form action="" className="form" id="formu" onSubmit={handleSubmit}>
                <div id="title-container">
                    <h1>PET RESCUE NET</h1>
                </div>

                <div id="separator-container">
                    <div className="line"></div>
                    <span>Registrate ahora</span>
                    <div className="line"></div>
                </div>

                <div id="inputs-container">
                {!!errorResponse && <div className="errorMessage">{errorResponse} </div>}
                <label htmlFor="">Nombres</label>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} name="" id="" />

                <label htmlFor="">Apellidos</label>
                <input type="text" value={lastname} onChange={(e)=> setLastName(e.target.value)} name="" id="" />

                <label htmlFor="">Apodo</label>
                <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} name="" id="" />

                <label htmlFor="">Email</label>
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} name="" id="" />
        
                <label htmlFor="">Password</label>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} name="" id="" />
                </div>
        
                <div id="buttons-container">
                    <button className="btn">REGISTRATE</button>
                </div>

                <div id="options-container">
                    <span>¿Ya tienes una cuenta? </span><a href="http:/login">Inicia sección</a>
                </div>           
            </form>
           </div>
           <div>

           </div>
            <Footer></Footer>
            
        </div>
        
         
     );
}