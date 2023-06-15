import React, { useState, useEffect } from 'react'
import produce from 'immer'
import { } from 'promise'
import './css/donext.css'
import { getUserStorage } from './functions/getUserStorage'
import { writeUserStorage } from './functions/writeUserStorage'
import { writeItemsSave } from './functions/writeItemsSave'
import { deleteItemsSave } from './functions/deleteItemSave'
import { ActualBookmark } from './components/ActualBookmark'
import { NameBar } from './components/NameBar'
import { ConfigDoNext } from './components/ConfigDoNext'
import Alerts from './components/Alerts'
//Nomas para dev
//const chrome = window.chrome
export const DoNext = () => {
  const [bookMark, setbookMark] = useState([])
  const [messages, setMessages] = useState('')
  useEffect( () => {
    getUserStorage().then(
      data => {
        if( typeof data !== 'object' ) return updateErrors('Error al recuperar informacion');
        setbookMark( data )
      }
    )
  }, [] )
  const updateErrors = ( err ) => {
    setMessages( err )
  }
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
      updateErrors = { updateErrors }
    />
    <ActualBookmark
      bookMarks = { bookMark }
      addNewItem = { onAddNewItem }
      deleteClick = { onDeleteBookMark }
      deleteItem = { onDeleteItem } 
      updateErrors = { updateErrors }
    />
    <ConfigDoNext
      updateErrors = { updateErrors } 
    />
    <Alerts
      messagge={ messages }
      duration={ 3000 }
    />
    
    </>
  )
}
