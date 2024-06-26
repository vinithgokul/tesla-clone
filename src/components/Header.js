import React,{useState} from 'react'
import styled from 'styled-components'
// import {FontAwesomeIcon} from 'react-icons'
import MenuIcon from '@mui/icons-material/Menu';
// import { MenuItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function Header(){
  const [burgerstatus, setBurgerStatus]=useState(false)
    return(
      <Container>
        <a href='www.google.com'> <img src='/images/logo.svg' alt='logo'/></a>
        <Menu>
           <p><a href='www.google.com' >Model S</a></p> 
           <p><a href='www.google.com' >Model 3</a></p> 
           <p><a href='www.google.com' >Model x</a></p> 
           <p><a href='www.google.com' >Model Y</a></p> 
        </Menu>
        <Rightmenu>
        <a href='www.google.com' >shop</a>
        <a href='www.google.com' >Tesla Account</a>
        <CustomMenu onClick={()=>setBurgerStatus(true)}></CustomMenu>
        </Rightmenu>
      <BurgerNav show={burgerstatus}>
        <CloseWraper>        <CustomClose onClick={()=>setBurgerStatus(false)}></CustomClose></CloseWraper>

        <li><a href='www.google.com' >Existing Inventory</a></li>
        <li><a href='www.google.com' >Used Inventory</a></li>
        <li><a href='www.google.com' >Trade-in</a></li>
        <li><a href='www.google.com' >cypertruck</a></li>
        <li><a href='www.google.com' >Roadaster</a></li>
        <li><a href='www.google.com' >Semi</a></li>
        <li><a href='www.google.com' >Charging</a></li>
      </BurgerNav>

      </Container>
    )
}
export default Header

const Container=styled.div`
min-height:40px;
position:fixed;
display:flex;
align-items:center;
padding:0 20px;
top:0;
left:0;
right:0;
justify-content:space-between;
z-index:1;
`
const Menu=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;

p{
    padding:0 10px;
    text-transform:uppercase;
    flex-wrap:nowrap;
    font-weight:600;
}
@media(max-width:768px){
  display:none;
}

`
const Rightmenu=styled.div`
display:flex;
  flex-direction:row;
  align-items:center;
a{
  
  margin-right: 10px;
  text-transform:uppercase;
  flex-wrap:nowrap;
  font-weight:600;}

`
const CustomMenu=styled(MenuIcon)`
cursor:pointer;`
const BurgerNav=styled.div`
background-color:white;
position:fixed;
top:0;
bottom:0;
right:0;
padding:10px;
width:300px;
list-style:none;
z-index:11;
display:flex;
flex-direction:column;
text-align:start;
li{
  padding:15px 0;
  border-bottom:1px solid rgba(0,0,0,0.2);
 a{
  font-weight:600;
 }
}
transition:transform ease-in  0.8s ;
transform:${props=>props.show?'translateX(0)':'translateX(100%)'}
`
const CustomClose=styled(CloseIcon)`

`
const CloseWraper=styled.div`
display:flex;
justify-content:flex-end;
`