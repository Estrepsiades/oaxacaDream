import React from 'react'
import { deleteUserStorage } from '../functions/deleteUserStorage'

export const ConfigDoNext = () => {
  return (
    <button onClick={ () => deleteUserStorage() }>Delete Storage</button>
  )
}
