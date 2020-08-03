import React from 'react'
import { GifGridItem } from './GifGridItem' 
import { useFetchGift } from '../hooks/useFetchGifs'

export const GiftGrid = ({ category }) => {
    const {data:images,loading} = useFetchGift(category);
  

    

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            <div className="card-grid">
            {loading && <p className="animate__animated animate__fadeIn" >Loading...</p>}
                {
                    images.map(img => (
                        <GifGridItem key={img.id} {...img} />
                    ))
                }
            </div>
        </>




    )
}
