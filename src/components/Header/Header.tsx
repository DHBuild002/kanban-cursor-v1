import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import './Header.css';
import './LogOutBtn.css';
import { useAuth } from '../../context/AuthContext'; // Import useAuth
import { supabase } from '../../supabaseClient';

const Header: React.FC = () => {
    const { isAuthenticated } = useAuth();

    const handleLogout = async () => {
        await supabase.auth.signOut();
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
                        <Link to="/login" className="nav-link">Login</Link>
                        <Link to="/register" className="nav-link">Register</Link>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;