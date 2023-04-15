import React from 'react'
import Link from 'next/link'

function Navbar() {
    const styles = {
        display: 'flex',
        background: 'grey',
        justifyContent: 'space-between',
        padding: '1rem'
    }
    return (
        <div style={styles}>
            <Link href={'/'}>Homepage</Link>
            <Link href={'/contact'}>Contact Page</Link>
            <Link href={'/about'}>About Page</Link>
        </div>
    )
}

export default Navbar