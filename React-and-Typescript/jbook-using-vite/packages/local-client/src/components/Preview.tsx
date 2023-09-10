import { useEffect, useRef } from "react";
import "./preview.css";

interface PreviewProps {
  code: string;
  err: string;
}

const iframeHTML = `
    <html>
      <head></head>
      <body>
        <div id="root"></div>
        <script>
          const handleError = (err)=>{
            const root = document.querySelector("#root");
                root.innerHTML = "<div style='color:red'> <h4>Runtime Error</h4>" + err + "</div>"
                console.error(err);
          };

          window.addEventListener('error',(event)=>{
            event.preventDefault();
            handleError(event.error);
          })

          window.addEventListener('message',(event)=>{
            try {
              eval(event.data);
            } catch (err) {
              handleError(err);
            }
          }, false)
        </script>
      </body>
    </html>
  `;

export default function Preview({ code, err }: PreviewProps) {
  const iframeRef = useRef<any>();

  useEffect(() => {
    iframeRef.current.srcdoc = iframeHTML;
    setTimeout(() => {
      iframeRef.current.contentWindow.postMessage(code, "*");
    }, 50);
  }, [code]);

  return (
    <div className='preview-wrapper'>
      <iframe
        ref={iframeRef}
        title='codePreview'
        sandbox='allow-scripts'
        srcDoc={iframeHTML}
      />
      {err && <div className='preview-error'>{err}</div>}
    </div>
  );
}
