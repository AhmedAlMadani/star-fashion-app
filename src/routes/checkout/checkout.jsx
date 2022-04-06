import './checkout.styles.scss';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {useTranslation} from 'react-i18next';

import CheckoutItem from '../../components/checkout-item/checkout-item';

const CheckOut = () =>{
    const {cartItems, cartTotal} = useContext(CartContext);
    const {t} = useTranslation();



    return(         
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>{t('product')}</span>
                </div>
                <div className='header-block'>
                    <span>{t('description')}</span>
                </div>
                <div className='header-block'>
                    <span>{t('quantity')}</span>
                </div>
                <div className='header-block'>
                    <span>{t('price')}</span>
                </div>
                <div className='header-block'>
                    <span>{t('remove')}</span>
                </div>
            </div>
            
            {cartItems.map((cartItem) => {
                return(
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                );
            })}   
            <span className='total'>{t('total')}: ${cartTotal}</span>  
        </div>
    );
};

export default CheckOut;