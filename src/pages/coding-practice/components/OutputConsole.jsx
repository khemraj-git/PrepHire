function OutputConsole({ output }) {
  return (
    <div className="p-5">
      <div className="rounded-xl bg-slate-950 p-5 font-mono text-sm text-green-400 whitespace-pre-wrap">
        {output || "Ready to run your solution..."}
      </div>
    </div>
  );
}

export default OutputConsole;