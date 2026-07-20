import {
  FiHome,
  FiBookOpen,
  FiCode,
  FiMessageSquare,
  FiFileText,
  FiBarChart2,
  FiUser,
} from "react-icons/fi";

const dashboardLinks = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: FiHome,
  },
  {
    name: "Question Bank",
    path: "/dashboard/question-bank",
    icon: FiBookOpen,
  },
  {
    name: "Coding Practice",
    path: "/dashboard/coding-practice/two-sum",
    icon: FiCode,
  },
  {
    name: "Mock Interview",
    path: "/dashboard/mock-interview",
    icon: FiMessageSquare,
  },
  {
    name: "Resume Review",
    path: "/dashboard/resume-review",
    icon: FiFileText,
  },
  {
    name: "Analytics",
    path: "/dashboard/analytics",
    icon: FiBarChart2,
  },
  {
    name: "Profile",
    path: "/dashboard/profile",
    icon: FiUser,
  },
];

export default dashboardLinks;