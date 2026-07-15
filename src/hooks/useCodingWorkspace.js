import { useState } from "react";

import {
  languages,
  starterCode,
} from "../constants/codingLanguages";

function useCodingWorkspace(question) {
  const [selectedLanguage, setSelectedLanguage] = useState("Java");

  const [code, setCode] = useState(starterCode.Java);

  const [output, setOutput] = useState("");

  const [isRunning, setIsRunning] = useState(false);

  const [activeTab, setActiveTab] = useState("testcases");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setCode(starterCode[language]);
  };

  const handleReset = () => {
    setCode(starterCode[selectedLanguage]);
    setOutput("");
  };

  const handleRun = () => {
    setIsRunning(true);

    setOutput("Running your solution...");

    setTimeout(() => {
      setOutput(
        `Execution Successful ✅

Expected Output:
${question.example.output}`
      );

      setIsRunning(false);
    }, 1000);
  };

  const handleSubmit = () => {
    setOutput(
      `Accepted ✅

Time Taken:
${question.time}

Runtime:
24 ms

Memory:
41.2 MB`
    );
  };

  return {
    languages,
    starterCode,

    selectedLanguage,
    code,
    output,
    isRunning,
    activeTab,

    setCode,
    setOutput,
    setActiveTab,

    handleLanguageChange,
    handleReset,
    handleRun,
    handleSubmit,
  };
}

export default useCodingWorkspace;