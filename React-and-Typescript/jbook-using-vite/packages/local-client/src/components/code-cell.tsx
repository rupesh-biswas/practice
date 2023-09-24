import { useEffect } from "react";
import CodeEditor from "./code-editor";
import Preview from "./Preview";
import { useActions } from "../hooks/use-actions";
import Resizable from "./resizable";
import { useTypedDispatch, useTypedSelector } from "../hooks/typed-redux-hooks";
import "./code-cell.css";
import useCumulativeCode from "../hooks/use-cumulative-code";
import { createBundle } from "../redux/store";
import { Cell } from "../types/cell";

interface CodeCellProps {
  cell: Cell;
}

export default function CodeCell({ cell }: CodeCellProps) {
  const { updateCellContent } = useActions();
  const dispatch = useTypedDispatch();

  const bundle = useTypedSelector((state) => state.bundles[cell.id]);
  const cumulativeCode = useCumulativeCode(cell.id);
  useEffect(() => {
    if (!bundle) {
      dispatch(createBundle({ id: cell.id, input: cumulativeCode }));
      return;
    }
    const timer = setTimeout(async () => {
      dispatch(createBundle({ id: cell.id, input: cumulativeCode }));
    }, 750);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cumulativeCode, cell.id, createBundle]);

  function handleChange(value: string, err: string) {
    if (err) {
      console.error(err);
    } else {
      updateCellContent({ cellId: cell.id, content: value });
    }
  }

  return (
    <Resizable direction='vertical'>
      {/* The complete div below is getting a resizer which expands/shriks Vertically */}
      <div style={{ height: "100%", display: "flex", flexDirection: "row" }}>
        <Resizable direction='horizontal'>
          {/* Code editor is only getting resized */}
          <CodeEditor value={cell.content} handleChange={handleChange} />
        </Resizable>
        <div className='progress-wrapper'>
          {!bundle || bundle.loading ? (
            <div className='progress-cover'>
              <progress
                className='progress is-small is-primary'
                max='100'></progress>
            </div>
          ) : (
            <Preview code={bundle.compiledCode} err={bundle.error} />
          )}
        </div>
      </div>
    </Resizable>
  );
}
