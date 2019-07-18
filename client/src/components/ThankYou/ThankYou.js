import React from 'react'
import KingCactus from './images/giphy.gif'
import './ThankYou.css'

const ThankYouPage = _ => {
  return (
    <>
      <img alt='cactus' className='kingcactus' src={KingCactus} />
      <h1 className='thankYou'>Thank You</h1>
      <h5 className='receipt'>Receipt?</h5>
      <div className='printRow'>
        <button
          className='print'
          type='button' >
          Print
        </button>
        <button
          className='text'
          type='button' >
          Text
        </button>
        <button
          className='email'
          type='button' >
          Email
        </button>
        <button
          className='cancel'
          type='button' >
          Cancel
        </button>
      </div>
    </>
  )
}

export default ThankYouPage
