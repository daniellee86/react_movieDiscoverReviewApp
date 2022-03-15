import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
//
import MovieContainer from '../components/MovieContainer';
import Filter from '../components/filter';

const Movies = () => {
    const [popular, setPopular] = useState([])
    const [filtered, setFiltered] = useState([])
    const [activeGenre, setActiveGenre] = useState(0)

    useEffect (() => {
        fetchPopular()
      }, [])
     
     const fetchPopular = async () => {
     const data = await fetch ("https://api.themoviedb.org/3/movie/popular?api_key=809945612984fb6bf093bc390cd42fe4")
     const movies = await data.json() 
     setPopular(movies.results)
     setFiltered(movies.results)
     }
     
  return (
    <div className='bg'>
    <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />

    <motion.div layout className='movieWrapper'>
     { filtered.map((movie) => {
       return <MovieContainer key={movie.id} movie={movie} />
     })}
    </motion.div>
    </div>
  )
}

export default Movies