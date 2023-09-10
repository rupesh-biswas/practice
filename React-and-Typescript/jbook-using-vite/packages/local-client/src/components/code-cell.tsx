import { useEffect } from "react";
import CodeEditor from "./code-editor";
import Preview from "./Preview";
import { Cell } from "../states";
import { useActions } from "../hooks/use-actions";
import Resizable from "./resizable";
import { useTypedSelector } from "../hooks/use-Typed-selector";
import "./code-cell.css";
import useCumulativeCode from "../hooks/use-cumulative-code";

interface CodeCellProps {
  cell: Cell;
}

export default function CodeCell({ cell }: CodeCellProps) {
  const { updateCell, createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundles[cell.id]);
  const cumulativeCode = useCumulativeCode(cell.id);
  useEffect(() => {
    if (!bundle) {
      createBundle(cell.id, cumulativeCode);
      return;
    }
    const timer = setTimeout(async () => {
      createBundle(cell.id, cumulativeCode);
    }, 750);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cumulativeCode, cell.id, createBundle]);

  function handleChange(value: string, err: string) {
    if (err) {
    } else {
      updateCell(cell.id, value);
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
            <Preview code={bundle.code} err={bundle.err} />
          )}
        </div>
      </div>
    </Resizable>
  );
}
