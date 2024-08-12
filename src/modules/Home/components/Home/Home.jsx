import React from 'react'
import Header from '../../../Shared/components/Header/Header'
import headerBg from '../../../../assets/images/Header.png'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  let navigate = useNavigate();
  return (
    <>
    <Header imgUrl={headerBg} title={'Welcome UpSkilling'} description={'This is a welcoming screen for the entry of the application , you can now see the oprions'}/>
    
    
    <div className='home-data mx-auto rounded rounded-3 px-5 py-4 my-3'>
      <div className="homeTitle">

        <h5>Fill the <span className='text-success'>Recipes</span>  !</h5>
        <p>you can now fill the meals easily using the table and form ,<br/> click here and sill it with the table !</p>

      </div>
      <button onClick={()=>navigate("/dashboard/recipesList")} className='btn btn-success'>Fill Recipes <i className='fa fa-arrow-right'></i></button>
   
    </div>
    </>
  )
}
 