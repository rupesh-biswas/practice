import { createAsyncThunk } from "@reduxjs/toolkit";
import { Cell } from "../../types/cell";
import axios from "axios";
import { RootState } from "../store";

export const fetchCells = createAsyncThunk<
  Cell[],
  undefined,
  { rejectValue: string }
>("cells/fetchCells", async (_, thunkApi) => {
  try {
    const { data }: { data: Cell[] } = await axios.get("/cells");
    return data;
  } catch (err) {
    if (err instanceof Error) {
      thunkApi.rejectWithValue(err.message);
    }
  }
  return [];
});

export const saveCells = createAsyncThunk<
  void,
  void,
  { rejectValue: string; state: RootState }
>("cells/saveCells", async (_, thunkApi) => {
  try {
    const { data, order } = thunkApi.getState().cells;
    const cells = order.map((id: string) => data[id]);
    await axios.post("/cells", { cells });
  } catch (err) {
    if (err instanceof Error) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
});
