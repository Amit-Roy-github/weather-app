import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import getHour from '../../getTime';
import logo from '../../assets/images/cloudandwind.png';
import logo2 from '../../assets/images/cloudandlightrain.png'
import fetchData from '../../fetchData';


const FutureTemCard = ({location}) => {

   const currHour = new Date().getHours();
   const [data, setData] = useState(() => {
      const obj = [];
      for (let i = 1; i <= 5; i++) {
         obj[i] = {
               time: (currHour + i) % 24 + ':00',
               currentTem: (25 + i),
               img: logo ,
            }
      }
      return obj;
   });
   console.log(location);

   useEffect(() => {
      fetchData(location).then(fetchedData => {
         const furureTem = fetchedData.forecast.forecastday[0].hour;
         setData(preData => {
            const obj = preData;
            for (let i = 1; i <= 5; i++) {
               let ind = (i + currHour) % 24;
               obj[i].time = furureTem[ind].time.slice(11);
               obj[i].currentTem = Math.trunc(furureTem[ind].temp_c);
            }
            return obj;
         });
         console.log(data);
         console.log(furureTem)
      })
         .catch(err => {
            console.log(err);
         })
   }, [location]);


  return (
     data.map(ele => {
        return (<Box sx={{
            display: 'flex', flexDirection: 'column',color:grey[300],
            position:'relative'
         }}>
           <Box sx={{
              width: '5rem', height: '5rem',
              position: 'absolute' ,left :'-0.625rem' ,top:'-0.2rem'
           }}>
              <img src = {logo2} alt="" />
           </Box>
           <Typography sx={{ position:'absolute', right:'0.125rem' ,bottom:'1.25rem'}}>{ele.currentTem}°c</Typography>
           <Typography sx={{fontSize:'0.8rem', position:'absolute' ,left:'0.3125rem' ,bottom:'0.1875rem'}}>{getHour(ele.time) }</Typography>
        </Box>)
     })
  )
}
const g = 0;
export default FutureTemCard