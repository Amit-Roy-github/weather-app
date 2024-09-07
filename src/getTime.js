const getHour = (ele) => {
   let hour = Number(ele.slice(0,2));
   let displayHour = (hour % 12 === 0 ? "12" : hour%12 ) + ':'+ ele.slice(3) ;

   if (hour >= 0 && hour <= 12)
   {
      displayHour += " AM";
   }
   else {
      displayHour += " PM" ;
   }
   return displayHour;
};

export default getHour;