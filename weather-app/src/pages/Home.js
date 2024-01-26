
import {Box,styled} from '@mui/material'
import React from 'react'
import Sunset from '../assets/images/bg.jpg'
import Info from '../components/Info'
import Form from '../components/Form'
import { useState } from 'react'



const Component = styled(Box)({
    height:'100vh',
    display:'flex',     
    alignItems:'center',
    margin:'0 auto',
    width:'65%'  
})

const Image = styled(Box)({
    backgroundImage:`url(${Sunset})`,
    width:'20%',
    height:'80%',
    backgroundSize:'cover',
    borderRadius:'20px 0 0 20px'
});

const Home = () => {
  const[result,setResult]=useState({});

  return (
    <Component> 
        <Image></Image>
        <Box style={{width:'23%' , height:'80%'}}>
           <Form setResult={setResult}/>
           <Info result={result}/>
        </Box>
    </Component>

  )
}

export default Home
