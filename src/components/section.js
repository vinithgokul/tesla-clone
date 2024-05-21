import React from "react";
import styled from 'styled-components'
// npm add styled-components
import { Fade } from "react-awesome-reveal";
function Section( {title,
description,
backgroundImg,
leftbtntext,
rightbtntext}){
    return(
        <Wrap bgImg={backgroundImg}>
           <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            </Fade>
            <Buttons>
       <Fade bottom>
            <ButtonGroup>
                <LeftButton>
            {leftbtntext}
                </LeftButton>
                {rightbtntext&&  <RightButton>
               {rightbtntext}
                </RightButton>}
              
            </ButtonGroup>
        </Fade>
            <DownArrow src='/images/down-arrow.svg'>

            </DownArrow>
            
            </Buttons>
        </Wrap>
    )
}
export default Section
const Wrap=styled.div`
height:100vh;
width:100vw;
background-size:cover ;
background-position:center;
background-repeat:no-repeat;
background-image:${props=>`url('/images/${props.bgImg}')`};
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;

`
const ItemText=styled.div`
padding-top:15vh;
text-align:center;
`
const ButtonGroup=styled.div`
display:flex;
margin-bottom:30px;
@media (max-width:768px){
display:flex;
flex-direction:column;
}

`
const LeftButton=styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:250px;
color:white;
border-radius:100px;
display:flex;
justify-content:center;
align-items:center;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:8px;


`
const RightButton=styled(LeftButton)`
background-color:white;
color:black;
opacity:0.65;
`
const DownArrow=styled.img`
margin-top:15px;
height:40px;
animation:animationDown infinite 1.5s ;
overflow-x:hidden;
`
const Buttons=styled.div``
