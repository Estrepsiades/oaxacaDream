import React from 'react'
import { deleteUserStorage } from '../functions/deleteUserStorage'

export const ConfigDoNext = ({updateErrors}) => {
  const deleteClick = () => {
    deleteUserStorage()
    return updateErrors('Informacion Borrada')
  }
  return (
    <button onClick={ deleteClick }>Delete Storage</button>
  )
}
