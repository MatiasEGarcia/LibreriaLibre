import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getBookById } from '../asyncmock';
import { Link } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Loading from '../Animations/Loading.json';
import Lottie from "lottie-react";

function ItemDetailContainer() {
    const [book, setBook] = useState();
    const [noBook, setNoBook] = useState({ errorMessage: null });
    const [loading, setLoading] = useState(true);
    const [categoryList, setCategoryList] = useState();
    const { id } = useParams();
    const loadingStyle = {
        height: 300
    }

    useEffect(() => {
        getBookById(id).then((bookData) => {
            setBook(bookData);
        }).catch(error => {
            setNoBook({
                errorMessage: error
            })
        }).finally(() => {
            setLoading(false);
        });
    }, [id]);

    useEffect(() => {
        if (book) {
            try {
                setCategoryList(book.category.map(cate =>
                    <li key={cate}>
                        {cate}
                    </li>
                ))
            } catch (error) {
                setNoBook({
                    errorMessage: error
                })
            }

        }
    }, [book])

    if (loading) {
        return (<Lottie animationData={Loading} style={loadingStyle}/>)
    };

    if (noBook.errorMessage) {
        return (
            <div className="container">
                <h2>There was an error : {noBook.errorMessage}</h2>
                <Link to="/" className="btn btn-success" >
                    <i className="bi bi-arrow-left-circle mb-2"></i>
                    Index
                </Link>
            </div>
        )
    }

    return (
        <div className='container itemDetailContainer'>
            <div className='row'>
                <h1 className='titleDetailBook'>Detail book</h1>
            </div>
            <div className='row'>
                <ItemDetail {...book} categoryList={categoryList} />
            </div>
        </div>
    )
}

export default ItemDetailContainer