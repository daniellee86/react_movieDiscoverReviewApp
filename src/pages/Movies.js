import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';
//
import MovieContainer from '../components/MovieContainer';
import Filter from '../components/Filter';
import Search from '../components/Search';
import Featured from '../components/Featured'

const FilterContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
 margin: 3% 10% 3% 10%;
`

const Movies = () => {
    const [popular, setPopular] = useState([])
    const [filtered, setFiltered] = useState([])
    const [featured, setFeatured] = useState([])
    const [query, setQuery] = useState("");
    const [activeGenre, setActiveGenre] = useState(0)

    useEffect (() => {
      const fetchPopular = async () => {
        const data = await fetch ("https://api.themoviedb.org/3/movie/popular?api_key=809945612984fb6bf093bc390cd42fe4&include_adult=true")
        const movies = await data.json() 
        setPopular(movies.results)
        setFiltered(movies.results)
        setFeatured(movies.results.splice(Math.floor(Math.random()*movies.results.length),1))  
        
        }

      fetchPopular()
      }, [])
     

     
  return (
    <div className='bg'>
      
      { featured.map((movie) => {
       return <Featured key={movie.id} movie={movie} />
     })}

    <FilterContainer>
    <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
    <Search setQuery={setQuery}/>
    </FilterContainer>
   

    <motion.div layout transition={{duration: 0.75}} className='movieWrapper'>
     { filtered.filter(movie => movie.title.toLowerCase().includes(query)
     ).map((movie) => {
       return <MovieContainer key={movie.id} movie={movie} />
     })}
    </motion.div>

    </div>
  )
}




export default Movies