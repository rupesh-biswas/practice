import { createAsyncThunk } from "@reduxjs/toolkit";
import { BundlerInput, BundlerOutput } from "../payload-types";
import bundler from "../../bundler";

interface RejectValue {
  id: string;
  error: string;
}
export const createBundle = createAsyncThunk<
  BundlerOutput,
  BundlerInput,
  { rejectValue: RejectValue }
>("bundler/create", async (payload, thunkApi) => {
  const { id, input } = payload;
  const { compiledCode, error } = await bundler(input);
  if (compiledCode === "" && error != "") {
    thunkApi.rejectWithValue({ id, error });
  } else if (compiledCode !== "" && error === "") {
    return { compiledCode, error };
  }
  return { compiledCode, error };
});
