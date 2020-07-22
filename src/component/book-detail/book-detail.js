import React from 'react';
import BookContainer from './book-container';
import BookInfo from './book-info';
import BookReviewContainer from './book-review-container';
let BookDetail =(props)=>
{
    return (
        <section id="book-detail">
                   <BookContainer/>
                   <BookInfo/>
                   <BookReviewContainer/>
        </section>
       
    )
}

export default BookDetail;