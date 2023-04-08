import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    const navigate = useNavigate();
    function handleLogin() {
        alert("Logged You In!");
        // navigate('/food/pie', { replace: true });
        navigate('/food/pie');
    }

    return (
        <div className='Navbar'>
            <button onClick={handleLogin}>Log In</button>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    )
}

export default Navbar