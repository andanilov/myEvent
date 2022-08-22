import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { stringify } from 'querystring';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  endpoints: (build) => ({
    login: build.query({
      query: (login: string) =>({
        url: '/users',
        params: { email: login }
      })
    }),
    // login: build.mutation({
    //   query: (body) => ({
    //     url: '/users',
    //     method: 'POST',
    //     body,
    //   }),
    // }),
    getUsers: build.query<any, string>({
      query: () => `users`,
    }),
  }),
});

export const {
  useGetUsersQuery,
  useLoginQuery,
} = api;
