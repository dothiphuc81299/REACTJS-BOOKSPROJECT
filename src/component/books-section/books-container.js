import React from 'react';

let BooksContainer=(props)=>
{
    return (
        <div className="books-container">
                <div className="book">
                <div className="book-img">
                    <img src="https://via.placeholder.com/200" alt="" />
                </div>
                <div className="book-info">
                    <div className="book-title">
                    <h3>Book Title</h3>
                    </div>
                    <div className="book-author">
                    <p>By <em>author</em></p>
                    </div>
                    <div className="book-call-to-action">
                    <button className="btn btn-highlight">Detail</button>
                    </div>
                </div>
                </div>
    </div>
    )
}

export default BooksContainer;