import React, { useContext } from 'react'
import CartContext from '../Context/CartContext';
import { toast } from 'react-hot-toast';

function CartItem({ id, name, price, quantity }) {

  const { removeBook } = useContext(CartContext);
  const amount = price * quantity;

  const removerFromCart = () => {
    removeBook(id)
    toast.success(`${name} was removed from cart`, {
      duration: 3000,
      position: 'top-center',
    })
  }


  return (
    <tr>
      <th>{name}</th>
      <td>{quantity}</td>
      <td>{amount}</td>
      <td>
        <button className='btn btn-warning' onClick={removerFromCart}>Remove</button>
      </td>
    </tr>
  )
}

export default CartItem;