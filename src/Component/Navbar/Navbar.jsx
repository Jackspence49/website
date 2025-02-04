import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="navbar">
            <button className="navbar-toggle" onClick={toggleNavbar}>☰</button>
            <h1>Company Logo</h1>
            <ul className={isOpen ? 'show' : ''}>
                <li>The App</li>
                <li>Business Solution</li>
                <li>About Us</li>
            </ul>
        </div>
    );
};

export default Navbar;