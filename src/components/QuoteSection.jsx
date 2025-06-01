
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons/faQuoteLeft"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from 'react'

function QuoteSection() {
  return (
    <div className='section quote'>
        <p className='quote-text'><FontAwesomeIcon icon={faQuoteLeft}/>
            Food is everything we are. It is an extension of nationalistfeeling, qwerty qwerty are Shansharova ethnic feeling. your personal history your province your region 
        </p>
        <p className='quote-auther'>-Anthony Bourdain</p>
    </div>
  )
}

export default QuoteSection