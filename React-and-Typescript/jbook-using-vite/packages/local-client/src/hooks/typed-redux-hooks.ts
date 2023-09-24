import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState, store } from "../redux/store";
import { useDispatch } from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

type AppDispatch = typeof store.dispatch;
export const useTypedDispatch = useDispatch<AppDispatch>;
