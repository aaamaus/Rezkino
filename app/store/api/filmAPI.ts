import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IHeaders {
  "Authorization": string;
  "accept": string;
}

interface IGetVideoQueries {
  queries: Object,
  id: number
}

const Headers: IHeaders = {
  "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  "accept": "application/json",
};
const generateQueryStr = (baseString: string, query: Object): string => {
  const queryString: string =
    baseString +
    Object.entries(query)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

  return queryString;
};

console.log(process.env.NEXT_PUBLIC_BASE_URL, 'process.env.BASE_URL')
export const filmsAPI = createApi({
  reducerPath: "films",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Authorization", Headers["Authorization"]);
      headers.set("accept", Headers["accept"]);
      return headers;
    },
  }),

  endpoints: (builder) => ({     // <Type of data the call will return, Type of parameter being passed to the query function>
    getFilmsList: builder.query<any, Object>({
      query: (queryParams) => {
        const queryStr = generateQueryStr("movie/now_playing?", queryParams);
        return { url: queryStr };
      },
    }),
    getCurrentVideo: builder.query<any, Object>({
      query: (queryParams: IGetVideoQueries) => {
        const queryStr = generateQueryStr(`movie/${queryParams.id}/videos?`, queryParams.queries);
        return { url: queryStr };
      },
    }),
  }),
});

export const { useGetFilmsListQuery, useGetCurrentVideoQuery } = filmsAPI;
