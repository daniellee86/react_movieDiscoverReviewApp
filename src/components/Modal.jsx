import {useState} from 'react'
import styled from "styled-components"
import {SearchOutlined} from "@material-ui/icons";
import {mobile, tablet} from "../responsive"

const ButtonOpen = styled.button`
    padding: 2px ;
    font-size: 10px;
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

const ModalMain = styled.div`
   width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 2;

`

const Overlay = styled.div`
     width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background: rgba(49,49,49,0.8);
    z-index: 3;
`

const ModalContent = styled.div`
  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    line-height: 1.4;
    color: white;
    background: black;
    padding: 14px 28px;
    border: 0.2rem solid #fff;
    border-radius: 2rem;
    max-width: 800px;
    min-width: 400px;
    min-height: 300px;
    z-index: 4;
    box-shadow: 0 0 .2rem #fff,
              0 0 .2rem #fff,
              0 0 2rem #FF5733 ,
              0 0 0.8rem #FF5733 ,
              0 0 2.8rem #FF5733 ,
              inset 0 0 1.3rem #FF5733 ;

  animation: flicker 1.5s infinite alternate;  

  ${mobile({ 
        height: "50vh"
        })}
    
`

const ButtonClose = styled.button`
   position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
    border-radius: 50%;
    border: none;
    cursor:pointer;
    transition: transform .5s;
    &:hover{ 
    color: red;
    transform: scale(1.1);
    }
`

const ModalTitle = styled.h1`
font-size: 40px;
text-align: center;
${mobile({ fontSize: "20px" })}
`
const ModalDesc = styled.p`
font-size: 20px;
${mobile({ fontSize: "15px" })}
`

const Date = styled.p`
font-size: 15px;
font-weight: 200;
${mobile({ fontSize: "10px" })}
`

const Rating = styled.p`
font-size: 15px;
font-weight: 200;
${mobile({ fontSize: "10px" })}

`







const Modal = ({movie}) => {
    const [modal, setModal] = useState(false);
    
    const toggleModal = () => {
        setModal(!modal)
    }

    if(modal){
        document.body.classList.add("active-modal")
    } else {
        document.body.classList.remove("active-modal")
    }

  return (
      <>
      <ButtonOpen onClick={toggleModal} >
          <SearchOutlined fontSize="small"/>
      </ButtonOpen>

     

      {modal && (
            <ModalMain>

            <Overlay onClick={toggleModal} >

            <ModalContent>
                <ModalTitle>{movie.title}</ModalTitle>
                <ModalDesc>{movie.overview}</ModalDesc>
                <Date>Release Date: {movie.release_date}</Date>
               <Rating>Average Rating: {movie.vote_average}</Rating>
                <ButtonClose onClick={toggleModal} className='close-model'>X</ButtonClose>
            </ModalContent>

            </Overlay>

            </ModalMain>
         
      )}
      </>
  )
}

export default Modal