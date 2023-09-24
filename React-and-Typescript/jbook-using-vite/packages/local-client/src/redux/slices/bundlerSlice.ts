import { createSlice } from "@reduxjs/toolkit";
import { createBundle } from "../thunks/bundlerThunks";

interface BundlerState {
  [key: string]: {
    loading: boolean;
    compiledCode: string;
    error: string;
  };
}

const initialState: BundlerState = {};

const bundlerSlice = createSlice({
  name: "bundler",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createBundle.pending, (state, { meta }) => {
      const { id } = meta.arg;
      state[id] = {
        loading: true,
        compiledCode: "",
        error: "",
      };
    });

    builder.addCase(createBundle.fulfilled, (state, { payload, meta }) => {
      const { compiledCode, error } = payload;
      const { id } = meta.arg;
      state[id] = {
        loading: false,
        compiledCode,
        error,
      };
    });

    builder.addCase(createBundle.rejected, (state, { payload }) => {
      if (payload) {
        const { id, error } = payload;
        state[id] = {
          loading: false,
          compiledCode: "",
          error,
        };
      }
    });
  },
});

export const bundlerReducer = bundlerSlice.reducer;
