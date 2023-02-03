import React from 'react'

export function Items({elements, DeleteButton}) {
    const deleteButton = ( id ) => {
        DeleteButton( id )
    }
  return (
    elements.map( element => {
        return (
            <div key={ element.id }>
                <a href={element.url}>
                    { element.name }
                </a>
                <button onClick={ () => deleteButton( element.id ) }>
                    Delete Item
                </button>
            </div>
        )
    })
  )
}
