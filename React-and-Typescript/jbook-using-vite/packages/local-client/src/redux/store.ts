import { configureStore } from "@reduxjs/toolkit";
import { CellsReducer } from "./slices/cellsSlice";
import { bundlerReducer } from "./slices/bundlerSlice";
import { listenerMiddleware } from "./middlewares/save-cells-middleware";

export const store = configureStore({
  reducer: {
    cells: CellsReducer,
    bundles: bundlerReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(listenerMiddleware.middleware);
  },
});

export {
  moveCell,
  deleteCell,
  insertCell,
  updateCellContent,
} from "./slices/cellsSlice";

export { fetchCells, saveCells } from "./thunks/cellsThunks";
export { createBundle } from "./thunks/bundlerThunks";

export type RootState = ReturnType<typeof store.getState>;
