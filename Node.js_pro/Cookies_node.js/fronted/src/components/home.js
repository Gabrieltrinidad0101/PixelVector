import axios from 'axios'
import React, { useState } from 'react'

export default function Home() {

    const [name,setName] = useState("")

    async function User(){
        const user = await axios("http://localhost:4000/customer")
        setName(user)
        return(
            <p>lll</p>
        )
    }
    return (
           <User></User> 
    )
}
