import styled from "styled-components"
import { Link } from 'react-router-dom';
// import { mobile } from "../responsive";
// ${mobile({ padding: "0px", flexDirection:"column" })}

const Container = styled.div`
display: flex;
justify-content: space-between;
padding: 10px;
`
const Wrapper = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
filter: grayscale(50%)
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
justify-content: center;
`
const Title = styled.h1`
font-size: 50px;
color: red;
margin: 20px;
font-weight: 400;
`
const Button = styled.button`
border: none;
padding: 10px;
background-color: white;
color: black;
cursor: pointer;
font-weight: 600;

`


const Categories = () => {
  return (
    <Container>

   <Wrapper>
      <Image src="https://images.pexels.com/photos/3721597/pexels-photo-3721597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Info>
      <Title>Watch</Title>
      <Button>
      <Link className="catLink"  to="/Movies"> View Movies</Link>
      </Button> 
      </Info>
    </Wrapper>
    <Wrapper>
      <Image src="https://images.pexels.com/photos/4740522/pexels-photo-4740522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Info>
      <Title>Discover</Title>
      <Button>
      <Link className="catLink"  to="/Movies"> View Movies</Link>
      </Button>
      </Info>
    </Wrapper>
    <Wrapper>
      <Image src="https://images.pexels.com/photos/7234263/pexels-photo-7234263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Info>
      <Title>Love</Title>
      <Button>
      <Link className="catLink"  to="/Movies"> View Movies</Link>
      </Button>
      </Info>
    </Wrapper>
 


    </Container>
  )
}

export default Categories