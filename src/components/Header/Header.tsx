import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import './Header.css';
import './LogOutBtn.css';
import { useAuth } from '../../context/AuthContext'; // Import useAuth

const Header: React.FC = () => {
    const { isAuthenticated, logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <header className="header">
            <Avatar />
            <nav>
                {isAuthenticated ? (
                    <>
                        {/* Optionally display user info here */}
                        <button className='logout-button' onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;