import Editor, { Monaco } from "@monaco-editor/react";
import monaco from "monaco-editor";
import prettier from "prettier/standalone";
import babelPlugin from "prettier/plugins/babel";
import estreePlugin from "prettier/plugins/estree";
import typeScriptPlugin from "prettier/plugins/typescript";
import styles from "./code-editor.module.css";
import { useCallback } from "react";

interface CodeEditorProps {
  initialValue?: string;
  value: string;
  handleChange(value: string | undefined): void;
}

// This function is used to active the JSX syntax highlighting
const activateMonacoJSXHighlighter = async (
  monacoEditor: monaco.editor.IStandaloneCodeEditor,
  monaco: Monaco
) => {
  const { default: traverse } = await import("@babel/traverse");
  const { parse } = await import("@babel/parser");
  const { default: MonacoJSXHighlighter } = await import(
    "monaco-jsx-highlighter"
  );

  const monacoJSXHighlighter = new MonacoJSXHighlighter(
    monaco,
    parse,
    traverse,
    monacoEditor
  );

  monacoJSXHighlighter.highlightOnDidChangeModelContent();
  monacoJSXHighlighter.addJSXCommentCommand();

  return {
    monacoJSXHighlighter,
  };
};

export default function CodeEditor({
  initialValue,
  value,
  handleChange,
}: CodeEditorProps) {
  // We need to listen to the editorDidMount event
  // to setup the JSX syntax highlighting
  const handleEditorDidMount = useCallback(
    async (
      monacoEditor: monaco.editor.IStandaloneCodeEditor,
      monaco: Monaco
    ) => {
      activateMonacoJSXHighlighter(monacoEditor, monaco);
    },
    []
  );

  async function onFormatClick() {
    const formattedCode = await prettier.format(value, {
      parser: "babel-ts",
      plugins: [typeScriptPlugin, babelPlugin, estreePlugin],
      useTabs: false,
      semi: true,
      singleQuote: true,
    });
    handleChange(formattedCode);
  }

  return (
    <div className={styles.editor_wrapper}>
      <button
        className={"button button-format is-primary is-small"}
        onClick={onFormatClick}>
        Format
      </button>
      <Editor
        onChange={(value) => handleChange(value)}
        onMount={handleEditorDidMount}
        defaultValue={initialValue}
        value={value}
        theme='vs-dark'
        language='typescript'
        height='500px'
        options={{
          wordWrap: "on",
          minimap: { enabled: false },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
        }}
      />
    </div>
  );
}
