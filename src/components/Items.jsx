import React from 'react'
import '../css/items.css'
export function Items({elements, DeleteButton}) {
    const deleteButton = ( id ) => {
        DeleteButton( id )
    }
  return (
    <div className='listElements'>
        { elements.map( element => {
            return (
                <div className='elementBox' key={ element.id }>
                    <a href={ element.url }>
                        { element.name }
                    </a>
                    <button onClick={ () => deleteButton( element.id )}>
                        Delete Item
                    </button>
                </div>
            )
        })}
    </div>
  )
}
