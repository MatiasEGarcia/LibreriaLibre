import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getBooks } from '../asyncmock';
import { useParams } from 'react-router-dom';
import Loading from '../Animations/Loading.json';
import Lottie from "lottie-react";

function ItemListContainer() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const {categoryName} = useParams();
  const loadingStyle = {
    height: 300
}

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
      <h2><Lottie animationData={Loading} style={loadingStyle}/></h2>
    )
  }

  return (
    <div className='container itemListContainer'>
      {books.length > 0 ? <ItemList books={books} item="item"/> : <h2>There are not books</h2>}
    </div>
  )
}

export default ItemListContainer;