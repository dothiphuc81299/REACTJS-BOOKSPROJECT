import React from 'react';
import BooksSection from '../component/books-section/books-section';
import Header from '../header/header';
import Footer from '../footer/footer';

let BooksSectionPage=(props)=>
{
    return (
            <div>
<Header/>
<BooksSection/>
<Footer/>
            </div>
                 

       
    )

}

export default BooksSectionPage;