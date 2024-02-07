const completeImage = 'https://image.tmdb.org/t/p/w500';


export const mapperMovie = ( movies )=> {

    const moviesMap =  movies.map( (movie) => {

        return {
            ...movie,
            poster_path: completeImage + movie.poster_path
        }
    })

    return moviesMap;


}