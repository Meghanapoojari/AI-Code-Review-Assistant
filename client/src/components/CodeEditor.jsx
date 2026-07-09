import Editor from "@monaco-editor/react";

function CodeEditor({ code, setCode, language ,theme}) {
  return (
    <div className="editor-section">
      <Editor
    height="550px"
    language={language}
    theme={theme === "light" ? "vs-light" : "vs-dark"}
    value={code}
    onChange={(value) => setCode(value || "")}
/>
    </div>
  );
}

export default CodeEditor;