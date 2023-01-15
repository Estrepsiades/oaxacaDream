import React, { useState } from 'react'
import produce from 'immer'
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
    setbookMark(
      produce( bookMark, draft => {
        draft[numberOfBookMark].items.push( item )
      })
    )
  };
  //Suegrencia, aviso de elimincacion
  const onDeleteItem = ( numberOfBookMark, id ) => {
    console.log(` Se ejecuta en DoNext con NB ${ numberOfBookMark} y id ${ id }`)
    const newArray = bookMark[numberOfBookMark].items.slice()
    const updateArray = newArray.filter( e => e.id !== id )
    console.log( updateArray );
    setbookMark(
      produce( bookMark, draft => {
        draft[numberOfBookMark].items = updateArray
      })
    )
    
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
      deleteItem = { onDeleteItem } 
    />
    </>
  )
}
