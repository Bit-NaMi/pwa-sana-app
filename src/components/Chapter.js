import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chapter = ({selectedchapter, versionid, bookid}) => {
  const [chapters, setChapters] = useState([])
    axios.defaults.headers.common['api-key']='6f9c7d0c19762a205018465f47308c71'

      useEffect(() => {
        const fetchChapters = async () => {
       const result = await axios(`https://api.scripture.api.bible/v1/bibles/${versionid}/books/${bookid}/chapters`)
      // const result = await axios(`https://api.scripture.api.bible/v1/bibles/0c2ff0a5c8b9069c-01/books/MRK/chapters`)
  
      console.log('chapters', result.data.data)

      setChapters(result.data.data)
      
      }
  
      fetchChapters()
    }, [versionid, bookid])
  
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);
    const [selectedOption, setSelectedOption] = useState(null);

    const onOptionClicked = chapter => {
      setSelectedOption(chapter.number);
      selectedchapter(chapter.id);
      setIsOpen(false);
      console.log('clicked chapter', chapter.number)
    };
  
      return (
        <div className="Chapter">
            
            <div className="DropdownHeader" onClick={toggling}>{selectedOption || 'Chapter'}</div> 
              {isOpen && (
              <div className="DropdownContainer" >
                <ul className="DropdownList">
                {chapters.map(chapter => (
                  <li className="ListItem" onClick={e => onOptionClicked(chapter)} key={chapter.id} value={chapter.id}>{chapter.number}</li>
                  ))}
                  </ul>
                  </div>
             )}
            
          
      </div>
    );
  }
  
  export default Chapter