function LanguageSelector({
  languages,
  selectedLanguage,
  setSelectedLanguage,
  starterCode,
  setCode,
}) {
  const handleChange = (e) => {
    const language = e.target.value;

    setSelectedLanguage(language);
    setCode(starterCode[language]);
  };

  return (
    <select
      value={selectedLanguage}
      onChange={handleChange}
      className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium outline-none transition focus:border-blue-500"
    >
      {languages.map((language) => (
        <option key={language}>
          {language}
        </option>
      ))}
    </select>
  );
}

export default LanguageSelector;