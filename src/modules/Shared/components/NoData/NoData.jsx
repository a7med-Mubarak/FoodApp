import React from 'react'
import Girl from '../../../../assets/images/freepik--Character--inject-70.png'


export default function NoData() {
  return (<>
  <div className='text-center'>
    <img src={Girl} alt='NoData'></img>
    <h3 className='text-success'>No Data !</h3>
    <p className='text-success'>are you sure you want to delete this item ? if you are sure just click on delete it</p>
  </div>
  </>
  )
}
