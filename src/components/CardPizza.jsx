import React from 'react'
import BTN_OJOS from '../assets/img/btn_ojos.png'
import CARRITO_COMPRA from '../assets/img/navbar_carrito.png'
import PIZA from '../assets/img/pizza.png'
import { separadorMiles } from '../utils/formateador'

const CardPizza = ({name,price,ingredients,img}) => {
  return (
      
          <article className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4 rounded-3">
            <div className="card mx-2">
              <img src={img}className="card-img-top" alt={name} />
              <div className='border-2 border-bottom p-2'>
                <h4>Pizza {name}</h4>
              </div>
              <div className='border-2 border-bottom p-1 text-center'>
                <p>Ingredientes</p>
                <p>
                  <img src={PIZA} />
                  {ingredients.join(", ")}
                </p>
              </div>
              <div className='p-1 text-center'>
                <h3>Precio: ${separadorMiles(price)}</h3>
              </div>
              <div className='border-2 border-bottom p-4 d-flex justify-content-around align-align-items-center'>
                <a href="#" className="btn btn-outline-dark">
                  Ver Mas
                  <img className='mx-1' src={BTN_OJOS} />  
                </a>
                <a href="#" className="btn btn-dark">
                  Añadir
                  <img className='mx-1' src={CARRITO_COMPRA} />  
                </a>
              </div>
            </div>
          </article>
  )
}

export default CardPizza
