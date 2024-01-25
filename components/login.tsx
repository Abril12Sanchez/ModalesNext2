"use client"
import Link from "next/link";
import { useState } from "react";
import formstyles from "@/styles/formstyles.module.css"

// onclose
const Login=({onClose}:any)=>{
    const[email,setEmail]=useState('micorreo@micorreo.com')
    const[password,setPassword]=useState('')
    const handleLogin=()=>{
        console.log(`Login con correo: ${email} y contraseña ${password}` );
    }
return(
    
<div className={formstyles.modal}>
<div className={formstyles.modalContent}>
        <h2>Iniciar sesión</h2>
        <label htmlFor="email">Correo: </label>
        <input type="email" id="email" value={email} onChange={(e)=>{
            setEmail(e.target.value)
        }}/> 

        <label htmlFor="password">Password: </label>
        <input type="password" id="password" value={password} onChange={(e)=>{
            setPassword(e.target.value)
        }}/> 

        <button onClick={handleLogin}>Iniciar Sesión</button>
        <p>¿No tienes cuenta? <Link href="/pages/registro"> Registrate aqui</Link> </p>
        <button onClick={onClose}>Cerrar</button>
        {/* onClick={onclose} */}
    </div>
</div>

)

}


export default Login;