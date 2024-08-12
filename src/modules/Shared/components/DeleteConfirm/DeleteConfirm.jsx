import React from 'react'
import Girl from '../../../../assets/images/freepik--Character--inject-70.png'


export default function DeleteConfirm({deletItem}) {
  return (
    <div className="modelBody text-center">
    <img className='' src={Girl} alt='NoData'></img>
    <hr/>
     <h5 className='my-4'>Delete This {deletItem}?</h5>
     <span className='text-muted'>are you sure you want to delete this item ? if you are sure just click on delete it</span>
 </div>
)
}
