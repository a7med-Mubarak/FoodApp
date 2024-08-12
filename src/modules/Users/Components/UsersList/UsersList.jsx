import React, { useEffect, useState } from 'react'
import Header from '../../../Shared/components/Header/Header'
import headerBg from '../../../../assets/images/user.png'
import NoData from '../../../Shared/components/NoData/NoData'
import axios from 'axios';
import Girl from '../../../../assets/images/freepik--Character--inject-70.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DeleteConfirm from '../../../Shared/components/DeleteConfirm/DeleteConfirm';
import { toast } from 'react-toastify';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';



export default function UsersList() {  
  let navigate = useNavigate();

  const [usersList, setUsersList] = useState([]);

  const [show, setShow] = useState(false);
  const [userId, setUserId] = useState(0);
  
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setUserId(id);
    setShow(true);
  }

  let deleteUsers = async () => {
      try {    
          if (!userId) {
              throw new Error("Invalid User ID");
          }
  
          const response = await axios.delete(
              `https://upskilling-egypt.com:3006/api/v1/Users/${userId}`, 
              {
                  headers: {
                      Authorization: `Bearer ${localStorage.getItem("token")}`
                  }
              }
          );
  
          toast.success('Deleted Successfully');
          getUsersList();
          handleClose();
      } catch (error) {
          console.error("Error deleting user:", error);
          toast.error('Deletion error');
          handleClose();
      }
  }


  useEffect(() => {
    getUsersList();
  },[]);




  let getUsersList = async () => {
    try {
        let response = await axios.get("https://upskilling-egypt.com:3006/api/v1/Users/", {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        });
        setUsersList(response.data.data); 
        console.log(response.data.data);
    } catch (error) {
        console.log(error);
    }
}
  return (<>
  
  <Header imgUrl={headerBg} title={'Users List'} description={'you can now add your items that any user can order it from the Application and you can edit'}/>


  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>

        <DeleteConfirm deletItem={"Users"}></DeleteConfirm>

        </Modal.Body>
        <Modal.Footer>
      
          <Button variant="danger" onClick={deleteUsers}>
            Delete this item
          </Button>
        </Modal.Footer>
      </Modal>

  <div className='d-flex p-3 justify-content-between'>
 <div className=" title-info">
        <h4>Users Table Details</h4>
        <p>You can check all details</p>
      </div>
      <button onClick={()=>navigate("/register")} className='btn btn-success'>Add New Users</button>
</div>

<div className='table-container p-3 container'>

      {usersList.length > 0 ?     (    
        <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Country</th>
            <th scope="col">E-mail</th>
            <th scope="col">Phone</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
         

    {usersList.map((user) => (
            <tr key={user.userName}>
                  <th scope="row">{user.id}</th>
                  <td>{user.userName}</td>

                  <td>
                    
                    {user.imagePath?
                    <img className='img-recipe' src={`https://upskilling-egypt.com:3006/${user.imagePath}`} alt="" />
                    : 
                    <img className='img-recipe' src={Girl}></img>}
                    </td>
                  <td>{user.country}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>


                  <td className='d-flex justify-content-end'>



                  <Dropdown>
      <Dropdown.Toggle variant="inherit" id="dropdown-basic">
          <i className="fa-solid fa-list"></i>  
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item className='d-flex justify-content-around' href="#/action-1"><i className=" pointer fa fa-edit text-warning" aria-hidden="true"> </i>   <i onClick={()=>handleShow(user.id)} className="pointer fa fa-trash text-danger" aria-hidden="true"></i> </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                    
                  </td>
            </tr>
            ))}

        </tbody>
      </table> ):( <NoData/>)} 




    </div>



  </>
  )
}
