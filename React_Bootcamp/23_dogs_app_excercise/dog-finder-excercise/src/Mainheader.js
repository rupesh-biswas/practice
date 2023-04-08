import React from 'react'
import Navbar from './Components/Navbar'

function Mainheader(props) {
    return (
        <header>
            <Navbar dogs={props.dogs} />
        </header>
    )
}

export default Mainheader