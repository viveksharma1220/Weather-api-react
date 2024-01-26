import React from 'react'
import {Box,Typography,styled} from '@mui/material'
// import {LocationOn,SettingsBrightness,Opacity} from '@mui/icons-material'

const Row=styled(Typography)({
    padding: 10,
    fontsize:20,
    letterSpacing:2,
    
})

const InfoBox=styled(Box)({
    margin:60,
    display:'flex',
    flexDirection:'column',

    justifyContent:'center'
})

const Error=styled(Typography)({
  fontsize:60,
  color:'black',
  margin:50,
  padding:20,
 
})

const Info = ({result}) => {
  return (
    result && Object.keys(result).length > 0 ? 
    <InfoBox>
      <Row>  Location: {result.name},{result.sys.country} </Row>
      <Row> Temperature:{result.main.temp} </Row>
      <Row>  Humidity:{result.main.humidity} </Row>
      <Row>  SunRise:{new Date(result.sys.sunrise * 1000).toLocaleTimeString()} </Row>
      <Row>  SunSet:{new Date(result.sys.sunset * 1000).toLocaleTimeString()} </Row>
      <Row>  Humidity:{result.weather[0].main} </Row>
      <Row>  Clouds:{result.clouds.all}% </Row>
    </InfoBox>
    : 
    <Error>Please enter the values to check the weather</Error>
  )
}

export default Info;
