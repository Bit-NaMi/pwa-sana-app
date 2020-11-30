import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Version = () => {
    const [version, setVersion] = useState([])

      useEffect(() => {
        const fetchVersion = async () => {
      const result = await axios(`https://www.abibliadigital.com.br/api/versions`)
    
  
      console.log(result.data)

      setVersion(result.data)
      
      }
  
      fetchVersion()
    }, [])
  
  
      return (
        <div className="Version">
            <select>
              
              {version.map(version => (
                <option key={version.version}>{version.version}</option>
              ))}
            
            </select>          
          
      </div>
    );
  }
  
  export default Version 