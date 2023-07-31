import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Results } from "./models/search.interface"

export const repositoriesApi = createApi({
  reducerPath: "respositoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://registry.npmjs.com/-/v1" }),
  tagTypes: ["NPMsearch"],
  endpoints: (builder) => ({
    fetchPackages: builder.query<Results, string>({
      query: (term) => {
        const size = 25
        return {
          url: "/search",
          params: {
            text: term,
            size,
          },
          method: "GET",
        }
      },
      providesTags: (result, error, term) => {
        return [{ searchText: term, type: "NPMsearch" }]
      },
    }),
  }),
})

export const { useFetchPackagesQuery } = repositoriesApi
