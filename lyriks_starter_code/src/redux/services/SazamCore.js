import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '8f5ca8a5d2msh81cadbe0d9cecc7p145a1cjsn3d6b06e3dd7b',
//       'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
//     }
//   };
  
  fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    export const shazamCoreApi= createApi({
        reducerPath:"SazamCoreApi",
        baseQuery:fetchBaseQuery({
            baseUrl:"https://shazam-core.p.rapidapi.com/v1",
            prepareHeaders:(headers)=>{
                headers.set("X-RapidAPI-Key", '8f5ca8a5d2msh81cadbe0d9cecc7p145a1cjsn3d6b06e3dd7b' )
                return headers
            },
        }),
        endpoints:(build)=>{
            getTopChart:build.query({query:()=>"/charts/world"})
        },
    })

    export const { useGetTopChartquery}= shazamCoreApi