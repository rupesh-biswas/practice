import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

// DEV ONLY
function pause(duration) {
    return new Promise((resolve) => {
        setTimeout(resolve, duration)
    })
}

const photosApi = createApi({
    reducerPath: "photos",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3005",
        fetchFn: async (...args) => {
            await pause(1000);
            return fetch(...args);
        }
    }),
    endpoints(builder) {
        return {
            fetchPhotos: builder.query({
                query: (album) => {
                    return {
                        url: "/photos",
                        params: {
                            albumId: album.id,
                        },
                        method: "GET",
                    };
                },
                providesTags: (results, error, album) => {
                    const tags = results.map(photo => {
                        return { type: 'Photo', id: photo.id };
                    })
                    tags.push({ type: "AlbumsPhotos", id: album.id });
                    return tags;
                }
            }),
            addPhoto: builder.mutation({
                query: (album) => {
                    return {
                        url: "/photos",
                        method: "POST",
                        body: {
                            albumId: album.id,
                            url: faker.image.url({ height: 150, width: 150 })
                        }
                    }
                },
                invalidatesTags: (results, error, album) => {
                    return [{ type: "AlbumsPhotos", id: album.id, }]
                }
            }),
            removePhoto: builder.mutation({
                query: (photo) => {
                    return {
                        method: "DELETE",
                        url: `/photos/${photo.id}`,
                    }
                },
                invalidatesTags: (results, error, photo) => {
                    return [{ type: "Photo", id: photo.id, }]
                }
            }),
        }
    }
})

export const {
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation,
} = photosApi;
export { photosApi };