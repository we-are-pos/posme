import React from 'react'
import KingCactus from './images/giphy.png'
import './thankYouPage.css'

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
        <div className='divider' />
        <button
          className='text'
          type='button' >
          Text
        </button>
        <div className='divider' />
        <button
          className='email'
          type='button' >
          Email
        </button>
        <div className='divider' />
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
