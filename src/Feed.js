import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Search from './components/Search';
import Version from './components/Version';
import Book from './components/Book';
import Chapter from './components/Chapter';


 
const Feed = ({searchicon, addbookmarkicon}) => {
 
  axios.defaults.headers.common['api-key']='6f9c7d0c19762a205018465f47308c71'
  
  const [verses, setVerses] = useState([])
  const [versionId, setVersionId] = useState('0c2ff0a5c8b9069c-01')
  const [bookId, setBookId] = useState('MRK')

  

  useEffect(() => {
    const fetchVerses = async () => {
    const result = await axios(`https://api.scripture.api.bible/v1/bibles/0c2ff0a5c8b9069c-01/chapters/MRK.1`)
  // const result = await axios(`https://api.scripture.api.bible/v1/bibles`)

  console.log("verses",result.data.data)

  setVerses(result.data.data)
  }
  
  fetchVerses()
}, []) 

const selectedVersion = (versionId) => {
  setVersionId(versionId)
}

const selectedBook = (bookId) => {
  setBookId(bookId)
}


const createMarkup = () => {
  return {__html: verses.content};
}

 
    return (
      <div className="feed">
    
        <div className="toolbar">
          <Link to="search"><img src={searchicon} alt='Search' /></Link>
          <Book versionid={versionId} selectedbook={selectedBook} />
          <Version selectedversion={selectedVersion}/>
          <Chapter bookid={bookId} versionid={versionId}/>
          <div><img src={addbookmarkicon} alt='Add bookmark' /></div>
        </div>
        
        
        <Switch>
          <Route path="/search">
            <Search />
            
          </Route>
          <Route path="/">
            <div className="texts">
                <div className="verses">
                  
                <div dangerouslySetInnerHTML={createMarkup()} />
                
                </div>
            </div>
          </Route>
        </Switch>
          
        
    </div>
  );
}

export default Feed 