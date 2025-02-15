import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2025 NutrifyLife. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaFacebook size={20} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaGithub size={20} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaLinkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
