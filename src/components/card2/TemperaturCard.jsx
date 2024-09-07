import React, { useEffect, useState } from 'react';
import { Box ,Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import logo from '../../assets/images/sunandcloud.png'
import getHour from '../../getTime';
import fetchData from '../../fetchData';



const TemperatureCard = ({location}) => {
   const date = new Date().toString();

   const [data, setData] = useState({
      currentTem: "29",
      feelsLike: "31",
      currStatus : 'Cloudy'
   });

   useEffect(() => {

      fetchData(location).then(fetchedData => {
         const current = fetchedData.current;
         setData({
            currentTem: Math.trunc(current.temp_c),
            feelsLike: Math.trunc(current.feelslike_c),
            currStatus : current.condition.text ,
         });
      })
         .catch(error => {
            console.error(error);
         });
   }, [location]);

  return (
     <Box style={{
                flexBasis:'70%',display: 'grid', gridTemplateColumns: ' 65% 35%'
        }}>
           <Box sx={{position:'relative'}}>
               <Box sx={{fontSize:'1rem' , fontWeight:'500', margin:' 0.5rem'}}>
                  <span>Current weather</span>
                  <p style={{marginLeft:'0.75rem' , color : grey[300] }}>{getHour(date.slice(16,21))}</p>
               </Box>
               {/* // take care of sx and style */}
               <Box sx={{
                     width: '10rem', height: '6rem',
                     position:'absolute' , top:'-0.375rem' , left : '6rem'
                  }}><img src={logo} />
               </Box>
                  <Typography sx={{fontSize:'3.125rem',position:'absolute', right:'2.25rem',top:'3rem' }}>{data.currentTem}</Typography>
                  <Typography sx={{fontSize:'2rem',position:'absolute', right:'0', top:'3.6875rem'}}>°C</Typography>
        </Box>

           <Box sx={{
                  display: 'flex', alignItems: 'center', flexDirection:'column', justifyContent:'center', gap:'0.5625rem' , marginRight:'0.625rem',
                  textAlign:'center'
               }}>
                  <Typography sx={{ fontSize: "1.1rem", fontWeight: '550', color: grey[200] }} >{data.currStatus }</Typography>
                  <Typography sx={{fontSize:'0.875rem' ,fontWeight:'550' ,color:grey[300]}}>Feels like : {data.feelsLike}°C </Typography>
           </Box>
   </Box>
  )
}
export default TemperatureCard;