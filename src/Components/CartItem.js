import React, { useContext } from 'react'
import CartContext from '../Context/CartContext';

function CartItem({id,name,price,quantity}) {

    const{removeBook} = useContext(CartContext);
    const amount = price*quantity;

  return (
    <tr>
        <th>{name}</th>
        <td>{quantity}</td>
        <td>{amount}</td>
        <td>
            <button className='btn btn-warning' onClick={() => removeBook(id)}>Remove</button>
        </td>
    </tr>
  )
}

export default CartItem;