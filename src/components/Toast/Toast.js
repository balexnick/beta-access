import React, { useEffect, useState } from 'react'
import './Toast.scss'

const Tooltip = ({text}) => {
  const [show, setShow] = useState(true)
  useEffect(() => {
    const timer = setInterval(() => {
      setShow(false);
    }, 3000);
    return () => clearInterval(timer);
  });

  if(show){
    return (
      <div className='alert alert-danger position-absolute data-toast' role='alert'>
        {text}
      </div>
    )
  }
  return null
}

export default Tooltip