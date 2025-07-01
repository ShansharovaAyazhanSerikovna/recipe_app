import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Recipes() {
  const searches = ["pizza", "burger", "cookies", "juice", "salad", "ice-cream", "pudding", "soup", "bitty", "lagman"]
  return (
    <div className='previous-searches section'>
      <h2>Previous Searches</h2>
      <div className="previous-searches-container">
        {searches.map((item, index)=>{
            return <div key={index} style={{animationDelay:index * .2 + "s"}} className='search-item'>{item}</div>
        })}
      </div>
      <div className="search-box">
        <input type='text' placeholder='Search...'/>
        <button className="btn">
          <FontAwesomeIcon icon={faSearch}/>
        </button>
      </div>

    </div>
  )
}
