import styled from "styled-components"

const Image = styled.img`
height: 100%;
width: 100%;
margin:0;

  border-radius: 0;
`
const Info = styled.div`
height: 75%;
width: 75%;
position: absolute;
display: flex;
flex-direction: column;
justify-content: space-around;
margin-left: 10%;

`

const InfoTop = styled.h1`
font-size: 60px;
color: white;

text-shadow: 2px 2px  #767676, 
      -3px 3px black 
`

const InfoBottom = styled.h2`
font-size: 20px;
font-weight: 200;
text-align: center;
color: red;
text-transform: uppercase;
background-color: black;
border-radius: 5px;
width: 40%;
padding: 5px;

`

const Home = () => {
  return (
    <div className="placeHolder">
    <Image src="https://images.pexels.com/photos/7234276/pexels-photo-7234276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
    <Info>
    <InfoTop>Discover new movies.<br/>Create your watchlist.<br/>Review your favourites.</InfoTop>
     <InfoBottom>All the content. All the time.</InfoBottom>
    </Info>
      
    </div>    
        
  )
}

export default Home