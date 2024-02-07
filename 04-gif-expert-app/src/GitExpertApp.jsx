import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

    const [categories, setCategories ] = useState(['One punch']);


    const onAddCategory = (newCatogories)=>{


        if(! validateCategory(newCatogories)){

            setCategories([newCatogories,...categories]);
        }

    }


    const validateCategory = (category)=>{

        return categories.some( cat => cat === category);

    }

    return (

        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
        
            {/* Input */}
            < AddCategory onNewCategory={onAddCategory} />
            

            {/* Listado de gif */}
            {
                categories.map( (cat) => ( //en ves de {}, coloco () porque estoy invocando un componente dentro del metedo map

                    <GifGrid 
                        category={cat} 
                        key={cat} 
                    />

                ) )
            }


        
        
        </>



    );

}