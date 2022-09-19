/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import {useLocation} from 'react-router-dom'

function Footer() {
  const location = useLocation()
  return (location.pathname !== '/dashboard') && (location.pathname !== '/login') && (location.pathname !== '/register') &&  (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/advise" className="nav-link px-2 text-muted">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="/quiz" className="nav-link px-2 text-muted">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="/members" className="nav-link px-2 text-muted">
              About
            </a>
          </li>
        </ul>
        <p className="text-center text-muted">© 2022</p>
      </footer>
    </div>
  )
}

export default Footer
