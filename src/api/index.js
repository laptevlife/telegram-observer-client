import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// 

// find_chats
export const mainApi = createApi({
  reducerPath: 'mainApi',
  tagTypes: ['userChats'],
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_SERVER_URL}/api` }),
  // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => {
        return {
          url: `/users`,
        }
      },
    }),
    getUserChats: builder.query({
      query: (userId) => {
        return {
          url: `/get_user_chats/${userId}`,
        }
      },
      providesTags: (result) => ['userChats'],
    }),
    getUser: builder.query({
      query: (id) => {
        return {
          url: `/user/${id}`,
        }
      },
      providesTags: (result) => ['userChats'],
    }),
    findChats: builder.mutation({
      query: (body) => ({
        url: `find_chats`,
        method: 'POST',
        body
      }),
    }),

    addUserChat: builder.mutation({
      query: ({ userId, body }) => ({
        url: `add_user_chat/${userId}`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['userChats']

      // invalidatesTags: ['sampleAnalysis']
    }),
    deleteUserChat: builder.mutation({
      query: ({ userId, chatId }) => {
        return {
          url: `delete_user_chat/${userId}/${chatId}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['userChats'],
    }),
    deleteKeyWord: builder.mutation({
      query: ({ userId, chatId, keywordId }) => {
        return {
          url: `delete_keyword`,
          method: 'DELETE',
          body: { userId, chatId, keywordId }
        };
      },
      invalidatesTags: ['userChats'],
    }),
    getChatKeywords: builder.query({
      query: ({ userId, chatId }) => {
        return {
          url: `/get_chat_keywords`,
          params: { userId, chatId }
        }
      },
      providesTags: (result) => ['userChats'],
    }),
    createChatKeyword: builder.mutation({
      query: ({ userId, chatId, keyword }) => {
        return {
          url: `create_chat_keyword/${userId}/${chatId}`,
          method: 'POST',
          body: {
            keyword
          }
        };
      },
      invalidatesTags: ['userChats'],
    }),
  }),
});

// export const { useGetUsersQuery } = mainApi;