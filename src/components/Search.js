import React, { useState } from 'react';

const Search = () => {
    
    const [text, setText] = useState ('')

    return (
    <div className='search'>
        <form> 
            <input 
            type='text'
            className='search-form'
            placeholder= 'Etsi hakusanalla'
            value= {text}
            onChange={(e) => setText(e.target.value)}
             />
        </form>
      </div>
      )
}

export default Search     
            
            
            