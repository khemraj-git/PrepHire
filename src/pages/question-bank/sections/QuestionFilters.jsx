import { FiSearch } from "react-icons/fi";

function QuestionFilters({
  search,
  setSearch,
  difficulty,
  setDifficulty,
  category,
  setCategory,
}) {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Question Bank
        </h1>

        <p className="mt-2 text-slate-500">
          Browse interview questions by category, difficulty and company.
        </p>
      </div>

      <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-4">
        <div className="relative lg:col-span-2">
          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions..."
            className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500"
          />
        </div>

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
        >
          <option value="All">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
        >
          <option value="All">All Categories</option>
          <option value="DSA">DSA</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Database">Database</option>
          <option value="System Design">System Design</option>
        </select>
      </div>
    </section>
  );
}

export default QuestionFilters;