"use client";

interface SuggestedQuestionsProps {
  onQuestionClick: (question: string) => void;
}

const suggestions = [
  {
    icon: "👋",
    text: "Who is Albert?",
    category: "About",
  },
  {
    icon: "💼",
    text: "What's Albert's experience?",
    category: "Career",
  },
  {
    icon: "🚀",
    text: "Tell me about PersonaKit",
    category: "Projects",
  },
  {
    icon: "⚡",
    text: "What are Albert's key achievements?",
    category: "Impact",
  },
  {
    icon: "🛠️",
    text: "What technologies does Albert work with?",
    category: "Skills",
  },
  {
    icon: "📬",
    text: "How can I contact Albert?",
    category: "Contact",
  },
];

export function SuggestedQuestions({ onQuestionClick }: SuggestedQuestionsProps) {
  return (
    <div className="p-4 space-y-3">
      <div className="text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Ask me anything about Albert's experience, skills, or projects
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onQuestionClick(suggestion.text)}
            className="group relative p-3 text-left rounded-lg border border-gray-200 dark:border-gray-700
                     hover:border-blue-500 dark:hover:border-blue-400
                     hover:bg-blue-50 dark:hover:bg-blue-900/20
                     transition-all duration-200 ease-in-out
                     hover:shadow-md hover:-translate-y-0.5
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <div className="flex items-start gap-2">
              <span className="text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                {suggestion.icon}
              </span>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide block">
                  {suggestion.category}
                </span>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mt-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {suggestion.text}
                </p>
              </div>
              <svg
                className="w-4 h-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
