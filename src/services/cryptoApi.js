import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//  require('dotenv').config()

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '2d8afc4954mshf1088ea6e97f4c3p1966a1jsn85031b838f51',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
reducerPath: 'cryptoApi',
baseQuery: fetchBaseQuery({ baseUrl }),
endpoints: (builder) => ({
    getCryptos: builder.query({
        query: () => createRequest('/coins')
    })
})
});

export const {
    useGetCryptosQuery,
} = cryptoApi;
  