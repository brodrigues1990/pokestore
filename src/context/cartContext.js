import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    return (
        <CartContext.Provider value={{ cartList, setCartList }}>
            {children}
        </CartContext.Provider>
    )
};

export const useCart = () => {
    const context = useContext(CartContext);
    if(!context) throw new Error("useCart must be used within a CartProvider");
    const { cartList, setCartList } = context;
    return { cartList, setCartList };
}

export default CartProvider;