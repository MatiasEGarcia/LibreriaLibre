import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getBooks } from '../asyncmock';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const {categoryName} = useParams();

  useEffect(() => {
    setLoading(true);

    getBooks(categoryName).then((dataBooks) => {
      setBooks(dataBooks);
    }).catch(error => {
      console.log(error);
    }).finally(() => {
      setLoading(false);
    });

  },[categoryName]);

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