import './Moviecard.css';
import Star from '../../assets/star.png';

const MovieCard = ()=>{
    return(
        <a href="" className="movie_card">
            <img src="https://imgs.search.brave.com/mbinvJGRGBJ3jwYBpynPNqOXV4ynuHyLPlBcXAcknkk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbnRo/ZXBvc3Rlci5jb20v/Y2RuL3Nob3AvZmls/ZXMvU2VsZWN0X3lv/dXJfY3VzdG9tX21v/dmllX3Bvc3Rlcl9k/ZXNpZ25fMTYwMHgu/anBnP3Y9MTYxNzM3/MzE5MA" alt="movie poster" className="movie_poster"/>
            <div className="movie_details">
                <h3 className="movie_details_heading">Movie Name</h3>
                <div className="align_center movie_date_rate">
                    <p>7 4 2005</p>
                    <p> 8 {""} 
                        <img 
                            src={Star} 
                            alt="Star" 
                            className="card_emoji"
                        /> 
                    </p>
                </div>
                <p className="movie_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vel</p>
            </div>
        </a>
    )
}
export default MovieCard;
