import "./Navbar.css";
import Fire from '../../assets/fire.png'
import Star from '../../assets/glowing-star.png'
import Party from '../../assets/partying-face.png'
import DarkMode from "../DarkMode/DarkMode";

const Navbar = ({ searchQuery, setSearchQuery }) => {
    return <nav className='navbar'>
        <h1>MovieHub</h1>

        <div className="navbar_search">
            <input 
                type="text" 
                placeholder="Search movies..." 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
                className="search_input"
            />
            <svg className="search_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
        </div>

        <div className="navbar_links">
            <a href="">Popular <img src={Fire} alt="fire emoji"
                className="navbar_emoji" /></a>
            <a href="">Top Rated <img src={Star} alt="star emoji"
                className="navbar_emoji" /></a>
            <a href="">Upcoming <img src={Party} alt="party face emoji"
                className="navbar_emoji" /></a>
            <DarkMode />
        </div>
    </nav>
}    

export default Navbar;
