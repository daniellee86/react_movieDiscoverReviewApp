import styled from "styled-components"
import { Link } from 'react-router-dom';
// import { mobile } from "../responsive";
// ${mobile({ padding: "0px", flexDirection:"column" })}

const Container = styled.div`
display: flex;
justify-content: space-between;
padding: 10px;
background: black;
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
border-radius: 25px 100px
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
font-size: 20px;
border: solid 1.5px black;
padding: 10px 30px;
background-color: transparent;
backdrop-filter: blur(3px);
color: #fff;
cursor: pointer;
font-weight: 600;
border-radius: 50px;
letter-spacing: 5px;
`


const Categories = () => {
  return (
    <Container>

   <Wrapper>
      <Image src="https://images.pexels.com/photos/3721597/pexels-photo-3721597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Info>
      <Title>TV</Title>
      <Button>
      <Link className="catLink"  to="/Movies"> View </Link>
      </Button> 
      </Info>
    </Wrapper>
    <Wrapper>
      <Image src="https://images.pexels.com/photos/4740522/pexels-photo-4740522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Info>
      <Title>KIDS</Title>
      <Button>
      <Link className="catLink"  to="/Movies"> View </Link>
      </Button>
      </Info>
    </Wrapper>
    <Wrapper>
      <Image src="https://images.pexels.com/photos/7234263/pexels-photo-7234263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Info>
      <Title>MOVIES</Title>
      <Button>
      <Link className="catLink"  to="/Movies"> View </Link>
      </Button>
      </Info>
    </Wrapper>
 

    </Container>
  )
}

export default Categories