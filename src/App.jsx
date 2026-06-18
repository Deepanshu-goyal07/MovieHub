import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Movielist from "./components/MovieList/Movielist";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="app">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main className="main">
        <Movielist searchQuery={searchQuery} />
      </main>
    </div>
  )
}

export default App;