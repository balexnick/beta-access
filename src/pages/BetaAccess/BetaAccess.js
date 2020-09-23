import React, { useState } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import { sendCode } from 'utils/sendCode'
import Loader from 'components/Loader/Loader'
import Toast from 'components/Toast/Toast'
import './BetaAccess.scss'
import oops from 'img/oops.jpg'

const BetaAccess = () => {
  const [code, setCode] = useState('')
  const [loader, setLoader] = useState(false)
  const [toast, setToast] = useState(false)
  const history = useHistory()

  const submitForm = (e) => {
    e.preventDefault()
    if(!code) return null

    setLoader(true)
    setToast(false)

    sendCode(code)
    .then(response => {
      setLoader(false)
      localStorage.setItem('beta-access', response.code)
      history.push('/')
    })
    .catch(error => {
      setLoader(false)
      setToast(error)
    })
  }

  if(localStorage.getItem('beta-access')) return <Redirect to='/'/>
  
  return (
    <div className='d-flex flex-column align-items-center justify-content-around beta-access-container'>
      <div className='text-center'>
        <img src={oops} alt='oops' className='oops-img'/>
        <p className='access-text'>Sorry, but the site is not ready yet. It should be expected in the future</p>
      </div>
      <div className='d-flex align-items-center'>
        <div className='hint-access'>
          <span className='hint'>?</span>
          <p className='text'>If you enter the correct code, you will get access to the site</p>
        </div>
        <form onSubmit={submitForm} className='d-flex'>
          <input type='name' placeholder='Code' className='access-input' onChange={(e) => setCode(e.target.value)}/>
          <button className='access-btn'>Connect</button>
        </form>
      </div>
      {loader && <Loader/>}
      {toast && <Toast text={toast}/>}
    </div>
  )
}

export default BetaAccess
