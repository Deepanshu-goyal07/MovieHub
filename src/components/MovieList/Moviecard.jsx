import './Moviecard.css';
import Star from '../../assets/star.png';

const MovieCard = ({movie})=>{
    return(
        <a href="" className="movie_card">
            <img src={movie?.poster} alt="movie poster" className="movie_poster"/>
            <div className="movie_details">
                <h3 className="movie_details_heading">{movie?.title}</h3>
                <div className="align_center movie_date_rate">
                    <p>{movie?.Released}</p>
                    <p> {movie?.Rating?.value || "N/A"} 
                        <img 
                            src={Star} 
                            alt="Star" 
                            className="card_emoji"
                        /> 
                    </p>
                </div>
                <p className="movie_description">{movie?.Plot}</p>
            </div>
        </a>
    )
}
export default MovieCard;
