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

const removeCartItem = (cartItems, productToRemove) => {

    //find the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToRemove.id);

    // if quantity=1 then remove the item totally
    if (existingCartItem.quantity === 1){
        return cartItems.filter(
            (cartItem) => cartItem.id !== productToRemove.id)
        //filter will keep the items that does not match with the product id
        //we want to remove and will give us new array by default
    }

    //remove from cart and if quantity>1 then decrement it by 1

    return cartItems.map((cartItem) => 
            cartItem.id === productToRemove.id ?
            {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
        );
};

const clearCartItem = (cartItems, productToClear) => {
    return (
        cartItems.filter(
        (cartItem) => cartItem.id !== productToClear.id)
    )
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen : () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect (()=>{
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity, 0);
            setCartCount(newCartCount);
    }, [cartItems])

    useEffect (()=>{
        const newCartTotal = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
             0);
             setCartTotal(newCartTotal);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd));
    };

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    };

    const clearItemFromCart = (productToClear) => {
        setCartItems(clearCartItem(cartItems, productToClear));
    };


    const value = {
        isCartOpen, 
        setIsCartOpen, 
        addItemToCart, 
        removeItemFromCart,
        clearItemFromCart, 
        cartItems, 
        cartCount,
        cartTotal
    };

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}