import React ,{Component}from 'react';

import BookDetailPage from './pages/book-detail';
import BooksSectionPage from './pages/books-section';
class App  extends Component  {
  render()
  {
    return (
      <div>
         <BooksSectionPage/>
      </div>
    
    );
  }
 
}

export default App;
