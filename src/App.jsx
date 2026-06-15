import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Movielist from "./components/MovieList/Movielist";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <Movielist/>
      </main>
    </div>
  )
}

export default App;