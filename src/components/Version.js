import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Version = ({openalert}) => {
    const [version, setVersion] = useState([])
    axios.defaults.headers.common['api-key']='6f9c7d0c19762a205018465f47308c71'

      useEffect(() => {
        const fetchVersion = async () => {
      const result = await axios(`https://api.scripture.api.bible/v1/bibles`)
    
  
      console.log(result.data.data)

      setVersion(result.data.data)
      
      }
  
      fetchVersion()
    }, [])
  
  
      return (
        <div className="Version">
            <select onChange={e => openalert(e.target.value)}>
              
              {version.map(version => (
                <option key={version.id } value={version.id}>{version.name}</option>
              ))}
            
            </select>          
          
      </div>
    );
  }
  
  export default Version 