import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">login</Link>
            <Link to="/customer">Customers</Link>
        </div>
    )
}
