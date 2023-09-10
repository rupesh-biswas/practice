import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../states";
import { useMemo } from "react";

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    return bindActionCreators(actionCreators, dispatch);
  }, [dispatch]);
};
