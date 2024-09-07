import React from 'react';
import { Box, Card } from '@mui/material';
import { grey } from '@mui/material/colors';
import  TemperatureCard  from './TemperaturCard';
import FutureTemCard from './FutureTemCard';
import StatusCards from './StatusCards';


const Card2 = ({data}) => {

   return (
      <Card maxWidth={false}
        sx={{
           width: '35rem', height: '19rem', bgcolor: 'rgb(6 182 212)',
           display: 'flex', flexDirection:'column' , gap: "0.3125rem",
        }}
     >
         <Card  sx={{
            bgcolor:'transparent', flexBasis:'70%', color: grey[100],
            display: 'flex', flexDirection: 'column',
         }} >
            < TemperatureCard location={data} />
            <StatusCards location={data} />
         </Card>

         <Card sx={{
            display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap:'9px',overflow:'visible',
            background: 'transparent', flexBasis: '30%', px:'18px'
         }}>

            <FutureTemCard location={data} />
         </Card>
      </Card>
  )
}

export default Card2