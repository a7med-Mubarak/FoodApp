import React from 'react'
import headerBg from '../../../../assets/images/Header.png'

export default function Header({title,description,imgUrl}) {
  return (
    <div className='w-80 container p-5 headerConteaner rounded rounded-3'>

      <div className='row align-content-center'>
        <div className="col-md-6">
          <div className="content">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-end">
          <div className='img'>
            <img src={imgUrl} alt='header'></img>
          </div>
        </div>
      </div>


    </div>
  )
}
 