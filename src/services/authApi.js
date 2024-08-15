import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (user) => ({
        url: '/jobseeker', 
        method: 'POST',
        body: user,
      }),
    }),
   GetUser:builder.query({
    query:()=>'/jobseeker'
   })
  }),
});

export const { useSignUpMutation, useGetUserQuery } = authApi;
export default authApi;
