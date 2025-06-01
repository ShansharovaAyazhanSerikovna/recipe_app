import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import { faMailBulk } from '@fortawesome/free-solid-svg-icons/faMailBulk'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


export default function ChiefCard({name, img, recipesCount, cuisine}) {
  return (
    <div className='chief-card'>
        <img src={img}/>
        <div className="chief-carf-info">
            <h3 className='chief-card-name'>{name}</h3>
            <p className='chief-recipe-count'>Recipes: <b>{recipesCount}</b></p>
            <p className='chief-cuisine'>Cuisine: <b>{cuisine}</b></p>
            <p className='chief-icons'>
                <FontAwesomeIcon icon={faPhone}/>
                <FontAwesomeIcon icon={faMailBulk}/>
            </p>
        </div>
    </div>
  )
}
