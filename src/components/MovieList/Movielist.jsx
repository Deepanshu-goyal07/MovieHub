import './Movielist.css'
import Fire from '../../assets/fire.png'
import MovieCard from "./Moviecard";

const Movielist = () =>{
    return(
        <section className="movie_list">
            <header className="align_center movie_list_header">
                <h2 className="align_center movie_list_heading"> Popular 
                    <img src={Fire} alt="Fire" className="navbar_emoji"/> 
                </h2>

                <div className="align_center movie_list_fs">
                    <ul className="align_center movie_filter">
                        <li className="movie_filter_item active">8+</li>
                        <li className="movie_filter_item">7+</li>
                        <li className="movie_filter_item">6+</li>
                    </ul>
                    <select name="" id="" className="movie_sorting">
                        <option value="">SortBy</option>
                        <option value="release_date">Date </option>
                        <option value="vote_average">Rating</option>
                    </select>
                    <select name="" id="" className="movie_sorting">
                        <option value="asc">Ascending </option>
                        <option value="desc">Descending </option>
                    </select>
                </div>
            </header>
            <div className="movie_cards">
                <MovieCard/>
            </div>

        </section>        
    )
}

export default Movielist    