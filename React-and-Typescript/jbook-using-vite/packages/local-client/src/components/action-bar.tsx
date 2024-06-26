import { useActions } from "../hooks/use-actions";
import "./action-bar.css";

interface ActionBarProps {
  id: string;
}

export default function ActionBar({ id }: ActionBarProps) {
  const { moveCell, deleteCell } = useActions();

  return (
    <div className='action-bar'>
      <button
        className='button is-primary is-small'
        onClick={() => moveCell({ cellId: id, direction: "up" })}>
        <span className='icon'>
          <i className='fas fa-arrow-up'></i>
        </span>
      </button>
      <button
        className='button is-primary is-small'
        onClick={() => moveCell({ cellId: id, direction: "down" })}>
        <span className='icon'>
          <i className='fas fa-arrow-down'></i>
        </span>
      </button>
      <button
        className='button is-primary is-small'
        onClick={() => deleteCell({ cellId: id })}>
        <span className='icon'>
          <i className='fas fa-times'></i>
        </span>
      </button>
    </div>
  );
}
