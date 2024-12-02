import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about-us">About Us</Link>
                </li>
                <li>
                    <Link to="/blog-list">Blog List</Link>
                </li>
                <li>
                    <Link to="/contact-us">Contact Us</Link>
                </li>
                <li>
                    <Link to="/our-works">Our Works</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar