import React, { useState } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import './NavbarStyles.css';
import { FaBars, FaTimes } from 'react-icons/fa';


export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuOpener = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
    <div className="header">
        <Link to={'/'}>
            <h1>Portfolio</h1>
        </Link>

        <ul className={cn('nav-menu', {
            'active': isMenuOpen,
        })}>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/projects'}>Projects</Link>
            </li>
            <li>
                <Link to={'/about'}>About</Link>
            </li>
            <li>
                <Link to={'/contact'}>Contact</Link>
            </li>
        </ul>

        <div 
            className="menu-opener"
            onClick={handleMenuOpener}
        >
            {isMenuOpen 
                ? ( <FaTimes size={20} style={{color: '#fff', cursor: 'pointer'}}/> ) 
                : ( <FaBars size={20} style={{color: '#fff', cursor: 'pointer'}}/>)
            }
        </div>
    </div>
  )
}
