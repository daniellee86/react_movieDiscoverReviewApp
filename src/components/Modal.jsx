import {useState} from 'react'
import styled from "styled-components"
import {SearchOutlined} from "@material-ui/icons";

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
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    color: white;
    background-image: url("https://images.pexels.com/photos/2251206/pexels-photo-2251206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
    background-size: 100%;
    background-repeat: no-repeat;
    padding: 14px 28px;
    border-radius: 3px;
    max-width: 800px;
    min-width: 400px;
    min-height: 300px;
    z-index: 4;
    filter: grayscale(50%)
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
`
const ModalDesc = styled.p`
font-size: 20px;
backdrop-filter: blur(7px);
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
                <ButtonClose onClick={toggleModal} className='close-model'>X</ButtonClose>
            </ModalContent>

            </Overlay>

            </ModalMain>
         
      )}
      </>
  )
}

export default Modal