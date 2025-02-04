import './Footer.css';

const Footer = () => {
    return (
        <>
        <footer className='footer'>
            <h1>THE COMPANY NAME</h1>
            <p className='copywrite'>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </footer>
        </>
   
    );
};

export default Footer;