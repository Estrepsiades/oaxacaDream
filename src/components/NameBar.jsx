import React, { useState } from 'react'
import '../css/nameBar.css'
export const NameBar = ({onNewBookmark, updateErrors}) => {
  const [inputValue, setinputValue] = useState('')
  const onInputChange = ( event ) => {
    setinputValue(event.target.value);
  };
  const onSubmit = ( event ) => {
    event.preventDefault();
    if( inputValue.trim().length < 1 ) return updateErrors('No puedes hacer bookmarks sin texto');
    const bookMark ={
      name: inputValue,
      id: new Date().getMilliseconds(),
      items: []
    }
    onNewBookmark( bookMark );
    setinputValue('');
  };
  return (
    <form className='input-group' onSubmit={ onSubmit }>
      <input className='input' type="text"
      value={ inputValue }
      onChange= { onInputChange } />
      <label className='user-label'>New Bookmark</label>
    </form>
  )
}
