import React, { useEffect, useState } from 'react'
import { Items } from './Items'
import { BookMarkTab } from "./BookMarkTab";
import '../css/actualbookmark.css'
export function ActualBookmark( {bookMarks, addNewItem ,deleteClick, deleteItem, updateErrors} ) {
  const [numberOfBookMark, setnumberOfBookMark] = useState(0);
  const [body, setbody] = useState({
    name: 'Porque no intentas agregar un BookMark?',
    id: null,
    items: [
      
      {
        name: 'test',
        id: null,
        url: null
      }
      
    ],
  })
  useEffect( () => {
    if( bookMarks[numberOfBookMark] ){
      setbody({
        name: bookMarks[numberOfBookMark].name,
        id: bookMarks[numberOfBookMark].id,
        items: bookMarks[numberOfBookMark].items,
      });
    }
  }, [ bookMarks[numberOfBookMark] ] );
  const disableButtons = () => {
    if( bookMarks.length < 1 ) return false;
    return true;
  }
  const onNextClick = () => {
    const number = numberOfBookMark;
    if(bookMarks[number+1]){
      return setnumberOfBookMark( numberOfBookMark + 1 );
    };
    return setnumberOfBookMark( numberOfBookMark - numberOfBookMark);
  };
  const onDeleteClick = ( id ) => {
    if( bookMarks.length <= 1 ){
      return updateErrors('No se puede borrar este bookMark')
    }
    setnumberOfBookMark( numberOfBookMark - numberOfBookMark );
    return deleteClick( id );
  };
  const onAddItems = ( item ) => {
    addNewItem( numberOfBookMark, item )
  };
  const onDeleteItem = ( id ) => {
    deleteItem( numberOfBookMark, id )
  }
  return (
    <>
    <h3 className='nameBookmark'> { body.name } </h3>
    <Items 
      elements = { body.items } 
      DeleteButton = { onDeleteItem }
      />
    <BookMarkTab
      statusButtons = { disableButtons } 
      nextClick = { onNextClick }
      deleteClick = { onDeleteClick }
      addItems = { onAddItems }
      body = { body }
      updateErrors = { updateErrors }
      />
    </>
  )
}
