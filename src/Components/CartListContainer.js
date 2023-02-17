import React, { useContext, useState } from 'react';
import CartContext from '../Context/CartContext';
import ItemList from './ItemList';
import { Link } from 'react-router-dom';
import BookOrderForm from './BookOrderForm';
import { useModal } from '../hooks/useModal';
import Modal from './Modal';
import { buyBooks } from '../asyncmock';

function CartListContainer() {
    const [loading, setLoading] = useState(false);
    const { cart, totalAmount, clearCart } = useContext(CartContext);
    const { isOpen, openModal, closeModal } = useModal(false);

    const OrderSubmit = (evt) => {
        //I think that I dont need prevent default thanks to formik
        setLoading(true);

        const objCreate = {
            buyer:{
                name : evt.name.value,
                surname: evt.surname.value,
                tel: evt.tel.value,
                email:evt.email.value,
                address:evt.address.value
            },
            cart,
            totalAmount
        }

        buyBooks(objCreate).then((id) => {
            clearCart();
            console.log(`Su id de compra es ${id}`);
        }).catch((error) => {
            if(error.type === 'outOfStock')
            console.log(`Hay libros que no tienen stock`);
        }).finally(() => {
            setLoading(false);
            closeModal();
        })
    }

    if (loading) {
        return (<h2>Loading ...</h2>)
    };

    if (!cart.length) {
        return (
            <div className="container cartEmptyListContainer">
                <h3>There are not books in cart</h3>
                <Link to="/" className="btn btn-success" >
                    <i className="bi bi-arrow-bar-left"></i>
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
            <div className='cartListContainerFooter'>
                <button onClick={openModal} className="btn btn-success btn-lg">Buy</button>
                <h3>Total amount : {totalAmount}</h3>
            </div>
            <Modal title="Complete before buying" isOpen={isOpen} closeModal={closeModal}>
                <div className='modalBody'>
                    <BookOrderForm formSubmit={OrderSubmit} />
                </div>
            </Modal>

        </div>
    )
}

export default CartListContainer