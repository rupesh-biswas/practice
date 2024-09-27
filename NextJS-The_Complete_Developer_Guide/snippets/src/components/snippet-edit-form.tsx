"use client";

import * as actions from "@/actions";
import { Editor } from "@monaco-editor/react";
import { Snippet } from "@prisma/client";
import { useState } from "react";

interface SnippetEditFormProps {
  snippet: Snippet;
}
export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);

  function handleChange(value: string = "") {
    console.log(value);
    setCode(value);
  }

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

  return (
    <div>
      <Editor
        height={"40vh"}
        theme="vs-dark"
        language="javascript"
        defaultValue={code}
        options={{ minimap: { enabled: false } }}
        onChange={handleChange}
      />
      <form action={editSnippetAction}>
        <button className="rounded border p-2">Save</button>
      </form>
    </div>
  );
}
