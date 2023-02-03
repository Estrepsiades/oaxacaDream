import React from 'react'
import { getCurrentTab } from '../functions/getCurrentTab';
import { getName } from '../functions/getName';
export function BookMarkTab({ statusButtons ,nextClick, deleteClick, addItems ,body }) {
    const nextButton  = () => {
        if( statusButtons() === true ) return nextClick();
        return console.log('No has hecho ningun BookMark')
    };
    const deleteButton = () => {
        if( statusButtons() === true ) return deleteClick( body.id );
        return console.log('No has hecho ningun BookMark');
    };
    const addButton = () => {
        if( statusButtons() === true ){
            getCurrentTab().then(
                url => {
                    console.log(`Aqui va la url: ${ url }`)
                    const item = {
                        url: url,
                        name: getName( url ),
                        id: new Date().getMilliseconds(),
                    }
                    return addItems( item )
                }
            )
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
