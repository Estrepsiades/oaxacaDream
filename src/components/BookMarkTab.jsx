import React from 'react'
import { testFunction } from '../functions/testFunction';
export function BookMarkTab({ statusButtons ,nextClick, deleteClick, addItems ,body }) {
    //console.log( body )
    const nextButton  = () => {
        if( statusButtons() === true ) return nextClick();
        return console.log('No has hecho ningun BookMark')
    };
    const deleteButton = () => {
        if( statusButtons() === true ) return deleteClick( body.id );
        return console.log('No has hecho ningun BookMark');
    };
    const addButton = ( id ) => {
        if( statusButtons() === true ){

            const item = {
                name: testFunction(),
                id: new Date().getMilliseconds(),
            };
            //console.log( item );
            return addItems( item )
        }
        return console.log('No puedes agregar ningun item')
    }
  return (
    <>
    <button onClick={ deleteButton }> Delete BookMark </button>
    <button onClick={ addButton }> Add Items </button>
    <button onClick={ nextButton } > Next BookMark </button>
    </>
  )
}
