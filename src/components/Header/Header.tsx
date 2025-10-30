import React from 'react';
import Avatar from './Avatar';
import SignInButton from './SignInButton';
import './Header.css'; // Assuming you will create a CSS file for styling

const Header: React.FC = () => {
    return (
        <header className="header">
            <Avatar />
            <SignInButton />
        </header>
    );
};

export default Header;