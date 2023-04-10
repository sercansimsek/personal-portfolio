import React, { useState } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import './NavbarStyles.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import letterS from '../../assets/letter-s.png';


export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [letColorChange, setLetColorChange] = useState(false);

    const handleMenuOpener = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const changeColor = () => {
        if (window.scrollY >= 100) {
            setLetColorChange(true);
        } else {
            setLetColorChange(false);
        }
    };

    window.addEventListener('scroll', changeColor);

  return (
    <div className={cn('header', {
        'header-bg': letColorChange,
    })}>
        <Link to={'/'}>
            <img src={letterS} alt="logo" className='logoS'/>
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
