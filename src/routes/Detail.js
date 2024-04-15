import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const {id} = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getMovie() {
      const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`)).json();
      console.log(json.data.movie);
      setMovie(json.data.movie);
      setLoading(false);
    }
    getMovie();
  },[]);
  return (
    <div>
      <h1>Movie Detail</h1>
      <h3>{loading ?  "loading..." : null}</h3>
      {!loading ?  
        <>
          <h2>{movie.title}</h2>
          <p>{movie.description_infro}</p>
          <p>좋아요 : {movie.like_count}</p>
          <img src={movie.large_cover_image} />
          <ul>
          {movie.cast.map((cast, index) => 
            <li key={index}><img src={cast.url_small_image} />{cast.character_name}[{cast.name}]</li>
          )}
          </ul>
          <textarea cols="100" rows="15">{movie.description_intro}</textarea>
        </>
          : null
        } 
    </div>
  )
}

export default Detail;
