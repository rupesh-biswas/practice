import Editor, { OnMount } from "@monaco-editor/react";
import prettier from "prettier/standalone";
import babelPlugin from "prettier/plugins/babel";
import estreePlugin from "prettier/plugins/estree";
import typeScriptPlugin from "prettier/plugins/typescript";
import traverse from "@babel/traverse";
import { parse } from "@babel/parser";
import MonacoJSXHighlighter from "monaco-jsx-highlighter";
import cx from "classnames";
import styles from "./code-editor.module.css";
import "./syntax.css";

interface CodeEditorProps {
  initialValue?: string;
  value: string;
  handleChange(value: string, err: string): void;
}

export default function CodeEditor({
  initialValue,
  value,
  handleChange,
}: CodeEditorProps) {
  const onEditorDidMount: OnMount = (editor, monaco) => {
    const highlightedText = new MonacoJSXHighlighter(
      monaco,
      parse,
      traverse,
      editor
    );

    highlightedText.highlightOnDidChangeModelContent(100);
    highlightedText.addJSXCommentCommand();
  };

  async function onFormatClick() {
    try {
      const formattedCode = await prettier.format(value, {
        parser: "babel-ts",
        plugins: [typeScriptPlugin, babelPlugin, estreePlugin],
        useTabs: false,
        semi: true,
        singleQuote: true,
      });
      handleChange(formattedCode, "");
    } catch (err) {
      if (err instanceof Error) {
        handleChange("", err.message);
      } else {
        throw err;
      }
    }
  }

  return (
    <div className={cx(styles.editor_wrapper, "editor-wrapper")}>
      <button
        className={"button button-format is-primary is-small"}
        onClick={onFormatClick}>
        Format
      </button>
      <Editor
        onChange={(value) =>
          value ? handleChange(value, "") : handleChange("", "")
        }
        onMount={onEditorDidMount}
        defaultValue={initialValue}
        value={value}
        theme='vs-dark'
        language='javascript'
        height='100%'
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
