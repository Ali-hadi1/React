import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
        <header>
            <Link to="/">#VANLIFE</Link>
            <nav>
                <Link to="/vans">Vans</Link>
                <Link to="/about">About</Link>
            </nav>
        </header>
    </>
  )
}
