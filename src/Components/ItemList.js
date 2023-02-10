import React from 'react'
import Item from './Item'

function ItemList({books}) {
 
    return(
        <>
            {books.map(book => <Item key={book.id} {...book}></Item>)}
        </>
    )

}

export default ItemList