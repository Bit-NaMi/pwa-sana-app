import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Book = ({selectedbook, versionid}) => {
  const [books, setBooks] = useState([])

    axios.defaults.headers.common['api-key']='6f9c7d0c19762a205018465f47308c71'

      useEffect(() => {
        const fetchBooks = async () => {
      const result = await axios(`https://api.scripture.api.bible/v1/bibles/${versionid}/books`)
  
      console.log('books', result.data.data)

      setBooks(result.data.data)
      
      }
  
      fetchBooks()
    }, [versionid])
  
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);
    const [selectedOption, setSelectedOption] = useState(null);

    const onOptionClicked = book => {
      setSelectedOption(book.abbreviation);
      selectedbook(book.id);
      setIsOpen(false);
      console.log('clicked')
    };

  console.log(selectedOption);

  
      return (
        <div className="Book">
      
      <div className="DropdownHeader" onClick={toggling}>{selectedOption || 'Book/Chapter'}</div> 
              {isOpen && (
              <div className="DropdownContainer" >
                <ul className="DropdownList">
                {books.map(book => (
                  <li className="ListItem" onClick={e => onOptionClicked(book)} key={book.id} value={book.id}>{book.name}</li>
                  ))}
                  </ul>
                  </div>
             )}
          
      </div>
    );
  }
  
  export default Book