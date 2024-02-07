import { useEffect, useState } from "react";
import { ChargeMovies } from "./helpers/chargeMovies";
import { Navbar } from "./components/navbar";
import { Cartelera } from "./components/cartelera";
import { Menu } from "./components/menu";


import './styles/navbar.css';
import './index.css';
import { ChargeSeries } from "./helpers/chargeNewSeries";



export const MovieApp = ()=>{

    const [ movies, setMovies ] = useState([]);
    const[ newSeries, setNewSeries] = useState([]);
    const [ loaded, setLoaded ] = useState(false);
    const[ loadedSeries, setLoadedSeries] = useState(false);
    const [openNavbar, setOpenNavbar] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const [section, setSection] = useState('menu');


    if (!loaded) 
    {      
        ChargeMovies(setMovies,setLoaded,currentPage);
        ChargeSeries(setNewSeries,setLoadedSeries,currentPage);

    }     


    return (

        <div className="contenedor-app">

            <Navbar openNavbar ={setOpenNavbar} setSection={setSection} />


            {
                ( section === 'menu' ) ? <Menu series={newSeries} movies={movies} />
                : (section === 'peliculas') ?  < Cartelera 
                                                    movies={movies} 
                                                    despliegue={openNavbar} 
                                                    pagination={setCurrentPage} 
                                                    loading={setLoaded}
                                                    title={'Peliculas'}
                                                />
                : < Cartelera 
                    movies={newSeries} 
                    despliegue={openNavbar} 
                    pagination={setCurrentPage} 
                    loading={setLoaded}
                    title={'Series'}
                />


            }

        
        </div>

    )
}