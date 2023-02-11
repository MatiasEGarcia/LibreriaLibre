import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import { getBookById } from '../asyncmock';
import { Link } from 'react-router-dom';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
    const [book,setBook] = useState();
    const [noBook, setNoBook] = useState();
    const [loading, setLoading] = useState();
    const [categoryList, setCategoryList] = useState();
    const {id} = useParams();

    useEffect(() => {
        setLoading(true);

        getBookById(id).then((bookData) => {
            setBook(bookData);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        });
    },[id]);

    useEffect(() => {
        if (book) {
            try {
                setCategoryList(book.category.map(cate =>
                    <li key={cate}>
                        {cate}
                    </li>
                ))
            } catch (error) {
                console.log(`Ocurrio un error : ${error}`)
                setNoBook(true);
            }

        }
    }, [book])

    if(noBook){
        return (
            <div className="container">
                <h2>An error has occurred</h2>
                <Link to="/" className="btn btn-success" >
                    <i className="fa-solid fa-arrow-left"></i>
                    Index
                </Link>
            </div>
        )
    }


    if (loading) {
        return (<h2>Loading ...</h2>)
    };

  return (
    <div className='container itemDetailContainer'>
        <div className='row'>
            <h1 className='titleDetailBook'>Detail book</h1>
        </div>
        <div className='row'>
            <ItemDetail {...book} categoryList={categoryList}/>
        </div>
    </div>
  )
}

export default ItemDetailContainer