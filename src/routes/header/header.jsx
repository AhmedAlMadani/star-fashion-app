import React from 'react';
import { Fragment, useContext } from 'react' ;
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../Utils/firebase/firebase';
import Cart from '../../components/cart/cart';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';
import img from '../../assets/a-logo.png'
import './header.styles.scss'

const Header = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    return(
        <Fragment>
            <div className='header'>
                <div className='options-left'>
                    <Link className='option' to='/' > HOME </Link>
                    <Link className='option' to='/collections' > COLLECTIONS </Link>
                    {currentUser?(
                        <span className='option' onClick={signOutUser}>SIGN OUT</span>
                    ):(
                        <Link className='option' to='/auth'> SING IN </Link>
                    )}
                </div>
                <Link className='logo-container' to='/'>
                    <img className='logo' src={img} alt='logo' />
                </Link>
                <div className='options-right'>
                    <Cart/>
                </div>
                {isCartOpen && <CartDropdown/>}
            </div>
            <Outlet />
        </Fragment>
    
    );
};
export default Header;