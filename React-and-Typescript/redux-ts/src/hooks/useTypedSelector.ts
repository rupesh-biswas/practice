import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../state";
import { useSelector } from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
