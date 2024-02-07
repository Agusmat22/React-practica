

export const Card = ({title,vote_average,poster_path})=>{


    return (

        <div className="card">

            <img src={poster_path} alt="Foto" />
            <h3>{title}</h3>

            <div className="contenedor-puntaje">
                <i className="bi bi-star-fill"></i>
                <p>{vote_average}</p>
            </div>

            <button className="btn-verMas">Ver mas</button>

        </div>

    )
}