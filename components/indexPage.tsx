"use client"
import { useState } from "react";
import Login from "./login";

const IndexPage=()=>{
    
        const [showLogin, setShowLogin]=useState(false);
        const [showRegister, setregister]=useState(false);

        const handleLoginClick=()=>{
            setShowLogin(true);
        }

        const handleCloseLogin=()=>{
            setShowLogin(false);
        }

        const handleRegisterClick=()=>{
            setregister(true);
        }

        const handleCloseRegister=()=>{
            setregister(false);
        }

        


        return(
        <div>
            <button onClick={handleLoginClick}>Iniciar Sesion</button>
            <br/>
            <button onClick={handleRegisterClick}>Registro</button>

            {showLogin && <Login onClose={ handleCloseLogin}/>}
            {showRegister && <Login onClose={ handleCloseRegister}/>}
        </div>
    )
}

export default IndexPage;