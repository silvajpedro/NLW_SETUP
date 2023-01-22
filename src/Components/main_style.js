import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
}
`
export const Main = styled.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #09090A;
height: 100vh;
`
export const FirstSectionMain = styled.section`
border: solid white;
width: 86vw;
height: 20vh;
`
export const BlocksBox = styled.div`
display: flex;
gap:5px;
/* border: solid white; */
height: 4vh;
`
export const FirstBlock = styled.div`
height: 3.10vh;
width: 1.5vw;
border-radius: 5px;
background: #18181B;
border: solid 1px #27272A;
stroke:solid #27272A;
` 
export const SecondBlock = styled(FirstBlock)`
background: #4C1D95;
border:#6D28D9 ;
stroke:#6D28D9;
` 
export const ThirdBlock = styled(FirstBlock)`
background: #5B21B6;
border:#7C3AED;
stroke:#7C3AED ;

` 
export const FourthBlock = styled(FirstBlock)`
background: #8B5CF6;
stroke:#8B5CF6 ;
border:#8B5CF6 ;
` 
export const FifthBlock = styled(FirstBlock)`
background: #7C3AED;
border: #A78BFA;
stroke: #A78BFA;
` 
export const SixthBlock = styled(FirstBlock)`
background:#8B5CF6;
border: solid 1px #C4B5FD;
stroke: #C4B5FD;
` 
export const ButtonTitleBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 85vw;
border: solid;
`
export const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
background-color: transparent;
border-radius: 8px;
border: 1px solid #8b5cf6;
height: 8vh;
width: 17vw;
color:  #ffff;
font-size: 1.3vw;
cursor: pointer;
span{
    position: relative;
    left: -0.5vw;
    color: #8B5CF6;
    font-size: 2vw;
}
&:hover{
    opacity: 0.8;
}
`
export const MainTitle = styled.h1`
color: #ffff;
font-size: 4.4vw;
margin-left: 0.15vw;
font-family: "Inter", sans-serif;
`
export const SecondSectionMain = styled.section`
border: solid white;
width: 86vw;
height: 64vh;
`
export const Input = styled.input`
width: 4.75vw;
height:10vh;
appearance: none;
-webkit-appearance: none;
border: 2px solid #27272A;
border-radius: 8px;
background: #18181B;
&:checked{
    background: #8B5CF6;
    border: 2px solid #A78BFA;
}
`