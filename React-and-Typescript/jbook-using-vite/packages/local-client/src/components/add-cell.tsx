import { useActions } from "../hooks/use-actions";
import "./add-cell.css";

interface AddcellProps {
  previousCellId: string | null;
  forceVisible?: boolean;
}
export default function AddCell({
  previousCellId,
  forceVisible,
}: AddcellProps) {
  const { insertCell } = useActions();
  return (
    <div className={`add-cell ${forceVisible ? "force-visible" : ""}`}>
      <div className='add-buttons'>
        <button
          className='button is-rounded is-primary is-small'
          onClick={() => insertCell({ cellId: previousCellId, type: "code" })}>
          <span className='icon is-small'>
            <i className='fas fa-plus' />
          </span>
          <span>Code</span>
        </button>
        <button
          className='button is-rounded is-primary is-small'
          onClick={() => insertCell({ cellId: previousCellId, type: "text" })}>
          <span className='icon is-small'>
            <i className='fas fa-plus' />
          </span>
          <span>Text</span>
        </button>
      </div>
      <div className='divider'></div>
    </div>
  );
}
