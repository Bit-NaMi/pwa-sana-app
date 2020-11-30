import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Book = () => {
    const [book, setBook] = useState([])

      useEffect(() => {
        const fetchBook = async () => {
      const result = await axios(`https://www.abibliadigital.com.br/api/books`)
    
  
      console.log(result.data)

      setBook(result.data)
      
      }
  
      fetchBook()
    }, [])
  
  
      return (
        <div className="Book">
            <select>
              
              {book.map(book => (
                <option key={book.name}>{book.name}</option>
              ))}
            
            </select>          
          
      </div>
    );
  }
  
  export default Book