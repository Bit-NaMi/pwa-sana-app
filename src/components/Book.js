import React, { useState, useEffect, version } from 'react';
import axios from 'axios';

const Book = ({versionid}) => {
    const [book, setBook] = useState([])
    axios.defaults.headers.common['api-key']='6f9c7d0c19762a205018465f47308c71'

      useEffect(() => {
        const fetchBook = async () => {
      const result = await axios(`https://api.scripture.api.bible/v1/bibles/${versionid}/books`)
  
      console.log('books', result.data.data)

      setBook(result.data.data)
      
      }
  
      fetchBook()
    }, [versionid ])
  
  
      return (
        <div className="Book">
            <select>
              
              {book.map(book => (
                <option key={book.name}>{book.name}</option>
              ))}
            
            </select> 
              <div>{versionid}</div>        
          
      </div>
    );
  }
  
  export default Book