function ActionButtons({
  onReset,
  onRun,
  onSubmit,
  isRunning,
}) {
  return (
    <div className="flex justify-end gap-3 border-t border-slate-200 p-5">

      <button
        onClick={onReset}
        className="rounded-lg border border-slate-300 px-5 py-2 transition hover:bg-slate-100"
      >
        Reset
      </button>

      <button
        onClick={onRun}
        disabled={isRunning}
        className="rounded-lg bg-slate-800 px-5 py-2 text-white transition hover:bg-slate-900 disabled:opacity-60"
      >
        {isRunning ? "Running..." : "Run Code"}
      </button>

      <button
        onClick={onSubmit}
        className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
      >
        Submit
      </button>

    </div>
  );
}

export default ActionButtons;