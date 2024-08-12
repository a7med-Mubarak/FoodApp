import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export default function RecipeData() {
  let {register, handleSubmit , formState:{errors}} = useForm()

  let navigate = useNavigate()
  const [tagsList, setsetTagsList] = useState([])

  const [CategoriesList, setCategoriesList] = useState([]);


 let  getAllTages = async () =>{
    try {
      let response = await axios.get(
        "https://upskilling-egypt.com:3006/api/v1/tag/",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        }
      );
      setsetTagsList(response.data);
      
    } catch (error) {
      console.log(error);
      
    }
  }

  let onAddSubmit =(data) =>{
    console.log(data);
    
  }

  let getCategoriesList = async () =>{
    try {
      let response = await axios.get("https://upskilling-egypt.com:3006/api/v1/Category", 
      {headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})
      setCategoriesList(response.data.data)
      
    } catch (error) {
      console.log(error);
      
    }
  }



  useEffect(() => {
    getAllTages()
    getCategoriesList()
  })


  return (
    <>

<div className='home-data mx-auto rounded rounded-3 px-5 py-4'>
      <div className="homeTitle">

        <h5>Fill the <span className='text-success'>Recipes</span>  !</h5>
        <p>you can now fill the meals easily using the table and form ,<br/> click here and sill it with the table !</p>

      </div>
      <button onClick={()=>navigate("/dashboard/recipesList")} className='btn btn-success'>Fill Recipes <i className='fa fa-arrow-right'></i></button>
   
    </div>










    <form className='container w-75' onSubmit={handleSubmit(onAddSubmit)}>

    <input
          type="text"
          className="form-control my-3"
          placeholder="Recipe Name"
          aria-label="name"
          aria-describedby="basic-addon1"
          {...register("name", {required: 'Name is Required'})}
/>
{errors.name && <span className='text-danger'>{errors.name.message}</span>}

<select className="form-control my-3"{...register("tagId", {required: 'Tag is Required'})}
>

    <option disabled> Select Tag</option>
    {tagsList.map(tag=><option value={tag.id}>{tag.name}</option>)}
</select>
{errors.tagId && <span className='text-danger'>{errors.tagId.message}</span>}



<input
          type="number"
          className="form-control my-3"
          placeholder="Price"
          aria-label="Price"
          aria-describedby="basic-addon1"
          {...register("price", {required: 'Price is Required'})}

/>
{errors.tagId && <span className='text-danger'>{errors.tagId.message}</span>}

<select className="form-control my-3" 
  {...register("categoriesIds", {required: 'Category is Required'})}
>
<option disabled> Select Category</option>
    {CategoriesList.map(cat=><option value={cat.id}>{cat.name}</option>)}
</select>
{errors.categoriesIds && <span className='text-danger'>{errors.categoriesIds.message}</span>}



    <textarea {...register("description", {required: 'description is Required'})} placeholder="Descripation" className="form-control my-3"></textarea>
    {errors.description && <span className='text-danger'>{errors.description.message}</span>}


    <input
          type="file"
          className="form-control my-3"
          placeholder="upload imgs"
          aria-label="img"
          aria-describedby="basic-addon1"
          {...register("recipeImage", {required: 'recipeImage is Required'})}
/>
{errors.recipeImage && <span className='text-danger'>{errors.recipeImage.message}</span>}



<div className='d-flex justify-content-end'>
      <button className='btn btn-outline-success mx-3'>Cancel</button>
    <button className='btn btn-success'>Save</button>
</div>
    </form>
    </>
  )
}
