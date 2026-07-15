function LanguageSelector({
  languages,
  selectedLanguage,
  onLanguageChange,
}) {
  return (
    <select
      value={selectedLanguage}
      onChange={(e) => onLanguageChange(e.target.value)}
      className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium outline-none transition focus:border-blue-500"
    >
      {languages.map((language) => (
        <option
          key={language}
          value={language}
        >
          {language}
        </option>
      ))}
    </select>
  );
}

export default LanguageSelector;