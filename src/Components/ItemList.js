import React from 'react'
import Item from './Item'
import CartItem from './CartItem'

function ItemList({books, item}) {
 
    if(item.match("item")){
        return(<> {books.map(book => <Item key={book.id} {...book}></Item>)} </>)
    }else{
        return(<> {books.map(book => <CartItem key={book.id} {...book}></CartItem>)} </>)
    }
}

export default ItemList