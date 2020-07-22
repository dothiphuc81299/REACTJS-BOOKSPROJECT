import React from 'react';
import BooksContainer from './books-container';
let BooksSection =(props)=>
{
    return(
        <section id="books-section">
                <div className="container">
                    <div className="section-title">
                        <h1>Section title</h1>
                    </div>
                </div>
                <BooksContainer/>
                <BooksContainer/>
                <BooksContainer/>
                <BooksContainer/>
                <BooksContainer/>
                <BooksContainer/>
        </section>
    )
}

export default BooksSection;

