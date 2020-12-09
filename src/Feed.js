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
  const [chapterId, setChapterId] = useState('MRK.1')

  

  useEffect(() => {
    const fetchVerses = async () => {
    const result = await axios(`https://api.scripture.api.bible/v1/bibles/${versionId}/chapters/${chapterId}`)
  // const result = await axios(`https://api.scripture.api.bible/v1/bibles`)

  console.log("verses",result.data.data)

  setVerses(result.data.data)
  }
  
  fetchVerses()
}, [chapterId,versionId]) 

const selectedVersion = (versionId) => {
  setVersionId(versionId)
}

const selectedBook = (bookId) => {
  setBookId(bookId)
}

const selectedChapter = (chapterId) => {
  setChapterId(chapterId)
}

const createMarkup = () => {
  return {__html: verses.content};
}

 
    return (
      <div className="feed">
    
        <div className="toolbar">
          <Link to="search"><img src={searchicon} alt='Search' /></Link>
          <Book versionid={versionId} selectedbook={selectedBook} />
          <Chapter bookid={bookId} versionid={versionId} selectedchapter={selectedChapter}/>
          <Version selectedversion={selectedVersion}/>
          <div><img src={addbookmarkicon} alt='Add bookmark' /></div>
        </div>
        
        
        <Switch>
          <Route path="/search">
            <Search />
            
          </Route>
          <Route path="/">
            <div className="texts">
                <div className="verses">
                <h4>{verses.reference}</h4>
                <div dangerouslySetInnerHTML={createMarkup()} />
                
                </div>
            </div>
          </Route>
        </Switch>
          
        
    </div>
  );
}

export default Feed 