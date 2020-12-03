import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Book = ({selectedbook, versionid}) => {
  const [book, setBook] = useState([])

    axios.defaults.headers.common['api-key']='6f9c7d0c19762a205018465f47308c71'

      useEffect(() => {
        const fetchBook = async () => {
      const result = await axios(`https://api.scripture.api.bible/v1/bibles/${versionid}/books`)
  
      console.log('books', result.data.data)

      setBook(result.data.data)
      
      }
  
      fetchBook()
    }, [versionid])
  
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);
    const [selectedOption, setSelectedOption] = useState(null);

    const onOptionClicked = value => () => {
      setSelectedOption(value);
      setIsOpen(false);
      console.log(selectedOption);
  };
  
      return (
        <div className="Book">
      
      <div className="DropdownHeader" onClick={toggling}>{selectedOption || 'mrk'}</div> 
              {isOpen && (
              <div className="DropdownContainer" >
                <ul className="DropdownList" onChange={e => selectedbook(e.target.value)}>
                {book.map(book => (
                  <li className="ListItem" onClick={onOptionClicked(book.name)} key={book.id}>{book.name}</li>
                  ))}
                  </ul>
                  </div>

            )}
                
            {/* <select onChange={e => selectedbook(e.target.value)}>
              
              {book.map(book => (
                <option key={book.name} value={book.id}>{book.name}</option>
              ))}
            
            </select> 
              <div>{versionid}</div>    */}
          
      </div>
    );
  }
  
  export default Book