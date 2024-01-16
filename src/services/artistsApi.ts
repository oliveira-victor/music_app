// artistsApi.ts

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Artist {
    // Define your artist data structure here
    // For example:
    id: number;
    name: string;
    // ... other fields
}

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://europe-west1-madesimplegroup-151616.cloudfunctions.net',
    prepareHeaders: (headers, { getState }) => {
        // Set Authorization header with your basic authentication token
        const token = 'ZGV2ZWxvcGVyOlpHVjJaV3h2Y0dWeQ==';
        headers.set('Authorization', `Basic ${token}`);
        return headers;
    },
});

export const artistsApi = createApi({
    reducerPath: 'artistsApi',
    baseQuery,
    endpoints: (builder) => ({
        getArtists: builder.query<Artist[], void>({
            query: () => 'artists-api-controller',
        }),
        getArtistById: builder.query<Artist, string>({
            query: (artistId) => `artists-api-controller?artist_id=${artistId}`,
        }),
    }),
});

export const { useGetArtistsQuery, useGetArtistByIdQuery } = artistsApi;
