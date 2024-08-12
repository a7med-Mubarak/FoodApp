import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link, useNavigate } from 'react-router-dom'; 
import toggle from '../../../../assets/images/222.png'


export default function SideBar() {

  let navigate = useNavigate();

  const [isCollape, setIsCollape] = useState(false)

  let toggleCollapes = () => {
    setIsCollape(!isCollape);
  }

  return <>
<Sidebar collapsed={isCollape}>
  <Menu>

  
    <MenuItem onClick={toggleCollapes}  icon={<img className='toggle'  src={toggle} alt="toggle"></img>} ></MenuItem>
    <MenuItem className='mt-5 my-2' icon={<i className='fa fa-home'></i>} component={<Link to="home" />}> Home</MenuItem>
    <MenuItem className='my-2' icon={<i className='fa fa-users'></i>} component={<Link to="usersList" />}> Users</MenuItem>
    <MenuItem className='my-2' icon={<i className='fa fa-pizza-slice'></i>} component={<Link to="recipesList" />}> Recipes</MenuItem>
    <MenuItem className='my-2' icon={<i className="fa-solid fa-braille"></i>} component={<Link to="categoriesList" />}> Category</MenuItem>
    <MenuItem className='my-2' icon={<i className='fa fa-sign-out'></i>} onClick={()=>navigate("/login")}> LogOut</MenuItem>
  </Menu>
</Sidebar>;
</>
}
