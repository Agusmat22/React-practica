
export const getCharacterByName = async (name) => {


    const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);

    const data = await res.json();


    
    return data.results;

}
