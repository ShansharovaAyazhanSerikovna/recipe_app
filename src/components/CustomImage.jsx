import React from 'react'

export default function CustomImage({imgSrc, pt}) {
  return (
    <div className='custom-image' style={{paddingTop: pt}}>
      <img src={imgSrc} alt="1" />
    </div>
  )
}
