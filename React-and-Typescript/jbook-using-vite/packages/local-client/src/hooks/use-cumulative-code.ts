import { useTypedSelector } from "./use-Typed-selector";

export default function useCumulativeCode(cellId: string) {
  return useTypedSelector((state) => {
    const { data, order } = state.cells;
    const orderedCells = order.map((id) => data[id]);

    const showFunc = `
          import _React from 'react';
          import { createRoot as cR} from 'react-dom/client';
          var show = (value)=>{
            const root = document.querySelector("#root");
            if(typeof value === 'object') {
              if (value.$$typeof && value.props) {
                cR(root).render(value)
              } else {
                  root.innerHTML = JSON.stringify(value);
              }
            } else {
              root.innerHTML = value;
            }
          }
        `;
    const cumulativeCode = [];
    const showFuncNoop = "var show= ()=>{}";
    for (let c of orderedCells) {
      if (c.type === "code") {
        if (c.id === cellId) {
          cumulativeCode.push(showFunc);
        } else {
          cumulativeCode.push(showFuncNoop);
        }
        cumulativeCode.push(c.content);
      }
      if (c.id === cellId) {
        break;
      }
    }
    return cumulativeCode;
  }).join("\n");
}
