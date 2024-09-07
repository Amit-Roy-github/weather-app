import { Card , Paper, TextField } from '@mui/material'
import React, { useState} from 'react';
import { grey } from '@mui/material/colors';




const Card3 = ({ onSubmit }) => {
   const [input, setInput] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      if (input.trim()) {
         onSubmit(input);
         setInput('');
      }
   };

   return (
      <Card
            sx={{
               width: '19rem', height: '18rem', bgcolor: grey[600],
               display : 'flex' , justifyContent:'center' , alignItems:'center'
            }}
      >
         <form onSubmit={handleSubmit} >
            <TextField label="Enter City Name"
               value={input}
               onChange={(e) => setInput(e.target.value)}
            />
            <Paper><button type='submit' >submit</button></Paper>
         </form>
      </Card>
  )
}
export default Card3

