import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">MyApp</div>
            <ul className="nav-links">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/roleSelection">Role Selection</Link>
                </li>
                <li>
                    <Link to="/Exporter">Exporter</Link>
                </li>
                <li>
                    <Link to="/Supplier">Supplier</Link>
                </li>
              

                <li>
                  <Link to="/signIn">SignIn</Link>
                </li>

                
            </ul>
        </nav>
    );
};

export default Navbar;
