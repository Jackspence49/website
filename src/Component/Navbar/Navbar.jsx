import  { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar">
            <button className="navbar-toggle" onClick={toggleNavbar}>☰</button>
            <h1>Company Logo</h1>
            <ul className={isOpen ? 'show' : ''}>
                <li>The App</li>
                <li>The Buisness Solution</li>
                <li>About Us</li>
            </ul>
        </div>
    );
};

export default Navbar;