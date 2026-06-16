import './Movielist.css'
import Fire from '../../assets/fire.png'
import MovieCard from "./Moviecard";
import { useEffect, useState } from 'react';

const Movielist = () => {
    const [minRating, setMinRating] = useState(0);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            const response = await fetch("http://www.omdbapi.com/?apikey=2af2560a&s=pokemon");
            const data = await response.json();

            if (data.Search) {
                const detailPromises = data.Search.map(async (item) => {
                    const detailResponse = await fetch(`http://www.omdbapi.com/?apikey=2af2560a&i=${item.imdbID}`);
                    const detailData = await detailResponse.json();
                    return {
                        id: item.imdbID,
                        title: detailData.Title,
                        poster: detailData.Poster,
                        Released: detailData.Released,
                        Rating: { value: parseFloat(detailData.imdbRating) || 0 },
                        Plot: detailData.Plot
                    };
                });
                const detailedMovies = await Promise.all(detailPromises);
                setMovies(detailedMovies);
            } else {
                setMovies([]);
            }
        } catch (error) {
            console.error("Error fetching movies:", error);
            setMovies([]);
        }
    }

    const handleFilter = (rating) => {
        if (minRating === rating) {
            setMinRating(0);
        } else {
            setMinRating(rating);
        }
    }

    // Compute the filtered list dynamically during rendering
    const filteredMovies = movies.filter(movie => movie.Rating.value >= minRating);

    return (
        <section className="movie_list">
            <header className="align_center movie_list_header">
                <h2 className="align_center movie_list_heading"> Popular
                    <img src={Fire} alt="Fire" className="navbar_emoji" />
                </h2>

                <div className="align_center movie_list_fs">
                    <ul className="align_center movie_filter">
                        <li 
                            className={minRating === 7 ? "movie_filter_item active" : "movie_filter_item"} 
                            onClick={() => handleFilter(7)}
                        >
                            7+ Star
                        </li>
                        <li 
                            className={minRating === 6 ? "movie_filter_item active" : "movie_filter_item"} 
                            onClick={() => handleFilter(6)}
                        >
                            6+ Star
                        </li>
                        <li 
                            className={minRating === 5 ? "movie_filter_item active" : "movie_filter_item"} 
                            onClick={() => handleFilter(5)}
                        >
                            5+ Star
                        </li>
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
                {filteredMovies.map((movie) => (<MovieCard key={movie.id} movie={movie} />))}
            </div>

        </section>
    )
}

export default Movielist;