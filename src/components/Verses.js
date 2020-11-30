import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Verses = () => {
    const [verses, setVerses] = useState([])

      useEffect(() => {
        const fetchVerses = async () => {
      const result = await axios(`https://www.abibliadigital.com.br/api/verses/bbe/sl/27`)
    
      console.log(result.data.verses)

      setVerses(result.data.verses)
      
      }
  
      fetchVerses()
    }, [])
  
  
      return (
        <div className="verses">
              
              {verses.map(verses => (
                <p key={verses.number}>{verses.number + " " + verses.text}</p>
              ))}
            
        </div>
    );
  }
  
  export default Verses