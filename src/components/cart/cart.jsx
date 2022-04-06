import './cart.styles.scss';
import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {AiOutlineShoppingCart} from 'react-icons/ai';

const Cart = () => {
    const { isCartOpen ,setIsCartOpen, cartCount} = useContext(CartContext);
    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    }

    return(
        <div className='cart-container' onClick={toggleIsCartOpen}>
            <AiOutlineShoppingCart className='cart-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
};

export default Cart;