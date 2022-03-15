import { motion } from "framer-motion";
// import popUp from './des-popup'


 function MovieContainer({movie}) {
    const description = () => {
        alert(movie.title + "     " +movie.overview)}
  return (
    < motion.div layout className='movieCard'>

        <h2 className='cardTitle'>{movie.title}</h2>
     
       <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt="" />
        {/* <p>{movie.overview}</p> */}
     
       <button className='cardButton' onClick={description}>Description</button>
     
    </motion.div>
  )
}
export default MovieContainer