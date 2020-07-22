import React from 'react';

let Header =(props)=>
{
    return (
        <Header id="header">
        <div className="container">
          <nav>
            <a href="#" className="Logo">Logo</a>
            <ul className="categories">
              <li><a href="#">HTML</a></li>
              <li><a href="#">CSS</a></li>
              <li><a href="#">JavaScript</a></li>
              <li><a href="#">React JS</a></li>
              <li><a href="#">Node JS</a></li>
  
            </ul>
          </nav>
        </div>
      </Header>
    )
}
export default Header;