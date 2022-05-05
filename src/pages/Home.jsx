import styled from "styled-components"
import Categories from "../components/Categories"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import {mobile, tablet} from "../responsive"




const Image = styled.img`
height: 100%;
width: 100%;
border-radius: 0;
margin:0;
`
const Info = styled.div`
height: 75%;
width: 75%;
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
margin: 0 0 10% 10%;

`

const InfoTop = styled.h1`
font-size: 50px;
color: white;
text-shadow: -3px 2px  #282828, 
      -6px 3px black; 
      letter-spacing: 6px;

margin-bottom: 20px;
${mobile({ fontSize: "40px" })}
`

const Desc = styled.p`
font-size: 20px
${mobile({ fontSize: "15px" })}
`

const InfoBottom = styled.h2`
font-size: 15px;
font-weight: 200;
text-align: center;
color: white;
background-color: black;
border-radius: 5px;
width: 25%;
padding: 5px;
border: solid 1px white;
margin: 0px;
${mobile({ display: "none" })}
${tablet({ display: "none" })}
`

const Home = () => {
  return (
    <>
    <div className="placeHolder">
    <Image src="https://images.pexels.com/photos/7234276/pexels-photo-7234276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
    <Info>
    <InfoTop>Discover. Watch. Review.</InfoTop>
    <Desc>Discover your favourite movies at Netpicks.<br/> Create watchlists for you and your loved ones.<br/> Join the discussion and leave a review.</Desc>
     <InfoBottom>All the content. All the time.</InfoBottom>
    </Info>
    </div>

    <Categories/>
    <Newsletter/>  
    <Footer/>
    </>
  )
}

export default Home