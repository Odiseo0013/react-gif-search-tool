import React from "react";
import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

const App = () => {

  const [categories, setCategories] = useState( [ 'Metallica', 'One Punch' ])
  //console.log(categories);

  const onAddCategory = ( NewCategory )  => {
    // console.log(NewCategory.toLowerCase());
    // setCategories( categories.concat(['Nirvana']));
    // setCategories( [...categories, 'Placebo'] );

    // Convierto a minusculas el arreglo inicial para compararlo
    const lowercased = categories.map(category => category.toLowerCase());
    //console.log (lowercased);

    // Si esta la categoria enviada dentro del arreglo inicial, sale de la funcion.
    if ( lowercased.includes(NewCategory.toLowerCase()) ) return;

    setCategories( [ NewCategory, ...categories] );
  }

  return (
    <>
        <h1>Encuentra GIFS sobre tus temas preferidos.</h1>

        <AddCategory 
            onNewCategory = { (value) => onAddCategory(value) } 
        />

        {
            categories.map( (category) => 
              //return <li key={ category }>{ category }</li>
              <GifGrid 
                key={ category}
                category={category} />
          )
        }
    </>
  )
}
export default App;