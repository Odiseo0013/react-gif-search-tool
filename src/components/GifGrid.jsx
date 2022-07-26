import React from "react";
import PropTypes from 'prop-types';
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs (category);
    //console.log({isLoading})

    // Array de imagenes
    // console.log(images);
    // {
    //     images.map( image => (
    //         <li key={image.id}>{image.title}</li>
    //     ))
    // }
    return (
        <>
            <h3>Los mejores GIFS de: {category}</h3>
            {
                isLoading && ( <h2>Cargando...</h2> ) 
            }

            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem key={image.id} {...image}  />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}