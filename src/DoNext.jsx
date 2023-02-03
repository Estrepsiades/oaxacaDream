import React, { useState, useEffect } from 'react'
import produce from 'immer'
import { } from 'promise'
import { getUserStorage } from './functions/getUserStorage'
import { writeUserStorage } from './functions/writeUserStorage'
import { writeItemsSave } from './functions/writeItemsSave'
import { deleteItemsSave } from './functions/deleteItemSave'
import { ActualBookmark } from './components/ActualBookmark'
import { NameBar } from './components/NameBar'
import { ConfigDoNext } from './components/ConfigDoNext'
export const DoNext = () => {
  const [bookMark, setbookMark] = useState([])
  useEffect( () => {
    getUserStorage().then(
      data => {
        if( typeof data !== 'object' ) return false;
        setbookMark( data )
      }
    )
  }, [] )
  const onAddNewBookMark = ( newBookMark ) => {
    writeUserStorage([ newBookMark, ...bookMark ])
    setbookMark([ newBookMark, ...bookMark ]);
  }
  const onDeleteBookMark = ( id ) => {
    writeUserStorage( bookMark.filter( bookmark => bookmark.id != id ) )
    setbookMark( bookMark.filter( bookmark => bookmark.id != id ) )
  };
  const onAddNewItem = ( numberOfBookMark, item ) => {
    writeItemsSave( bookMark, numberOfBookMark, item )
    setbookMark(
      produce( bookMark, draft => {
        draft[numberOfBookMark].items.push( item )
      })
    )
  };
  const onDeleteItem = ( numberOfBookMark, id ) => {
    const newArray = bookMark[numberOfBookMark].items.slice()
    const updateArray = newArray.filter( e => e.id !== id )
    deleteItemsSave( bookMark, numberOfBookMark, id )
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
    <ConfigDoNext 
    />
    </>
  )
}
