
const apiKey = `294aef591c374c60a8e135739243108`  ;
const base_url = 'http://api.weatherapi.com/v1/forecast.json';

const fetchData = async (location) => {
   try {
      const response = await fetch(`${base_url}?key=${apiKey}&q=${location ? location : 'Silchar'}`);
      if (!response.ok) {
         throw new Error('Network response was not ok ') ;
      }
      const data = await response.json();
      return data;
   }
   catch (error) {
      console.error('Error fetching data : ', error);
      throw error;
   }
};
export default fetchData;