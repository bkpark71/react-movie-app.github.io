import PropTypes from 'prop-types';
import {Link } from "react-router-dom"

function Movie({id, coverImage, title, summary, genres}) {
  return (
    <div>
    <img src={coverImage} />
    <p><Link to={`/movie/${id}`}>{title}</Link></p>
    {/* <p><a href={`/movie`}>Anchor {title}</a></p> */}
    <p>{summary.substr(0,summary.indexOf("."))}...</p>
    <ul>
      {genres.map((genre, index) =>
        <li key={index}>{genre}</li>
      )}
    </ul>
  </div>
  )
}

Movie.propTypes = {
  id : PropTypes.number.isRequired,
  coverImage : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;
