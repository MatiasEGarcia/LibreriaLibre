import React, { useState } from 'react'

//initial value will be the stock
function Counter({ initialValue, add }) {
    const [quantity, setQuantity] = useState(0);

    const increment = () => {
        (quantity < initialValue && true) && setQuantity(quantity + 1);
    }

    const decrement = () => {
        if (quantity !== 0) setQuantity(quantity - 1);
    }

    return (
        <ul className='counterContainer'>
            <li>
                <button type='button'
                    className='decrementButton btn btn-danger'
                    onClick={decrement}>
                        <i className="bi bi-dash-lg"></i>
                    </button>
            </li>
            <li className='order'><p>{quantity}</p></li>
            <li>
                <button type='button'
                    className='incrementButton btn btn-success'
                    onClick={increment}>
                        <i className="bi bi-plus-lg"></i>
                    </button>
            </li>
            <li>
            <button type='button'
                    className='cartButton btn btn-success'
                    onClick={() => add(quantity)}><i className="bi bi-bag-check"></i></button>
            </li>
        </ul>
    )
}

export default Counter