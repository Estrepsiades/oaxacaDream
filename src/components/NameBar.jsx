import React, { useState } from 'react'

export const NameBar = ({onNewBookmark}) => {
  const [inputValue, setinputValue] = useState('')
  const onInputChange = ( event ) => {
    setinputValue(event.target.value);
  };
  const onSubmit = ( event ) => {
    event.preventDefault();
    if( inputValue.trim().length < 1 ) return;
    const bookMark ={
      name: inputValue,
      id: new Date().getMilliseconds(),
      items: []
    }
    onNewBookmark( bookMark );
    setinputValue('');
  };
  return (
    <form onSubmit={ onSubmit }>
      <input type="text"
      placeholder='New BookMark'
      value={ inputValue }
      onChange= { onInputChange } />
    </form>
  )
}
