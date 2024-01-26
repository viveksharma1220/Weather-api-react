import React, { useState } from 'react'
import {Box,InputBase,Button,styled} from '@mui/material'
import { getWeather } from '../services/api'


const Container=styled(Box)({
  background:'#445A6f',
  padding:'10px',
  display:'flex',
  width:'100vh'
})

const Input=styled(InputBase)({
    color:'#FFF',
    marginRight:'20px',
    fontSize:18
})

const GetWeatherButton=styled(Button)({
    background:'#e67e22'
})

const Form = ({setResult}) => {
    const[data,setData]=useState({ city:'',country:'' });

    const handleChange=(e)=>{
       setData({...data,[e.target.name]:e.target.value})
       console.log(data)
    }
    const getWeatherInfo=async()=>{
     let response= await  getWeather(data.city,data.country)
     setResult(response);
    }

  return (
    <Container>

       <Input placeholder='City'
       onChange={(e)=>handleChange(e)}
       name='city'
        />

       <Input placeholder='Country'
       onChange={(e)=>handleChange(e)}
       name='country'
       />

       <GetWeatherButton variant='contained' onClick={()=>getWeatherInfo()}>Get Weather</GetWeatherButton>

    </Container>
   
  )
}

export default Form
