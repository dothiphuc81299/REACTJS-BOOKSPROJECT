import React from 'react';

let BookInfo=(props)=>
{
    return(
        <div className="book-info">
                <div className="book-tilte">
                      <h3>Book Title</h3>
                </div>
                <div className="book-author">
                     <h3>By <em>author</em></h3>
                </div>
                <div className="book-description">
                    <p>Book description</p>
                </div>
        </div>
    )
}

export default BookInfo;