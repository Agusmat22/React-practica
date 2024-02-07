export const getGifs = async ( category )=>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=qJ2PG02sV2lG3BpzYCUXCAirC0Tr34If&q=${category}&limit=10`;

    const res = await fetch( url );

    const { data } = await res.json();

    const gifs = data.map( dat => ({

        id: dat.id,
        title: dat.title,
        url: dat.images.downsized_medium.url

    }))

    return gifs;

}