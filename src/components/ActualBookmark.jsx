import React, { useEffect, useState } from 'react'
import { Items } from './Items'
import { BookMarkTab } from "./BookMarkTab";
export function ActualBookmark( {bookMarks, addNewItem ,deleteClick} ) {
  const [numberOfBookMark, setnumberOfBookMark] = useState(0);
  const [body, setbody] = useState({
    name: 'Porque no intentas agregar un BookMark?',
    id: null,
    items: [
      {
        url: "www.test.com",
        name: "Aqui aparecen los items",
        id: 1
      },
      {
        url: "www.test.com",
        name: "Aburrido? Intenta crear un nuevo bookmark",
        id: 2
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
    console.log(` se ejeucto en actual`)
    setnumberOfBookMark( numberOfBookMark - numberOfBookMark );
    return deleteClick( id );
  };
  const onAddItems = ( item ) => {
    setbody({
      name: bookMarks[numberOfBookMark].name,
      id: bookMarks[numberOfBookMark].id,
      items: ([ item, ...bookMarks[numberOfBookMark].items ])
    })
    addNewItem( numberOfBookMark, item )
  };
  const onDeleteItem = () => {
    
  }
  return (
    <>
    <h3> { body.name } </h3>
    <Items 
      elements = { body.items } 
      />
    <BookMarkTab
      statusButtons = { disableButtons } 
      nextClick = { onNextClick }
      deleteClick = { onDeleteClick }
      addItems = { onAddItems }
      body = { body }
      />
    </>
  )
}
