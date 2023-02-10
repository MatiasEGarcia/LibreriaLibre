import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getBooks } from '../asyncmock';

function ItemListContainer() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getBooks().then((dataBooks) => {
      setBooks(dataBooks);
    }).catch(error => {
      console.log(error);
    }).finally(() => {
      setLoading(false);
    });

  },[]);

  if (loading) {
    return (
      <h2>Loading ...</h2>
    )
  }

  return (
    <div className='container itemListContainer'>
      {books.length > 0 ? <ItemList books={books}/> : <h2>There are not books</h2>}
    </div>
  )
}

export default ItemListContainer;