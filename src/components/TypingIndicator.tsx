import React from 'react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 flex-shrink-0">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a4 4 0 0 1 4 4v4a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z"></path>
          <path d="M18 6h.01"></path>
          <path d="M6 6h.01"></path>
          <path d="M12 18.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"></path>
          <path d="M20 13.5A4 4 0 0 0 16 18"></path>
        </svg>
      </div>
      
      <div className="px-4 py-3 rounded-lg bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-tl-none">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;