import React from 'react'
import { Link } from 'react-router-dom'

function Item({id,name,price,img}) {
  return (
    <div className='card listBookCard'>
        <div className='containerImg'>
            <img src={img} className="card-img-top img" alt='name'/>
        </div>
        <div className='card-body'>
            <h5 className='card-title bookName'>{name}</h5>
            <p className='card-text bookPrice'>Price : ${price}</p>
            <Link to={`/book/${id}`} className="btn btn-primary detailButton">Book details</Link>
        </div>
    </div>
  )
}

export default Item