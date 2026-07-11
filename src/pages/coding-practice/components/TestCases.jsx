function TestCases({ example }) {
  return (
    <div className="space-y-5 p-5">

      <div>

        <p className="text-sm font-semibold text-slate-700">
          Input
        </p>

        <div className="mt-2 rounded-lg bg-slate-100 p-3 font-mono text-sm">
          {example.input}
        </div>

      </div>

      <div>

        <p className="text-sm font-semibold text-slate-700">
          Expected Output
        </p>

        <div className="mt-2 rounded-lg bg-slate-100 p-3 font-mono text-sm">
          {example.output}
        </div>

      </div>

    </div>
  );
}

export default TestCases;