import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/a-logo.png'
import './header.styles.scss'

const Header = () => (
    <div className='header'>
        <div className='options-left'>
            <Link to='/collection' className='option'> COLLECTIONS </Link>
            <Link to='/collection' className='option'> CONTACT </Link>
        </div>
        <Link className='logo-container' to='/'>
            <img className='logo' src={img} alt='logo' />
        </Link>
        <div className='options-right'>
            <Link to='/signin' className='option'> SING IN </Link>
            <Link to='/collection' className='option'> CART </Link>
        </div>
        
    </div>
)
export default Header;