import { useMemo, useState } from "react";

import QuestionFilters from "./sections/QuestionFilters";
import PopularCategories from "./sections/PopularCategories";
import FeaturedQuestion from "./sections/FeaturedQuestion";
import RecentQuestions from "./sections/RecentQuestions";
import PopularCompanies from "./sections/PopularCompanies";

import { allQuestions } from "../../data/questionBank";

function QuestionBank() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [company, setCompany] = useState("All");

  const filteredQuestions = useMemo(() => {
    return allQuestions.filter((question) => {
      const matchesSearch =
        question.title.toLowerCase().includes(search.toLowerCase()) ||
        question.topic.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || question.category === category;

      const matchesDifficulty =
        difficulty === "All" || question.difficulty === difficulty;

      const matchesCompany =
        company === "All" || question.company.includes(company);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesDifficulty &&
        matchesCompany
      );
    });
  }, [search, category, difficulty, company]);

  return (
    <div className="space-y-8 p-6">

      <PopularCategories
        selectedCategory={category}
        setSelectedCategory={setCategory}
      />

      <QuestionFilters
        search={search}
        setSearch={setSearch}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        category={category}
        setCategory={setCategory}
      />



      <FeaturedQuestion questions={filteredQuestions} />

      <RecentQuestions questions={filteredQuestions} />

      <PopularCompanies
        selectedCompany={company}
        setSelectedCompany={setCompany}
      />
    </div>
  );
}

export default QuestionBank;