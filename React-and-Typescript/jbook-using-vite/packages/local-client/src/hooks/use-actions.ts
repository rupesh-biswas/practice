import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useMemo } from "react";
import {
  deleteCell,
  moveCell,
  insertCell,
  updateCellContent,
} from "../redux/store";

const actionCreators = {
  moveCell,
  deleteCell,
  insertCell,
  updateCellContent,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    return bindActionCreators(actionCreators, dispatch);
  }, [dispatch]);
};
