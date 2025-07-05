import { Link } from 'react-router-dom';
import './Footer.css'; 

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-wrapper">
                <div className="footer-top">
                    <div className="footer-logo">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="footer-links">
                        <div>
                            <h2 className="footer-heading">Resources</h2>
                            <ul className="footer-list">
                                <li><Link to="/" className="footer-link">Home</Link></li>
                                <li><Link to="/about" className="footer-link">About</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="footer-heading">Follow us</h2>
                            <ul className="footer-list">
                                <li><a href="https://github.com/vivekSingh1406" target="_blank" rel="noreferrer" className="footer-link">Github</a></li>
                                <li><Link to="/" className="footer-link">Discord</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="footer-heading">Legal</h2>
                            <ul className="footer-list">
                                <li><Link to="#" className="footer-link">Privacy Policy</Link></li>
                                <li><Link to="#" className="footer-link">Terms & Conditions</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="footer-separator" />

                <div className="footer-bottom">
                    <span className="footer-copy">
                        © 2025 <a href="https://www.cricbuzz.com/" className="footer-link">viveksinghbais</a>. All Rights Reserved.
                    </span>
                    <div className="footer-socials">
                        <Link to="#" className="footer-icon">🌐</Link>
                        <Link to="#" className="footer-icon">💬</Link>
                        <Link to="#" className="footer-icon">🐦</Link>
                        <Link to="#" className="footer-icon">🐙</Link>
                        <Link to="#" className="footer-icon">🎨</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
