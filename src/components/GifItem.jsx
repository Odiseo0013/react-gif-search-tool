import React from "react";
import PropTypes from 'prop-types';

let numeroImagen = 0;
let posicion = '';

export const GifItem = ({ title, url, id }) => {

  function posicionar()
   {
        if(numeroImagen % 2 ==0 ){
          posicion = 'Izq';
          // console.log("El número "+numeroImagen+" es par "+posicion);
        } else {
          posicion = 'Der'; 
          // console.log("El número "+numeroImagen+" es impar "+posicion);  
        }   
        numeroImagen +=1;
     
        return (posicion);
    }

  return (
    <div className={`polaroidContenedor Rotar${posicionar()}`}>
      <img src={url} alt={title} />
      <span className="textoPolaroid">{title}</span>
    </div>
  )
}

GifItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

