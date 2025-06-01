import React from 'react'
import CustomImage from './CustomImage'

function Herosection() {

  const images = [
    "/img/gallery/img_1.jpg",
    "/img/gallery/img_2.jpg",
    "/img/gallery/img_3.jpg",
    "/img/gallery/img_4.jpg",
    "/img/gallery/img_5.jpg",
    "/img/gallery/img_6.jpg",
    "/img/gallery/img_7.jpg",
    "/img/gallery/img_8.jpg",
    "/img/gallery/img_9.jpg"
  ]

  return (
    <div className='section hero'>
        <div className='col typography'>
            <h1 className='title'>What are we about</h1>
            <p className='info'> Lorem ipsum dolor  quam, fugit numquam nemo quisquam et incidunt ipsam iste, illum commodi possimus repudiandae! Praesentium!</p>
            <button className='btn'>explore now</button>
        </div>
         <div className='col gallery'>
          {
            images.map((src, index)=>(
              <CustomImage key = {index} pt={"90%"} imgSrc={src}/>
            )

            )
          }
            
            

        </div>
    </div>
  )
}

export default Herosection