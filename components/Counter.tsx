"use client"
import { useState } from "react"

const Counter=()=>{
    const [counter, setCounter]=useState(0); 
    const [showMessage, setShowMessage]=useState(false);

    return(
       <div>
        <p>Haz eccho click {counter} veces.</p>
        <button onClick={()=> {
            setCounter(counter+1)
            }}>Click aqui my love💗</button>

            <button onClick={()=>{
                setCounter(0); 
            }}>Reset</button>
            

            <br /><br />

            <button onClick={()=>{
                setShowMessage(!showMessage)
            }}>{!showMessage ? "Mostrar mensaje":"Ocultar Mensaje"}</button>
            {
                showMessage && <p>Hola mundette, eres muy pendejette</p>
            }
       </div>
    )
}


export default Counter;