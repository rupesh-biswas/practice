import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  DeleteCell,
  InsertCell,
  MoveCell,
  UpdateCellContent,
} from "../payload-types";
import { Cell } from "../../types/cell";
import { fetchCells, saveCells } from "../thunks/cellsThunks";
import introData from "./introCells.json";

interface CellsState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string]: Cell;
  };
  saveStatus: "pending" | "success" | "failed";
}

// TODO: Change to UUID package
const generateId = () => {
  return Math.random().toString(36).substring(2, 5);
};

const initialState: CellsState = {
  loading: false,
  error: null,
  order: [],
  data: {},
  saveStatus: "pending",
};

const cellsSlice = createSlice({
  name: "cells",
  initialState,
  reducers: {
    moveCell: (state, action: PayloadAction<MoveCell>) => {
      const { cellId, direction } = action.payload;
      const index = state.order.findIndex((i) => i === cellId);

      const targetIndex = direction === "up" ? index - 1 : index + 1;

      // Handle out of bound
      if (targetIndex < 0 || targetIndex > state.order.length - 1) return state;

      state.order[index] = state.order[targetIndex];
      state.order[targetIndex] = cellId;
    },
    deleteCell: (state, action: PayloadAction<DeleteCell>) => {
      const { cellId } = action.payload;
      state.order = state.order.filter((i) => i !== cellId);
      delete state.data[cellId];
    },
    insertCell: (state, action: PayloadAction<InsertCell>) => {
      const { cellId, type } = action.payload;
      const cell: Cell = {
        id: generateId(),
        content: "",
        type,
      };
      state.data[cell.id] = cell;

      const foundIndex = state.order.findIndex((id) => id === cellId);

      if (foundIndex < 0) {
        state.order.unshift(cell.id);
      } else {
        state.order.splice(foundIndex + 1, 0, cell.id);
      }
      return state;
    },
    updateCellContent: (state, action: PayloadAction<UpdateCellContent>) => {
      const { cellId, content } = action.payload;
      state.data[cellId].content = content;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCells.fulfilled, (state, action) => {
      state.loading = false;
      let { payload } = action;
      payload = payload.length !== 0 ? payload : (introData as Cell[]);

      state.order = payload.map((cell) => cell.id);
      state.data = payload.reduce(
        (acc, cell) => {
          acc[cell.id] = cell;
          return acc;
        },
        {} as CellsState["data"]
      );
    });
    builder.addCase(fetchCells.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || null;
    });
    builder.addCase(fetchCells.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(saveCells.fulfilled, (state) => {
      state.saveStatus = "success";
      state.error = null;
    });
    builder.addCase(saveCells.pending, (state) => {
      state.saveStatus = "pending";
    });
    builder.addCase(saveCells.rejected, (state, action) => {
      state.saveStatus = "failed";
      state.error = action.payload || null;
    });
  },
});

export const { moveCell, deleteCell, insertCell, updateCellContent } =
  cellsSlice.actions;

export const CellsReducer = cellsSlice.reducer;
