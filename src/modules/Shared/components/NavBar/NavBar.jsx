import React from 'react'

export default function NavBar({loginData}) {
  return <>
  
  <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item text-black">
          {loginData?.userName}
        </li>
      </ul>
    </div>
  </div>
</nav>

  </>
}
