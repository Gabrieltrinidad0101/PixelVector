import axios from "axios"
import React, { useState } from 'react'
export default function Login(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    
    async function login(e){
        e.preventDefault();
         try {
             const login = {
                 email, password
             }
             const data = await axios.post("http://10.0.0.4:4000/auth/login",login)
             console.log(data);
         } catch (error) {
             console.log(error);
         }
    }

    return (
        <div>
            <h1>Login in to your account</h1>
            <form action="" onSubmit={login}>
                <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}
