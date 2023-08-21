import * as esbuild from "esbuild-wasm";
import { useEffect, useRef, useState } from "react";
import { unpkgPathPlugin } from "./plugins/unkg-path-plugin";
import { fetchPlugin } from "./plugins/fetch-plugin";
import CodeEditor from "./components/code-editor";

export default function App() {
  const [input, setInput] = useState("");
  const ref = useRef<esbuild.Service>();
  const iframeRef = useRef<any>();

  async function startService() {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: "https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm",
    });
  }

  useEffect(() => {
    startService();
  }, []);

  async function onClick() {
    if (!ref.current) {
      return;
    }

    iframeRef.current.srcdoc = iframeHTML;

    const result = await ref.current.build({
      entryPoints: ["index.ts"],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(input)],
      define: {
        global: "window",
        "process.env.NODE_ENV": '"production"',
      },
    });

    iframeRef.current.contentWindow.postMessage(
      result.outputFiles[0].text,
      "*"
    );
  }

  const iframeHTML = `
    <html>
      <head></head>
      <body>
        <div id="root"></div>
        <script>
          window.addEventListener('message',(event)=>{
            try {
              eval(event.data);
            } catch (err) {
              const root = document.querySelector("#root");
              root.innerHTML = "<div style='color:red'> <h4>Runtime Error</h4>" + err + "</div>"
              console.error(err);
            }
          }, false)
        </script>
      </body>
    </html>
  `;

  return (
    <div>
      <CodeEditor
        value={input}
        handleChange={(value: string | undefined) =>
          value ? setInput(value) : setInput("")
        }
      />
      <textarea
        className='textarea is-medium'
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <iframe
        ref={iframeRef}
        title='codePreview'
        sandbox='allow-scripts'
        srcDoc={iframeHTML}
      />
    </div>
  );
}
