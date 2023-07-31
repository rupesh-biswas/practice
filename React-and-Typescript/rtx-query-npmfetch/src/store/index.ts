import { configureStore } from "@reduxjs/toolkit"
import { repositoriesApi } from "./api/repositoriesApi"
import { setupListeners } from "@reduxjs/toolkit/dist/query"

export const store = configureStore({
  reducer: {
    [repositoriesApi.reducerPath]: repositoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(repositoriesApi.middleware),
})

setupListeners(store.dispatch)

export { useFetchPackagesQuery } from "./api/repositoriesApi"
