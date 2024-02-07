
import React from 'react'



import './Carrousel.css';


export const Carrousel = ({img1, img2, img3, children}) => {
  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">


        <div className="carousel-inner">
            

            <div className="carousel-item active" data-bs-interval="3000">
                <img src={img1} className="img-presentacion d-block w-100" alt="..."/>
                <div className="image-overlay">    
                </div> {/* Superposición semitransparente */}
                

            </div>

            <div className="carousel-item" data-bs-interval="3000">
                <img src={img2} className="img-presentacion d-block w-100" alt="..."/>
                <div className="image-overlay"> 
                </div> {/* Superposición semitransparente */}

            </div>

            <div className="carousel-item" data-bs-interval="3000">
                <img src={img3} className="img-presentacion d-block w-100" alt="..."/>
                <div className="image-overlay">
                    </div> {/* Superposición semitransparente */}
                
            </div>


            <div className="carousel-title">
                    {children}
            </div>

            
        </div>

 
    </div>
  )
}
