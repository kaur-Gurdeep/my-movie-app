// Wraps the app in BrowserRouter (Router) → Enables navigation.
// Uses Routes → Ensures only one page is shown at a time.
// Defines Route paths → Loads different components based on the URL.
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import MovieList from '../MovieList/MovieList';
import MovieDetail from '../MovieDetail/MovieDetail';
import Favorites from '../Favorites/Favorites'; 
import WatchLater from '../WatchLater/WatchLater';
import About from '../About/About';

function App() { 
  const[favorites, setFavorites] = useState([]);
  const [watchLater, setWatchLater] = useState([]); 

  return (
    <Router>
      <div className={styles.App}>
        <Header />
        <main className={styles.content}>
        <Routes>
            <Route path="/" element={<MovieList favorites={favorites} setFavorites={setFavorites}  watchLater={watchLater} setWatchLater={setWatchLater}/>} />
            <Route path="/movie/:movieName" element={<MovieDetail />} />
            <Route path="/favorites" element={<Favorites favorites={favorites} setFavorites={setFavorites} />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/watch-later" element={<WatchLater watchLater={watchLater} setWatchLater={setWatchLater} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
