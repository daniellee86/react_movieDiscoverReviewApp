import styled from 'styled-components';

const AboutPage = styled.div`
color: white;
padding-top: 10%;
display: flex;
flex-direction: column;
align-items: center;
height: auto;
width: auto;
background-color: #111111;
`

function About() {
  return (
    <AboutPage>
          <h2>NETPICKS. Discover new movies. Review your favourites!</h2>
        <h3>Work in Progress, full functionality; Coming Soon...</h3>
    </AboutPage>
  )
}



export default About