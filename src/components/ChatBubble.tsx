import React from 'react';
import { Message } from '../types';
import { User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import CodeSnippet from './CodeSnippet';

type ChatBubbleProps = {
  message: Message;
};

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const isUser = message.role === 'user';
  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(message.timestamp);

  return (
    <div 
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}
    >
      <div className={`flex max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        <div 
          className={`flex items-center justify-center h-7 w-7 rounded-full flex-shrink-0 ${
            isUser ? 'ml-2 bg-blue-100 text-blue-600' : 'mr-2 bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
          }`}
        >
          {isUser ? <User size={16} /> : 
            <img 
              src="/image/friday.jpg" 
              alt="Friday AI" 
              className="h-4 w-4 rounded-full object-cover" 
            />}
        </div>
        
        <div>
          <div 
            className={`px-3 py-2 rounded-lg text-sm ${
              isUser 
                ? 'bg-blue-500 text-white rounded-tr-none' 
                : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-tl-none'
            }`}
          >
            <div className="whitespace-pre-wrap markdown-content">
              <ReactMarkdown
                components={{
                  // @ts-ignore - React Markdown typing issues
                  strong: ({node, ...props}) => <span className="font-bold" {...props} />,
                  // @ts-ignore - React Markdown typing issues
                  em: ({node, ...props}) => <span className="italic" {...props} />,
                  // @ts-ignore - React Markdown typing issues
                  code: ({node, children, className, inline, ...props}: any) => {
                    const match = /language-([\w-]+)/.exec(className || '');
                    const language = match ? match[1] : '';
                    
                    // Check if it's an inline code block or a multi-line code block
                    if (inline) {
                      return <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded text-sm" {...props}>{children}</code>;
                    }
                    
                    // For multi-line code blocks, use the CodeSnippet component
                    return <CodeSnippet code={String(children).replace(/\n$/, '')} language={language || 'text'} />;
                  },
                  // @ts-ignore - React Markdown typing issues
                  p: ({node, ...props}) => <p className="mb-2" {...props} />
                }}
              >
                {message.content}
              </ReactMarkdown>
            </div>
          </div>
          <div className={`text-xs text-gray-500 dark:text-gray-400 mt-1 ${isUser ? 'text-right' : 'text-left'}`}>
            {formattedTime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;