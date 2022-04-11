import { motion } from "framer-motion";
import styled from "styled-components";
 import Modal from "./Modal";
 import {FavoriteBorder, CreateOutlined} from "@material-ui/icons";

 const IconContainer = styled.div`
  margin: 5px 10px;
  display: flex;
 `

 const Icon = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 padding: 2px ;
 margin-left: 5px;
    border: none;
    outline: none;
    background: #f1f1f1;
    color: black;
    border-radius: 50%;
    cursor:pointer;
    transition: transform .5s;

    &:hover{ 
    color: red;
    transform: scale(1.1);
    }
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

     <Icon>
     <FavoriteBorder fontSize="small"/>
     </Icon>
     <Icon>
     <CreateOutlined fontSize="small"/>
     </Icon>

     </IconContainer>
   

    </motion.div>

   
  )
}
export default MovieContainer