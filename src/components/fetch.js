// async function getDataFromAPI(query) {
    
//   const key=process.env.REACT_APP_KEY;
//   const cx=process.env.REACT_APP_cx
//   try {
//       const parameter=`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${query}`;
//       console.log("parameter",parameter);
//       const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${query}`)
//       const data = await response.json();
//       console.log(data);
//       return (data);
//     } catch (error) {
//       console.error(error);
//     }
//   }
//  export default getDataFromAPI;



 import { useEffect, useState } from 'react'

 const CONTEXT_KEY=process.env.REACT_APP_cx;
 const API_KEY=process.env.REACT_APP_KEY;

 
 //custom hook
 const useGoogleSearch = (term) => {
     const [data,setData] = useState(null)
     useEffect(() => {
         const fetchData = async() => {
             fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
             .then(response => response.json())
             .then(result => {
                 setData(result)
             })
         }
 
         fetchData()
     },[term])
 
 
   return {data}
 }
 
 export default useGoogleSearch