import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '165ef630ccmsh1c4d3817021fd0cp11a090jsnccf0c1a48055'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';

//# to pass in the headers
const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos : builder.query({
            query : () => createRequest('')
        })
    })
});

//# a custom hook auto-generated by redux-toolkit 
export const { useGetCryptosQuery } = cryptoApi;

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': '165ef630ccmsh1c4d3817021fd0cp11a090jsnccf0c1a48055',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };