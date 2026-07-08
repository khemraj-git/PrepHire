function FloatingCard({
  title,
  subtitle,
  value,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-72 border border-slate-200">

      <h4 className="text-slate-500 text-sm">

        {title}

      </h4>

      <h2 className="text-3xl font-bold mt-3">

        {value}

      </h2>

      <p className="text-slate-600 mt-2">

        {subtitle}

      </p>

    </div>
  );
}

export default FloatingCard;