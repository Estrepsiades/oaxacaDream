import React, { useState } from 'react'
import { ActualBookmark } from './components/ActualBookmark'
import { NameBar } from './components/NameBar'
export const DoNext = () => {
  const [bookMark, setbookMark] = useState([])
  const onAddNewBookMark = ( newBookMark ) => {
    setbookMark([ newBookMark, ...bookMark ]);
    console.log( bookMark );
  }
  const onDeleteBookMark = ( id ) => {
    setbookMark(bookMark.filter( bookmark => bookmark.id != id ))
  };
  const onAddNewItem = ( numberOfBookMark, item ) => {
    const itemsTest = bookMark[numberOfBookMark].items
    itemsTest.push( item );
    console.log( bookMark );
  };
  const onDeleteItem = () => {

  };
  return (
    <>
    <h1>DoNext</h1>
    <NameBar 
      onNewBookmark = { onAddNewBookMark }
    />
    <ActualBookmark
      bookMarks = { bookMark }
      addNewItem = { onAddNewItem }
      deleteClick = { onDeleteBookMark } 
    />
    </>
  )
}
