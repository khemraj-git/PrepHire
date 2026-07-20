export const interviewStats = {
  completed: 24,
  averageScore: 86,
  totalTime: 18.5,
  streak: 7,
};

export const interviewCategories = [
  {
    id: 1,
    slug: "frontend",
    title: "Frontend Developer",
    description: "Practice React, JavaScript, HTML, CSS and frontend fundamentals.",
    icon: "💻",
    difficulty: "Intermediate",
    duration: "30 mins",
    questions: 10,
    completed: 8,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    slug: "backend",
    title: "Backend Developer",
    description: "Node.js, Express, APIs, Databases and System Design basics.",
    icon: "⚙️",
    difficulty: "Intermediate",
    duration: "35 mins",
    questions: 12,
    completed: 5,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    slug: "full-stack",
    title: "Full Stack Developer",
    description: "Complete interview covering frontend and backend topics.",
    icon: "🚀",
    difficulty: "Advanced",
    duration: "45 mins",
    questions: 15,
    completed: 2,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 4,
    slug: "dsa",
    title: "DSA Interview",
    description: "Arrays, Trees, Graphs, DP and problem-solving questions.",
    icon: "🧩",
    difficulty: "Hard",
    duration: "40 mins",
    questions: 10,
    completed: 6,
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 5,
    slug: "hr",
    title: "HR Interview",
    description: "Behavioral, communication and personality questions.",
    icon: "🤝",
    difficulty: "Easy",
    duration: "20 mins",
    questions: 8,
    completed: 10,
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: 6,
    slug: "react",
    title: "React Interview",
    description: "Hooks, Routing, State Management and React best practices.",
    icon: "⚛️",
    difficulty: "Intermediate",
    duration: "30 mins",
    questions: 10,
    completed: 4,
    color: "bg-cyan-100 text-cyan-600",
  },
];

export const recentInterviews = [
  {
    id: 1,
    role: "Frontend Developer",
    score: 92,
    date: "2 days ago",
    duration: "28 mins",
  },
  {
    id: 2,
    role: "React Interview",
    score: 88,
    date: "4 days ago",
    duration: "25 mins",
  },
  {
    id: 3,
    role: "HR Interview",
    score: 95,
    date: "1 week ago",
    duration: "18 mins",
  },
];

export const continueInterview = {
  role: "Frontend Developer",
  difficulty: "Intermediate",
  duration: "30 Minutes",
  language: "JavaScript",

  questions: 10,

  currentQuestion: 4,
  totalQuestions: 10,
};

export const recommendedInterviews = interviewCategories.slice(0, 3);