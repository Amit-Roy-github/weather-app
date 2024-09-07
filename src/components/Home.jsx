import React from 'react';
import { Card, Container, TextField, Typography } from '@mui/material';
import { red, grey, blueGrey } from '@mui/material/colors';
import Card1 from './Card1';
import Card3 from './Card3';
import Card2 from './card2/Card2';
import { useState } from 'react';
import fetchData from '../fetchData';

const Home = () => {

   const [fetchedData, setFetchedData] = useState('');
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);
   const [newLocation, setNewLocation] = useState('');

   const handleSubmit = async (input) => {
      setError(null);
      setLoading(true);
      setNewLocation(input) ;
   };


   return (
      <Container maxWidth={false} sx={{
         bgcolor: blueGrey[800], height: "100vh", display: 'flex', rowGap: 1, justifyContent: 'space-around', py: 1.5, flexWrap: 'wrap',
         fontFamily :'Segoe UI, Segoe WP, Arial, Sans-Serif' ,
      }}>

         <Card1 data = {newLocation}   />
         <Card2 data = {newLocation }   />
         <Card3 onSubmit={handleSubmit}  />

         {/* <Card
            sx={{
               width: '19rem', height: '18rem', bgcolor:grey[600]
            }}
         >Map</Card>
         <Card
            sx={{
               width: '19rem', height: '18rem', bgcolor:grey[600]
            }}
         ></Card>
         <Card
            sx={{
               width: '19rem', height: '18rem', bgcolor:grey[600]
            }}
         ></Card> */}

      </Container>
  )
}


export default Home;