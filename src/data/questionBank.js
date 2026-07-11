export const categories = [
  {
    id: 1,
    title: "Frontend",
    slug: "frontend",
    icon: "💻",
    questions: 42,
    topics: ["React", "JavaScript", "CSS"],
  },
  {
    id: 2,
    title: "Backend",
    slug: "backend",
    icon: "🛠️",
    questions: 36,
    topics: ["Node.js", "Express", "REST API"],
  },
  {
    id: 3,
    title: "DSA",
    slug: "dsa",
    icon: "📚",
    questions: 58,
    topics: ["Arrays", "Trees", "Graphs"],
  },
  {
    id: 4,
    title: "Database",
    slug: "database",
    icon: "🗄️",
    questions: 28,
    topics: ["SQL", "PostgreSQL", "Joins"],
  },
  {
    id: 5,
    title: "System Design",
    slug: "system-design",
    icon: "🏗️",
    questions: 20,
    topics: ["Scalability", "Caching", "Load Balancing"],
  },
];

export const companies = [
  "Google",
  "Amazon",
  "Microsoft",
  "Meta",
  "Netflix",
  "Adobe",
  "Flipkart",
  "TCS",
];

export const allQuestions = [
  {
    id: 1,
    slug: "two-sum",

    title: "Two Sum",
    shortDescription:
      "Find two numbers in an array whose sum equals the target value.",

    description:
      "Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to the target. You may assume that each input has exactly one solution.",

    topic: "Arrays",
    category: "DSA",

    difficulty: "Easy",

    company: ["Amazon", "Google", "Microsoft"],

    time: "15 mins",

    featured: true,
    recent: true,

    type: "Coding",

    example: {
      input: "nums = [2,7,11,15], target = 9",
      output: "[0,1]",
      explanation: "nums[0] + nums[1] = 9",
    },

    constraints: [
      "2 <= nums.length <= 10⁴",
      "-10⁹ <= nums[i] <= 10⁹",
      "Exactly one solution exists.",
    ],

    hints: [
      "Think about using a HashMap.",
      "Can you solve it in O(n)?",
    ],
  },

  {
    id: 2,
    slug: "reverse-linked-list",

    title: "Reverse Linked List",
    shortDescription:
      "Reverse a singly linked list efficiently.",

    description:
      "Given the head of a singly linked list, reverse the list and return the reversed head.",

    topic: "Linked List",
    category: "DSA",

    difficulty: "Easy",

    company: ["Meta", "Amazon"],

    time: "20 mins",

    featured: true,
    recent: false,

    type: "Coding",

    example: {
      input: "1 → 2 → 3 → 4 → 5",
      output: "5 → 4 → 3 → 2 → 1",
      explanation: "Reverse every pointer.",
    },

    constraints: [
      "Number of nodes <= 5000",
    ],

    hints: [
      "Use three pointers.",
      "Previous, Current, Next.",
    ],
  },
  {
    id: 3,
    slug: "Merge-Intervals",
    title: "Merge Intervals",
    shortDescription: "merge the intervals",
    description: "merge the intervals in the array",
    
    topic: "Intervals",
    category: "DSA",
    difficulty: "Medium",
    company: ["Google", "Adobe"],
    time: "30 mins",
    featured: true,
    recent: true,
    type: "Coding",
        example: {
      input: "1 → 2 → 3 → 4 → 5",
      output: "5 → 4 → 3 → 2 → 1",
      explanation: "Reverse every pointer.",
    },

    constraints: [
      "Number of nodes <= 5000",
    ],

    hints: [
      "Use three pointers.",
      "Previous, Current, Next.",
    ],
  },
  {
    id: 4,
    slug: "Design-REST-APIs",
    title: "Design REST APIs",
    shortDescription: "merge the intervals",
    description: "merge the intervals in the array",
    topic: "Express.js",
    category: "Backend",
    difficulty: "Medium",
    company: ["Amazon", "Flipkart"],
    time: "25 mins",
    featured: false,
    recent: true,
    type: "Theory",
        example: {
      input: "1 → 2 → 3 → 4 → 5",
      output: "5 → 4 → 3 → 2 → 1",
      explanation: "Reverse every pointer.",
    },

    constraints: [
      "Number of nodes <= 5000",
    ],

    hints: [
      "Use three pointers.",
      "Previous, Current, Next.",
    ],
  },
  {
    id: 5,
    slug: "React-Virtual-DOM",
    title: "React Virtual DOM",
    shortDescription: "merge the intervals",
    description: "merge the intervals in the array",
    topic: "React",
    category: "Frontend",
    difficulty: "Easy",
    company: ["Meta", "Netflix"],
    time: "15 mins",
    featured: true,
    recent: false,
    type: "Theory",
        example: {
      input: "1 → 2 → 3 → 4 → 5",
      output: "5 → 4 → 3 → 2 → 1",
      explanation: "Reverse every pointer.",
    },

    constraints: [
      "Number of nodes <= 5000",
    ],

    hints: [
      "Use three pointers.",
      "Previous, Current, Next.",
    ],
  },
  {
    id: 6,
    slug: "Authentication-using-JWT",
    title: "Authentication using JWT",
    shortDescription: "merge the intervals",
    description: "merge the intervals in the array",
    topic: "Authentication",
    category: "Backend",
    difficulty: "Medium",
    company: ["Microsoft", "Adobe"],
    time: "25 mins",
    featured: false,
    recent: true,
    type: "Theory",
        example: {
      input: "1 → 2 → 3 → 4 → 5",
      output: "5 → 4 → 3 → 2 → 1",
      explanation: "Reverse every pointer.",
    },

    constraints: [
      "Number of nodes <= 5000",
    ],

    hints: [
      "Use three pointers.",
      "Previous, Current, Next.",
    ],
  },
  {
    id: 7,
    slug: "SQL-Joins",
    title: "SQL Joins",
    shortDescription: "merge the intervals",
    description: "merge the intervals in the array",
    topic: "SQL",
    category: "Database",
    difficulty: "Easy",
    company: ["TCS", "Amazon"],
    time: "20 mins",
    featured: false,
    recent: true,
    type: "Theory",
        example: {
      input: "1 → 2 → 3 → 4 → 5",
      output: "5 → 4 → 3 → 2 → 1",
      explanation: "Reverse every pointer.",
    },

    constraints: [
      "Number of nodes <= 5000",
    ],

    hints: [
      "Use three pointers.",
      "Previous, Current, Next.",
    ],
  },
  {
    id: 8,
    slug: "LRU-Cache",
    title: "LRU Cache",
    shortDescription: "merge the intervals",
    description: "merge the intervals in the array",
    topic: "Design",
    category: "DSA",
    difficulty: "Hard",
    company: ["Google", "Meta"],
    time: "45 mins",
    featured: true,
    recent: false,
    type: "Coding",
        example: {
      input: "1 → 2 → 3 → 4 → 5",
      output: "5 → 4 → 3 → 2 → 1",
      explanation: "Reverse every pointer.",
    },

    constraints: [
      "Number of nodes <= 5000",
    ],

    hints: [
      "Use three pointers.",
      "Previous, Current, Next.",
    ],
  },
  {
    id: 9,
    slug: "Load-Balamcer-Basics",
    title: "Load Balancer Basics",
    shortDescription: "merge the intervals",
    description: "merge the intervals in the array",
    topic: "Scalability",
    category: "System Design",
    difficulty: "Medium",
    company: ["Netflix", "Google"],
    time: "30 mins",
    featured: false,
    recent: true,
    type: "Theory",
        example: {
      input: "1 → 2 → 3 → 4 → 5",
      output: "5 → 4 → 3 → 2 → 1",
      explanation: "Reverse every pointer.",
    },

    constraints: [
      "Number of nodes <= 5000",
    ],

    hints: [
      "Use three pointers.",
      "Previous, Current, Next.",
    ],
  },
  {
    id: 10,
    slug: "Flexbox-vs-Grid",
    title: "Flexbox vs Grid",
    shortDescription: "merge the intervals",
    description: "merge the intervals in the array",
    topic: "CSS",
    category: "Frontend",
    difficulty: "Easy",
    company: ["Adobe", "Flipkart"],
    time: "10 mins",
    featured: false,
    recent: true,
    type: "Theory",
        example: {
      input: "1 → 2 → 3 → 4 → 5",
      output: "5 → 4 → 3 → 2 → 1",
      explanation: "Reverse every pointer.",
    },

    constraints: [
      "Number of nodes <= 5000",
    ],

    hints: [
      "Use three pointers.",
      "Previous, Current, Next.",
    ],
  },


];  


export const featuredQuestions = allQuestions.filter(
  (question) => question.featured
);

export const recentQuestions = allQuestions.filter(
  (question) => question.recent
);

export const popularCompanies = companies;