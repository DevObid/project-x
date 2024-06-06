import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div>

            <Link to="footer">footer</Link>
            <Link to="header">header</Link>

        </div>
    )
}

export default Nav