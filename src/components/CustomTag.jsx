import React from 'react'

const CHeading = ({ text }) => {
  return (
    <>
      <div style={{ marginTop: '100px' }} className='text-uppercase h1 fw-bold text-black mb-3'>{text}</div>
      <div style={{height: '5px', width: '50px'}} className='bg-primary rounded-pill'></div>
    </>
  )
}

export {
  CHeading
}