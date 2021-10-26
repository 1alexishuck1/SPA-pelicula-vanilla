import getHash from '../utils/getHash';
import getDataMovie from '../utils/getDataMovie';   


const Pelicula = async () =>{
    const id = getHash();
    const pelicula = await getDataMovie(id);
    const img_url = 'https://image.tmdb.org/t/p/w500';


    const view = `
        <div class="Movies-inner">
            <article class="Movies-card">
                <img src="${img_url}${pelicula.poster_path}" alt="${pelicula.title}"/>
            </article>
            <article class="Movies-card">
                <h2>${pelicula.title}</h2>
                <h4>Sinopsis: <i>${pelicula.overview} </i></h4>
                <h4>Fecha de estreno: <i> </i>${pelicula.release_date}</h4>
                <h4>Puntuación: <i>${pelicula.vote_average}/10</i> </h4>
            </article>
        </div>
    `;

    return view;
}

export default Pelicula;