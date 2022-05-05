import styled from "styled-components"
import {mobile, tablet} from "../responsive"

const Container = styled.div`
height: 40vh;
width: auto;
margin: 0 10% 0 10%;
border: solid 1px white;
${mobile({ display: "none" })}
`
const Wrapper = styled.div`
height: 100%;
width: 100%;
display: flex;
margin: 0;
`

const Movie = styled.div`
height: 100%;
width:100%;
flex: 1 1 0;
margin: 0;
position: relative;
`
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
letter-spacing: 10px;

`

const Desc = styled.div`
flex: 1 1 0;
margin: 0;
display: flex;
flex-direction: column;
justify-content: center;
padding-left: 20px;
color: white;

`

const Image = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
margin: 0;
border-radius: 0px ;
`
const Name = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  text-align: center;
  ${tablet({ fontSize: "1rem" })}
  
`
const Title = styled.h2`
font-size: 3rem;
font-weight: 200;
  color: white;
  /* opacity: 0.5; */
  margin: 0;
  border-top: solid 2px black;
  ${tablet({ fontSize: "2rem" })}
`

const Overview = styled.p`
font-size: 1rem;
font-weight: 200;
margin: 10px;
${tablet({ fontSize: "0.6rem" })}
`

const Date = styled.p`
font-size: 0.8rem;
font-weight: 200;
margin: 5px;
${tablet({ fontSize: "0.4rem" })}
`

const Rating = styled.p`
font-size: 0.8rem;
font-weight: 200;
margin: 5px;
${tablet({ fontSize: "0.4rem" })}
`


const Featured = ({movie}) => {
 
  return (
   <Container>
     <Wrapper>
        <Movie>
           <Image src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt="" />
           <Info>
             <Title>FEATURED</Title>
           
           </Info>
         </Movie>
       
       <Desc>
       <Name>{movie.title}</Name>
       <Overview>{movie.overview.substring(0,350)}</Overview>
       <Date>Release Date: {movie.release_date}</Date>
       <Rating>Average Rating: {movie.vote_average}</Rating>
       </Desc>
    
    
     </Wrapper>
 
 
   
   </Container>
  )
}

export default Featured