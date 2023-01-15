import React from 'react'

export function Items({elements, DeleteButton}) {
    const deleteButton = ( id ) => {
        console.log(` Se ejecuta en item.jsx con id${ id }`);
        DeleteButton( id )
    }
  return (
    elements.map( element => {
        return (
            <div key={ element.id }>
                <p>
                    { element.name } { element.id }
                </p>
                <button onClick={ () => deleteButton( element.id ) }>
                    Delete Item
                </button>
            </div>
        )
    })
  )
}
