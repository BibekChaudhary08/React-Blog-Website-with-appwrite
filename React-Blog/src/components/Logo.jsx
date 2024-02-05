import React from 'react'
import img1 from '/img/img1.jpg'

function Logo({width = '100px'}) {
  return (
    <div>
      <img src={img1} alt='img' width={40} className='rounded-full'/>
    </div>
  )
}

export default Logo