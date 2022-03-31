import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {

    //find if cartItem contains productToAdd

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id);

    //if found, increment the 
    
    if (existingCartItem) {
        return cartItems.map((cartItem) => 
            cartItem.id === productToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        );
    }

    //if not found, return new array with modified or new cartItem
    //And this fuction will trigger when we are adding item 
    //to the cart for the first time

    return [...cartItems, {...productToAdd, quantity:1}];
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen : () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect (()=>{
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity, 0);
            setCartCount(newCartCount);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd));
    }


    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount};

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}