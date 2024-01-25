// export default function Registro(){
//     return(
//         <Registro/>
//         // <p> de registro</p>
//         )
// }

"use client"
import Link from "next/link";
import { useState } from "react";
import formstyles from "@/styles/formstyles.module.css"


const Register=({onClose}:any)=>{
    const[email,setEmail]=useState('micorreo@micorreo.com')
    const[password,setPassword]=useState('')
    const[nombre,setNombre]=useState('')
    const handleRegister=()=>{
        console.log(`Login con correo: ${email} y contraseña ${password}, and name ${nombre}` );
    }

   

return(
    
<div className={formstyles.modal}>
<div className={formstyles.modalContent}>
        <h2>REGISTRARSE</h2>
        <label htmlFor="nombre">nombre: </label>
        <input type="nombre" id="nombre" value={nombre} onChange={(e)=>{
            setNombre(e.target.value)
        }}/> 

        <label htmlFor="email">Correo: </label>
        <input type="email" id="email" value={email} onChange={(e)=>{
            setEmail(e.target.value)
        }}/> 

        <label htmlFor="password">Password: </label>
        <input type="password" id="password" value={password} onChange={(e)=>{
            setPassword(e.target.value)
        }}/> 

        <button onClick={handleRegister}>Iniciar Sesión</button>
        <p>¿YA TIENES CUENTA? <Link href="#"> INICA SESION CARAJO</Link> </p>
        <button onClick={onClose} >Cerrar</button>
    </div>
</div>

)

}


export default Register;