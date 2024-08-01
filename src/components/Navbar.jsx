import React from 'react'
import HEADER_HOME_ICON from '../assets/img/header_pizza.png';
import HEADER_LOGIN_REGISTER_ICON from '../assets/img/navbar_login_register.png';
import HEADER_NAVBAR_CARRITO from '../assets/img/navbar_carrito.png';
import { separadorMiles } from '../utils/formateador';

const Navbar = () => {

  let token=false;

  const total=separadorMiles(25000);

  return (
    <nav className="navbar navbar-expand-lg bg-dark p-4">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">Pizzeria Mamma Mia!</a>
        <button className="navbar-toggler bg-white accordion" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="btn btn-dark text-white border border-1 border-white rounded-2 p-2 m-2" aria-current="page" href="#">
                <img src={HEADER_HOME_ICON} />
                Home
              </a>
            </li>
            {!token ?(
              <>
                <li className="nav-item">
                  <a className="btn btn-dark text-white border border-1 border-white rounded-2 p-2 m-2" >
                    <img src={HEADER_LOGIN_REGISTER_ICON} />
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="btn btn-dark text-white border border-1 border-white rounded-2 p-2 m-2" href="#">
                  <img src={HEADER_LOGIN_REGISTER_ICON} />
                    Register</a>
                </li> 
              </>
            ):
            (
              <>
                <li className="nav-item">
                  <a className="btn btn-dark text-white border border-1 border-white rounded-2 p-2 m-2" href="#">Profile</a>
                </li>
                <li className="nav-item">
                  <button className="btn btn-dark text-white border border-1 border-white rounded-2 p-2 m-2">Logout</button>
                </li>
              </>
            )
          }
          </ul>
          <form className="d-flex" role="search">
              <a className="btn btn-dark me-5 text-info fw-bold border border-1 border-info rounded-2 p-2 m-2" href="#">
              <img src={HEADER_NAVBAR_CARRITO} />  
                Total: $ {total} 
              </a>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
