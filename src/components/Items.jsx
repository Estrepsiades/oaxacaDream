import React from 'react'
export function Items({elements}) {

    const deleteButton = () => {

    }
  return (
    elements.map( element => {
        return (
            <>
            <p key={ element.id }>
                { element.name } { element.id }
            </p>
            <button key={`btn${element.id}`} onClick={ deleteButton }>
                Delete item
            </button>
            </>
        )
    })
  )
}
