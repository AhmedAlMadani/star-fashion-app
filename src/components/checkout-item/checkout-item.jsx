import './checkout-item.styles.scss';
import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, quantity, price} = cartItem;
    const {clearItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext);

    const clearFromCart = () => {
        clearItemFromCart(cartItem);
    }

    const incrementItem = () =>{
        addItemToCart(cartItem);
    }

    const decrementItem = () =>{
        removeItemFromCart(cartItem);
    }

    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='minus' onClick={decrementItem}>&#x2212;</div>
                    <span className='quantity-value'>{quantity}</span>
                <div className='plus'  onClick={incrementItem}>&#x2b;</div>    
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearFromCart}>&#10005;</div>
        </div>
    )
};

export default CheckoutItem;