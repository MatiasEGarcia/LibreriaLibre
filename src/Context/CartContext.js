import React, { createContext, useEffect, useState } from 'react'

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalAmount, setTotalAmount] = useState();

    useEffect(() => {
        let totalQuantity = 0;
        let totalAmount = 0;
        cart.forEach(book => {
            totalQuantity += book.quantity;
            totalAmount += book.price * book.quantity;
        });
        setTotalAmount(totalAmount);
        setTotalQuantity(totalQuantity);
    }, [cart]);

    const addBook = (bookToAdd) => {
        if (!isInCart(bookToAdd.id)) {
            setCart([...cart, bookToAdd]);
        } else {
            console.log(`This book is already in the cart, idBook: ${bookToAdd.id} `);
        }
    };

    const removeBook = (id) => {
        setCart(cart.filter(book => book.id !== id));
    }

    const clearCart = () => {
        setCart([]);
        console.log(`clean cart`);
    }

    const isInCart = (id) => {
        return cart.some(book => book.id === id);
    };


    return (
        <CartContext.Provider value={{
            cart,
            totalQuantity,
            addBook,
            removeBook,
            clearCart,
            isInCart,
            totalAmount
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;