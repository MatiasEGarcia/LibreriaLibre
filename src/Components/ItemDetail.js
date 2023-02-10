import React from 'react'

function ItemDetail({ id, name, img, price, description, stock, categoryList }) {
    return (
        <>
            <div className='card mb-3 cardContainer'>
                <div className='row g-0'>
                    <div className="col-md-4 imgCol">
                        <div className="containerImg">
                            <img src={img} className="img" alt={name} />
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <div className="card-header">
                            <h2 className="card-title">{name}</h2>
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="bookPrice list-group-item"><h4>Price :</h4> ${price}</li>
                                <li className="containerbookCategories list-group-item">
                                    <h4>Categories</h4>
                                    <ul className="bookCategories">
                                        {categoryList}
                                    </ul>
                                </li>
                                <li className="bookDescription list-group-item">
                                    <h4>Descripcion</h4>
                                    {description}
                                </li>
                                <li className="bookStock list-group-item">
                                    <h4>Stock</h4> : {stock}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail