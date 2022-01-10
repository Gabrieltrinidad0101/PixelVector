import axios from "axios"
import React, { useState } from 'react'
export default function Register() {
    const [email,setEmail] = useState("") 
    const [password,setPassword] = useState("") 
    const [passwordVerify,setPasswordVerify] = useState("")
    
    async function register(e){
        e.preventDefault();
         try {
             const registerData = {
                 email, password,passwordVerify
             }
             const data = await axios.post("http://localhost:4000/auth/",registerData)
             console.log(data);
         } catch (error) {
             console.log(error);
         }
    }

    return (
        <div>
            <h1>Register a new account</h1>
            <form action="" onSubmit={register}>
                <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                <input type="password" placeholder="Verify yoiur password" onChange={(e)=>setPasswordVerify(e.target.value)} value={passwordVerify}/>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}
