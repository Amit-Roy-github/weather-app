import React, { useEffect, useState } from 'react';
import { Box, Card, Typography , Paper} from '@mui/material';
import { red, grey, blueGrey } from '@mui/material/colors';
import fetchData from '../fetchData';
import image1 from '../assets/images/istockphoto-1388239619-1024x1024.jpg'
import image2 from '../assets/images/colony.webp'

const intialData = {
   country: 'India',
   region: 'Maharastra',
   city: 'Mumbai',
   longitude: '50',
   latitude: '50',
   img1: image1 ,
   img2: image2
};

const Card1 = ({data:newLocation}) => {
   const [data, setData] = useState(intialData);

   useEffect(() => {
      fetchData(newLocation).then(fetchedData => {
         const location = fetchedData.location ;
         setData(() => {
            const obj = {
               country: location.country,
               region: location.region,
               city: location.name,
               longitude: location.lon,
               latitude: location.lat,
               img1: image1,
               img2: image2 ,
            };
            return obj;
         });
      })
      .catch(err => {
            console.log(err);
         })
   }, [newLocation]);


   return (
     <Card
        sx={{
               width: '20rem', height: '19rem', bgcolor: grey[700],
               textAlign: 'center', color : grey[100] , display:'grid',gridTemplateRows:'1fr 1fr'
            }}
      >
        <Box sx={{
           display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.375rem',
           p:'0.4375rem'
        }}>
           <Paper sx={{ background:'transparent', overflow:'hidden'
           }}><img src={data.img1} alt="" style={{height:'100%'}}/></Paper>

           <Paper sx={{background:'transparent',overflow:'hidden'}}><img src={data.img2} alt=""  style={{height:'100%'}} /></Paper>
         </Box>

        <Box sx={{ position:'relative', fontSize: '1rem', fontWeight: 500,color:blueGrey[100] }}>
           <Typography variant='h4' sx={{
                  position:'absolute', left:'20px' ,
               }}>{data.city}</Typography>
           <Typography sx={{
                  position:'absolute' , top:'45px' , left:'8px'
               }}>Country : {data.country} </Typography>
           <Typography sx={{
                  position:'absolute' , top:'65px',left:'8px'
           }}>Region : {data.region} </Typography>
           <Typography sx={{
              position:'absolute' , bottom :'10px' , left : '10px'
            }}>Longitude : {data.longitude}</Typography>
           <Typography sx={{
              position:'absolute' , bottom :'10px' , right : '10px'
           }}>Latitude : {data.latitude} </Typography>
        </Box>
     </Card>

  )
}

export default Card1;