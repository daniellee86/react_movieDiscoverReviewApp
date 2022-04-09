import styled from "styled-components"

const Container = styled.div`
height: 40vh;
width: auto;
margin: 0 10% 0 10%;
border: solid 1px white;
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
`

const Image = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
margin: 0;
border-radius: 0px ;
`
const Name = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  
`
const Title = styled.h2`
font-size: 3rem;
font-weight: 200;
  color: white;
  /* opacity: 0.5; */
  margin: 0;
  border-top: solid 2px black;
`

const Overview = styled.p`
color: white;
font-size: 1rem;
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
       </Desc>
    
    
     </Wrapper>
 
 
   
   </Container>
  )
}

export default Featured