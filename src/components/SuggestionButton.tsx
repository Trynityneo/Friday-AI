import React from 'react';

interface SuggestionButtonProps {
  text: string;
  onClick: () => void;
}

const SuggestionButton: React.FC<SuggestionButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-full border border-gray-600 hover:bg-gray-700 text-gray-200 text-sm transition-colors"
    >
      {text}
    </button>
  );
};

export default SuggestionButton;
