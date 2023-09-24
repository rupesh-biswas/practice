import ActionBar from "./action-bar";
import CodeCell from "./code-cell";
import TextEditor from "./text-editor";
import "./cell-list-item.css";
import { Cell } from "../types/cell";

interface CellListItemProps {
  cell: Cell;
}

export default function CellListItem({ cell }: CellListItemProps) {
  let child: React.JSX.Element;
  if (cell.type === "code") {
    child = (
      <>
        <div className='action-bar-wrapper'>
          <ActionBar id={cell.id} />
        </div>
        <CodeCell cell={cell} />
      </>
    );
  } else {
    child = (
      <>
        <TextEditor cell={cell} />
        <ActionBar id={cell.id} />
      </>
    );
  }
  return <div className='cell-list-item'>{child}</div>;
}
