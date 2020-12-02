import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chapter = () => {
    const [chapter, setChapter] = useState([])

      useEffect(() => {
        const fetchChapter = async () => {
      const result = await axios(`https://www.abibliadigital.com.br/api/verses/:version/:abbrev/:chapter`)
    
  
      console.log(result.data)

      setChapter(result.data)
      
      }
  
      fetchChapter()
    }, [])
  
  
      return (
        <div className="chapter">
            <select>
              
              {chapter.map(chapter => (
                <option key={chapter.name}>{chapter.name}</option>
              ))}
            
            </select>          
          
      </div>
    );
  }
  
  export default Chapter