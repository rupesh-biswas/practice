import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import {
  deleteCell,
  insertCell,
  moveCell,
  saveCells,
  store,
  updateCellContent,
} from "../store";

// Create the middleware instance and methods
export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: isAnyOf(moveCell, deleteCell, insertCell, updateCellContent),
  effect: async (action, listenerApi) => {
    console.log(action.payload);
    listenerApi.cancelActiveListeners();
    // Wait 300ms before dispatching- this to prevent multiple request to backend server
    await listenerApi.delay(300);
    store.dispatch(saveCells());
  },
});
