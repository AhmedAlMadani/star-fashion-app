import './cart-dropdown.styles.scss';
import { useContext } from 'react';
import {useTranslation} from 'react-i18next';
import i18n from '../i18next/i18next';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button';
import CartItem from '../cart-item/cart-item';

const CartDropdown = () => {
    const {cartItems, isCartOpen, setIsCartOpen} = useContext(CartContext);
    const {t} = useTranslation();
    const navigate = useNavigate();

    const navigateToCheckout = () => {
        navigate('/checkout');
        setIsCartOpen(!isCartOpen);
    }
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item)=>(
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <Button onClick={navigateToCheckout} >CHECKOUT</Button>
        </div>
    )
}
export default CartDropdown;