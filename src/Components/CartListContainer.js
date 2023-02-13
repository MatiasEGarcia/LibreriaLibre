import React, { useContext, useState } from 'react';
import CartContext from '../Context/CartContext';
import ItemList from './ItemList';
import { Link } from 'react-router-dom';

function CartListContainer() {
    const [loading, setLoading] = useState(false);
    const { cart, totalAmount, clearCart } = useContext(CartContext);


    if (!cart.length) {
        return (
            <div className="container cartEmptyListContainer">
                <h3>There are not books in cart</h3>
                <Link to="/" className="btn btn-success" >
                    <i className="fa-solid fa-arrow-left"></i>
                    Index
                </Link>
            </div>
        )
    }

    return (
        <div className='container cartListContainer'>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th scope='col'>Book</th>
                        <th scope='col'>Quantity</th>
                        <th scope='col'>Amount</th>
                        <th scope='col'><button className='btn btn-danger' onClick={() => clearCart()}>Remove all</button></th>
                    </tr>
                </thead>
                <tbody className='table-group-divider'>
                    <ItemList books={cart} item="cart" />
                </tbody>
            </table>
        </div>
    )
}

export default CartListContainer