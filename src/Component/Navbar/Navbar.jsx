import { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

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
            <h1><Link to="/">Company Logo</Link></h1> {/* Home page link */}
            <ul className={isOpen ? 'show' : ''}>
                <li><Link to="/theApp">The App</Link></li> {/* The App page link */}
                <li><Link to="/businessSolution">Business Solution</Link></li> {/* Business Solution page link */}
                <li><Link to="/aboutUs">About Us</Link></li> {/* About Us page link */}
            </ul>
        </div>
    );
};

export default Navbar;