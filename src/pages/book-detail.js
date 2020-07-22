import React from 'react';
import BookDetail from '../component/book-detail/book-detail';
import Header from '../header/header';
import Footer from '../footer/footer';
let BookDetailPage=(props)=>
{
    return(
        <div>
         <Header/>
        <BookDetail/>
        <Footer/>
        </div>

    )
}

export default BookDetailPage;