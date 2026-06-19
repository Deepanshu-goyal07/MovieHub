import './Movielist.css'
import Fire from '../../assets/fire.png'
import MovieCard from "./Moviecard";


import { useEffect, useState } from 'react';
import _ from 'lodash';

// Main component that fetches, filters, sorts, and renders the list of movie cards.

const Movielist = ({ searchQuery }) => {
    const [minRating, setMinRating] = useState(0);
    const [movies, setMovies] = useState([]);
    const [debouncedSearch, setDebouncedSearch] = useState(searchQuery);

    const [sort, setSort] = useState({
        by: "default",
        order: "asc"
    })

    // Fetches movie search results and their complete details from the OMDb API.
    const fetchMovies = async (query) => {
        try {
            const apiQuery = query.trim() || "pokemon";
            const response = await fetch(`https://www.omdbapi.com/?apikey=2af2560a&s=${encodeURIComponent(apiQuery)}`); 
            const data = await response.json();

            if (data.Search) {
                const detailPromises = data.Search.map(async (item) => {
                    const detailResponse = await fetch(`https://www.omdbapi.com/?apikey=2af2560a&i=${item.imdbID}`);
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

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(searchQuery);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [searchQuery]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchMovies(debouncedSearch);
    }, [debouncedSearch]);

    // Toggles the minimum rating filter to refine shown movies.
    const handleFilter = (rating) => {
        if (minRating === rating) {
            setMinRating(0);
        } else {
            setMinRating(rating);
        }
    }

    // Updates the sorting state when a dropdown value is changed by the user.
    const handleSort = e => {
        const {name, value} = e.target;
        setSort(prev =>{
            return {...prev, [name]: value}
        })
    }

    // Compute the filtered and sorted list dynamically during rendering
    let filteredMovies = movies.filter(movie => movie.Rating.value >= minRating);

    if (sort.by !== "default") {
        filteredMovies = _.orderBy(
            filteredMovies,
            [
                (movie) => {
                    if (sort.by === "release_date") {
                        return new Date(movie.Released);
                    }
                    if (sort.by === "vote_average") {
                        return movie.Rating.value;
                    }
                    return movie[sort.by];
                }
            ],
            [sort.order]
        );
    }

    // Main section containing the entire movie list layout
    return (
        <section className="movie_list">
            {/* Header section the title, star rating filters, and sort options */}
            <header className="align_center movie_list_header">
                {/* Heading indicating the currently showing feed category */}
                <h2 className="align_center movie_list_heading"> Popular Movies 
                    <img src={Fire} alt="Fire" className="navbar_emoji" />
                </h2>

                {/* Wrapper for filter tab list and sort selectors */}
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

                    {/* Dropdown to select sorting  */}
                    <select name="by" id="" onChange={handleSort} value={sort.by} className="movie_sorting">
                        <option value="default">SortBy</option>
                        <option value="release_date">Date </option>
                        <option value="vote_average">Rating</option>
                    </select>

                    {/* Dropdown to select sorting order */}
                    <select name="order" id="" onChange={handleSort} value = {sort.order} className="movie_sorting">
                        <option value="asc">Ascending </option>
                        <option value="desc">Descending </option>
                    </select>

                </div>
            </header>
            
            {/* Grid container showing the list of movies */}
            <div className="movie_cards">
                {filteredMovies.map((movie) => (<MovieCard key={movie.id} movie={movie} />))}
            </div>

        </section>
    )
}

export default Movielist;
