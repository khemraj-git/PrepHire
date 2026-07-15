import { useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import { FiArrowLeft, FiClock } from "react-icons/fi";

import { allQuestions } from "../../data/questionBank";
import {languages,starterCode,} from "../../constants/codingLanguages";
import DifficultyBadge from "../question-bank/components/DifficultyBadge";
import CompanyChip from "../question-bank/components/CompanyChip";

import Timer from "./components/Timer";
import CodeEditor from "./components/CodeEditor";
import LanguageSelector from "./components/LanguageSelector";
import ActionButtons from "./components/ActionButtons";
import TestCases from "./components/TestCases";
import OutputConsole from "./components/OutputConsole";

import useCodingWorkspace from "../../hooks/useCodingWorkspace";


function CodingPractice() {
    const { slug } = useParams();


    // const [selectedLanguage, setSelectedLanguage] = useState("Java");

    // const [code, setCode] = useState(starterCode.Java); 
    
    // const [output, setOutput] = useState("");

    // const [isRunning, setIsRunning] = useState(false);

    // const [activeTab, setActiveTab] = useState("testcases");

    const question = useMemo(
        () => allQuestions.find((item) => item.slug === slug),
        [slug]
    );

    if (!question) {
        return <Navigate to="/dashboard/question-bank" replace />;
    }

    const {
      languages,
      starterCode,

      selectedLanguage,
      code,
      output,
      isRunning,
      activeTab,

      setCode,
      setActiveTab,

      handleLanguageChange,
      handleReset,
      handleRun,
      handleSubmit,
    } = useCodingWorkspace(question);

    // const handleReset = () => {
    // setCode(starterCode[selectedLanguage]);
    // setOutput("");
    // };

    // const handleRun = () => {
    // setIsRunning(true);

    // setOutput("Running your solution...");

    // setTimeout(() => {
    //     setOutput(
    //     `Execution Successful ✅\n\nExpected Output:\n${question.example.output}`
    //     );

    //     setIsRunning(false);
    // }, 1000);
    // };

    // const handleSubmit = () => {
    // setOutput(
    //     `Accepted ✅

    // Time Taken:
    // ${question.time}

    // Runtime:
    // 24 ms

    // Memory:
    // 41.2 MB`
    // );
    // };

  return (
    <div className="min-h-[calc(100vh-80px)] p-6">
      <div className="grid gap-6 xl:grid-cols-[40%_60%]">
        {/* Left Panel */}
        <section className="flex max-h-[calc(100vh-130px)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-6">
            <Link
              to={`/dashboard/question-bank/${question.category}/${question.slug}`}
              className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              <FiArrowLeft />
              Back to Question
            </Link>

            <h1 className="text-3xl font-bold text-slate-900">
              {question.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <DifficultyBadge difficulty={question.difficulty} />

              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                {question.topic}
              </span>

              <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                <FiClock />
                {question.time}
              </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {question.company.map((company) => (
                <CompanyChip key={company} company={company} />
              ))}
            </div>
          </div>

          <div className="flex-1 space-y-8 overflow-y-auto p-6">
            {/* Description */}
            <section>
              <h2 className="mb-3 text-lg font-semibold text-slate-900">
                Description
              </h2>

              <p className="leading-7 text-slate-600">
                {question.description}
              </p>
            </section>

            {/* Example */}
            <section>
            <h2 className="mb-3 text-lg font-semibold text-slate-900">
                Example
            </h2>

            <div className="rounded-xl bg-slate-900 p-5 text-sm text-slate-100 space-y-4">
                <div>
                <p className="font-semibold text-blue-300">Input</p>
                <p>{question.example.input}</p>
                </div>

                <div>
                <p className="font-semibold text-green-300">Output</p>
                <p>{question.example.output}</p>
                </div>

                <div>
                <p className="font-semibold text-yellow-300">Explanation</p>
                <p>{question.example.explanation}</p>
                </div>
            </div>
            </section>

            {/* Constraints */}
            <section>
              <h2 className="mb-3 text-lg font-semibold text-slate-900">
                Constraints
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-slate-600">
                {question.constraints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Hints */}
            <section>
              <h2 className="mb-3 text-lg font-semibold text-slate-900">
                Hints
              </h2>

              <ul className="space-y-3">
                {question.hints.map((hint, index) => (
                  <li
                    key={index}
                    className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-slate-700"
                  >
                    💡 {hint}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>

{/* right panel */}
        <section className="flex max-h-[calc(100vh-130px)] flex-col overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-sm">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-200 p-5">

            <div>

            <h2 className="text-xl font-semibold text-slate-900">
                Coding Workspace
            </h2>

            <p className="mt-1 text-sm text-slate-500">
                Write your solution below.
            </p>

            </div>

            <div className="flex items-center gap-3">

            <LanguageSelector
              languages={languages}
              selectedLanguage={selectedLanguage}
              onLanguageChange={handleLanguageChange}
            />

            <Timer />

            </div>

        </div>

        {/* Editor */}

        <CodeEditor
        code={code}
        setCode={setCode}
        selectedLanguage={selectedLanguage}
        />

        {/* Footer */}

        {/* Bottom Panel */}

        <div className="border-t border-slate-200">

        {/* Tabs */}

        <div className="flex border-b border-slate-200">

            <button
            onClick={() => setActiveTab("testcases")}
            className={`px-6 py-3 text-sm font-semibold transition ${
                activeTab === "testcases"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-slate-500 hover:text-slate-900"
            }`}
            >
            Test Cases
            </button>

            <button
            onClick={() => setActiveTab("output")}
            className={`px-6 py-3 text-sm font-semibold transition ${
                activeTab === "output"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-slate-500 hover:text-slate-900"
            }`}
            >
            Output
            </button>

        </div>

        {/* Panel */}

        <div>

            {activeTab === "testcases" ? (
            <TestCases example={question.example} />
            ) : (
            <OutputConsole output={output} />
            )}

        </div>

        <ActionButtons
            onReset={handleReset}
            onRun={handleRun}
            onSubmit={handleSubmit}
            isRunning={isRunning}
        />

        </div>

        </section>
      </div>
    </div>
  );
}

export default CodingPractice;