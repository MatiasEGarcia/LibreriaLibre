import React from 'react'

function Item({id,name,price,img}) {
  return (
    <div className='card listBookCard'>
        <div className='containerImg'>
            <img src={img} className="card-img-top img" alt='name'/>
        </div>
        <div className='card-body'>
            <h5 className='card-title bookName'>{name}</h5>
            <p className='card-text bookPrice'>Price : ${price}</p>
            <p>See details</p>
        </div>
    </div>
  )
}

export default Item