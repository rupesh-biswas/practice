import { useEffect, useState } from "react";
import { ResizableBox, ResizableBoxProps } from "react-resizable";
import "./resizable.css";

interface ResizableProps {
  children?: React.ReactNode;
  /**
   * "vertical" to expand and shrink the divider vertically (south divider) and vice versa for "horizontal" (east divider)
   * It is providing a way to resize the childern (a single element).
   */
  direction: "horizontal" | "vertical";
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  let resizableProps: ResizableBoxProps;
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [width, setWidth] = useState(window.innerWidth * 0.75);

  // Handling ResizeObserver loop error. Will handle it in a good way in future if found something
  useEffect(() => {
    const resizeErrorListener = (e: ErrorEvent) => {
      //   prettier-ignore
      if (e.message ==="ResizeObserver loop completed with undelivered notifications.") {
              const resizeObserverErrDiv = document.getElementById("webpack-dev-server-client-overlay-div");
              const resizeObserverErr = document.getElementById("webpack-dev-server-client-overlay");
              if (resizeObserverErr) {
                resizeObserverErr.setAttribute("style", "display: none");
              }
              if (resizeObserverErrDiv) {
                resizeObserverErrDiv.setAttribute("style", "display: none");
              }
            }
    };
    window.addEventListener("error", resizeErrorListener);

    return () => window.removeEventListener("error", resizeErrorListener);
  }, []);

  useEffect(() => {
    let timer: any;
    const listener = () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        setInnerHeight(window.innerHeight);
        setInnerWidth(window.innerWidth);
        if (window.innerWidth * 0.75 < width) {
          setWidth(window.innerWidth * 0.75);
        }
      }, 100);
    };
    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, [width]);

  if (direction === "horizontal") {
    resizableProps = {
      className: "resize-horizontal",
      minConstraints: [innerWidth * 0.2, Infinity],
      maxConstraints: [innerWidth * 0.75, Infinity],
      height: Infinity,
      width,
      resizeHandles: ["e"],
      onResizeStop: (event, data) => {
        setWidth(data.size.width);
      },
    };
  } else {
    resizableProps = {
      minConstraints: [Infinity, 24],
      maxConstraints: [Infinity, innerHeight * 0.9],
      height: 300,
      width: Infinity,
      resizeHandles: ["s"],
    };
  }

  return <ResizableBox {...resizableProps}>{children}</ResizableBox>;
};

export default Resizable;
