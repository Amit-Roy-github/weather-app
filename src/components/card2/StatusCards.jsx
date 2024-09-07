import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material';
import fetchData from '../../fetchData';
import StatusCard from './StatusCard';

const StatusCards = ({location}) => {

   const [data, setData] = useState({
      wind: 3,
      humidity: 72,
      air: 30,
      dewPoint: 30,
      presure: 1002,
      cloud: 20,
   });

   useEffect(() => {

      fetchData(location).then(fetchedData => {
         const current = fetchedData.current;
         setData({
            wind: Math.trunc(current.wind_kph),
            humidity: current.humidity,
            air: Math.trunc(current.windchill_c),
            dewPoint: Math.trunc(current.dewpoint_c),
            presure: current.pressure_mb,
            cloud: current.cloud
         });
      })
         .catch(err => {
            console.log(err);
         })
   }, [location]);
  return (
     <Box sx={{ display: 'flex', justifyContent: 'space-around', paddingTop: '0.3125rem' }}>
        <StatusCard tag="Air quality" val={data.air} />
        <StatusCard tag='Humidity' val={`${data.humidity}%`} />
        <StatusCard tag='Wind' val={`${data.wind} km/h`} />
        <StatusCard tag='Dew point' val={`${data.dewPoint} C`} />
        <StatusCard tag='Pressure' val={`${data.presure} mb`} />
        <StatusCard tag='Cloud' val={`${data.cloud}`} />
     </Box>

  )
}

export default StatusCards;