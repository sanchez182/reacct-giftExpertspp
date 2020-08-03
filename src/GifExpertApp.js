import React from 'react'
import { AddCategory } from './components/AddCategory'
import { GiftGrid } from './components/GiftGrid'

const GifExpertApp = () => {
    const [categorias, setCategorias] = React.useState( ["One punch"]) 

    return (
        <>
            <h2>GiftExpertApp </h2>
            <AddCategory setCategorias={setCategorias}/>
            <hr />
           
            <ol>
                {categorias.map(item =>(
                     <GiftGrid key={item} category={item}/>))}

            </ol>
        </>
    )
}

export default GifExpertApp
