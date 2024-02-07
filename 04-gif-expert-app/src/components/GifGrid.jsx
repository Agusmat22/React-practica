import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs"
import { GifItem } from "./GifItem";


export const GifGrid = ({category})=>{

    const [images, setImages] = useState([]);
    
    useEffect( ()=>{
        
        getGifs(category)
                    .then( gifs => setImages(gifs));
    }, [ ] );


    return (

        <>
            <h3>{ category }</h3>

            <div className="card-grid">
                {images.map( img => (
                    
                    < GifItem 

                        title={ img.title }
                        url={ img.url }
                        key={img.id}
                    
                    />
            
                ) )}
                
            </div>
        </>

    )

}