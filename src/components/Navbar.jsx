import "./Navbar.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg shadow-sm custom-navbar sticky-top px-2 px-md-4 py-2">
            <div className="container-fluid">
                {/* Logo */}
                <Link to="/" className="navbar-brand fw-bold logo-text logo-main d-flex align-items-center">
                    <img
                        src={logo}
                        alt="Santosh Farm's Logo"
                        className="logo-img me-2"
                        style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "contain"
                        }}
                    />
                    <span className="logo-text d-none d-sm-inline">Santosh Farm's</span>
                </Link>

                {/* Mobile Toggle Button */}
                <button
                    className="navbar-toggler border-0 p-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible Content */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    {/* Center: Navigation Links */}
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item px-2 px-lg-3">
                            <Link to="/" className="nav-link nav-animate text-center">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item px-2 px-lg-3">
                            <Link to="/aboutme" className="nav-link nav-animate text-center">
                                About
                            </Link>
                        </li>
                        <li className="nav-item px-2 px-lg-3">
                            <Link to="/products" className="nav-link nav-animate text-center">
                                Products
                            </Link>
                        </li>
                    </ul>

                    {/* Right: Contact Us */}
                    <div className="d-flex justify-content-center justify-content-lg-end mt-2 mt-lg-0">
                        <Link to="/contact" className="contact-btn animate-hover px-3 py-2">
                            <i className="fas fa-phone me-2 d-none d-md-inline"></i>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;