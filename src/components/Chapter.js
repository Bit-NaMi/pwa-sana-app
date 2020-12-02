import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chapter = ({versionid, bookid}) => {
  const [chapter, setChapter] = useState([])
    axios.defaults.headers.common['api-key']='6f9c7d0c19762a205018465f47308c71'

      useEffect(() => {
        const fetchChapter = async () => {
       const result = await axios(`https://api.scripture.api.bible/v1/bibles/${versionid}/books/${bookid}/chapters`)
      // const result = await axios(`https://api.scripture.api.bible/v1/bibles/0c2ff0a5c8b9069c-01/books/MRK/chapters`)
  
      console.log('chapters', result.data.data)

      setChapter(result.data.data)
      
      }
  
      fetchChapter()
    }, [versionid, bookid])
  
  
  
      return (
        <div className="Chapter">
            <select>
              
              {chapter.map(chapter => (
                <option key={chapter.number}>{chapter.number}</option>
              ))}
            
            </select> 
          
      </div>
    );
  }
  
  export default Chapter