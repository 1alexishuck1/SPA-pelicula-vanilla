import Error404 from '../pages/Error404';

const API_KEY = "6087b10f69226991c20e7ec34c8ef417";
const BASE_URL = "https://api.themoviedb.org/3/movie/";

const getDataMovie = async (id) =>{
    const apiURL = id 
            ? `${BASE_URL}${id}?api_key=${API_KEY}&language=es`
            : Error404;
    try{
        const response = await fetch(apiURL);
        const data = await response.json();
        return data
    } catch(err){
        console.log('error de getdatamovie: ',err);
    }
}

export default getDataMovie;
