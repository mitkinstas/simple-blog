import React from 'react';
import block from 'bem-cn';
import { Link } from 'react-router-dom';
import './header.css';
const Header = () => {
    const header = block('header');
    return (
        <header className={header}>
            <div className={header('content')}>
                <Link className={header('logo')} to="/"><strong>Test</strong> your skill</Link>
            </div>
        </header>
    );
};

export default Header;
