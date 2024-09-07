import React from 'react';
import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

const StatusCard = (proop) => {
  return (
    <Box sx={{
         display: 'flex', justifyContent: 'center', flexDirection: 'column',
         textAlign:'center'
      }}>
        <Typography sx={{ fontSize: '0.82rem', fontWeight: '550', color: grey[300] }}>{proop.tag}</Typography>
        <Typography sx={{color:grey[50] , fontWeight:'540'}}>{proop.val ? proop.val : 90 }</Typography>
    </Box>
  )
}

export default StatusCard;