import React from 'react'
import './Nursery.css'
import { nursery_data } from '../../assets/nursery'

const Nursery = () => {
  return (
    <div className='nursery-container'>
      <h1>Nursery</h1>
      <div className='nursery-information'>
        {
          nursery_data.map((item , index) => {
            return(
              <div className='nursery-item' key={index}>
                <img src={item.image_url} alt="" />
                <p>{item.desc}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Nursery