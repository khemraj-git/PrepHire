import Editor from "@monaco-editor/react";

function CodeEditor({
  code,
  setCode,
  selectedLanguage,
}) {
  const languageMap = {
    Java: "java",
    "C++": "cpp",
    Python: "python",
    JavaScript: "javascript",
  };

  return (
    <div className="p-5">
      <div className="overflow-hidden rounded-xl border border-slate-200">
        <Editor
          height="650px"
          language={languageMap[selectedLanguage]}
          value={code}
          onChange={(value) => setCode(value || "")}
          theme="vs-dark"
          options={{
            fontSize: 15,
            minimap: {
              enabled: false,
            },
            scrollBeyondLastLine: false,
            automaticLayout: true,
            wordWrap: "on",
            tabSize: 4,
            roundedSelection: false,
            renderLineHighlight: "all",
            cursorBlinking: "smooth",
            smoothScrolling: true,
            padding: {
              top: 18,
              bottom: 18,
            },
          }}
        />
      </div>
    </div>
  );
}

export default CodeEditor;