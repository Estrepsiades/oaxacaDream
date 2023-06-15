import React, { useEffect, useState } from 'react'
import '../css/alerts.css';
export default function Alerts({ messagge, duration}) {

  const [show, setShow] = useState(true)

  //No deberia ser necasrio el showNotification si no que solo se muestre cuando se cambie el mensaje
  useEffect( () => {
    setShow( true )
    setTimeout(() => {
      setShow( false )
    }, duration )
  }, [ messagge ] )
  return (
    <div className={ `alert ${ show ? 'show' : '' }` }>
      <p> { messagge }</p>
    </div>
  )
}
