import { Fragment, useEffect } from "react";
import { useTypedSelector } from "../hooks/use-Typed-selector";
import AddCell from "./add-cell";
import CellListItem from "./cell-list-item";
import "./cell-list.css";
import { useActions } from "../hooks/use-actions";

export default function CellList() {
  const cells = useTypedSelector(({ cells: { data, order } }) =>
    order.map((id) => data[id])
  );
  const { fetchCells } = useActions();

  useEffect(() => {
    fetchCells();
  }, []);

  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell previousCellId={cell.id} />
    </Fragment>
  ));

  return (
    <div className='cell-list'>
      <AddCell forceVisible={cells.length === 0} previousCellId={null} />
      {renderedCells}
    </div>
  );
}
