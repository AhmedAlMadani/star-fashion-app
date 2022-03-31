import './cart.styles.scss';
import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {ReactComponent as CartIcon} from '../../assets/shopping-bag.svg';

const Cart = () => {
    const { isCartOpen ,setIsCartOpen, cartCount} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return(
        <div className='cart-container' onClick={toggleIsCartOpen}>
            <CartIcon className='cart-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
};

export default Cart;