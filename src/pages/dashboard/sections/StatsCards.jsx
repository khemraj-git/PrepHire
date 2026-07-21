import Card from "../../../components/common/Card";




import {
  FiBookOpen,
  FiCode,
  FiMessageSquare,
  FiFileText,
} from "react-icons/fi";



const stats = [
  {
    title: "Questions",
    value: "120",
    subtitle: "Available Questions",
    icon: FiBookOpen,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Coding",
    value: "18",
    subtitle: "Problems Solved",
    icon: FiCode,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Mock Interviews",
    value: "3",
    subtitle: "Completed",
    icon: FiMessageSquare,
    color: "bg-violet-100 text-violet-600",
  },
  {
    title: "Resume Score",
    value: "82%",
    subtitle: "Current Rating",
    icon: FiFileText,
    color: "bg-amber-100 text-amber-600",
  },
];

function StatsCards() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
            <Card
            key={item.title}
            className="p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6"
            >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  {item.title}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {item.subtitle}
                </p>
              </div>

              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl sm:h-12 sm:w-12 ${item.color}`}
              >
                <Icon size={20} />
              </div>
            </div>
          </Card>
        );
      })}
    </section>
  );
}

export default StatsCards;