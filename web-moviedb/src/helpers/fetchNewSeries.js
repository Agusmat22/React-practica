const apiKey = 'a96101b5b222ac5a501cddd45c5a9969';
const apiUrl = 'https://api.themoviedb.org/3/tv/popular';

export const fetchNewSeries = async (page)=>{

    const res = await fetch(apiUrl +'?api_key='+apiKey+"&page="+page);

    const { results } = await res.json();

    return results;
}