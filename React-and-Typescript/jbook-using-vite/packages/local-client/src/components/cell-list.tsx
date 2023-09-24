import { Fragment, useEffect } from "react";
import AddCell from "./add-cell";
import CellListItem from "./cell-list-item";
import "./cell-list.css";
import { useTypedDispatch, useTypedSelector } from "../hooks/typed-redux-hooks";
import { fetchCells } from "../redux/store";

export default function CellList() {
  const disptach = useTypedDispatch();

  // fetch cells from file on initial load
  useEffect(() => {
    disptach(fetchCells());
  }, []);

  const { cells, loading } = useTypedSelector(
    ({ cells: { data, order, loading } }) => {
      const cells = order.map((id) => data[id]);
      return { cells, loading };
    }
  );

  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell previousCellId={cell.id} />
    </Fragment>
  ));

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className='cell-list'>
      <AddCell forceVisible={cells.length === 0} previousCellId={null} />
      {renderedCells}
    </div>
  );
}
