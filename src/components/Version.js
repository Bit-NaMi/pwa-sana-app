import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Version = ({selectedversion}) => {
    const [versions, setVersions] = useState([])
    axios.defaults.headers.common['api-key']='6f9c7d0c19762a205018465f47308c71'

      useEffect(() => {
        const fetchVersions = async () => {
      const result = await axios(`https://api.scripture.api.bible/v1/bibles`)
    
  
      console.log('versions', result.data.data)

      setVersions(result.data.data)
      
      }
  
      fetchVersions()
    }, [])

    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);
    const [selectedOption, setSelectedOption] = useState(null);

    const onOptionClicked = version => {
      setSelectedOption(version.abbreviation);
      selectedversion(version.id);
      setIsOpen(false);
      console.log('clicked')
    };
  
  
      return (
        <div className="Version">

<div className="DropdownHeader" onClick={toggling}>{selectedOption || 'Versio'}</div> 
              {isOpen && (
              <div className="DropdownContainer" >
                <ul className="DropdownList">
                {versions.map(version => (
                  <li className="ListItem" onClick={e => onOptionClicked(version)} key={version.id} value={version.id}>{version.name}</li>
                  ))}
                  </ul>
                  </div>
             )}     
          
      </div>
    );
  }
  
  export default Version 