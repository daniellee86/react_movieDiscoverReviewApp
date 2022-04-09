import { motion } from "framer-motion";
import styled from "styled-components";
 import Modal from "./Modal";

 const IconContainer = styled.div`
  margin: 5px 10px;
 `

 function MovieContainer({movie}) {
    
  return (
    <motion.div layout transition={{duration: 0.75}} >

    <div className='movieCard'>
       <img src={"https://image.tmdb.org/t/p/w780" + movie.backdrop_path} alt="" />

       <div class="cardInfo">
       <h1 className='cardTitle'>{movie.title}</h1>
       <p className="cardDesc">{movie.overview.substring(0,100)}...</p>
       </div>
     </div>
     <IconContainer>
     <Modal movie={movie}/>
     </IconContainer>
   

    </motion.div>

   
  )
}
export default MovieContainer