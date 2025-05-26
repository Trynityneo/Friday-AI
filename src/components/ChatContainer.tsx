import React, { useRef, useEffect } from 'react';
import { useChat } from '../context/ChatContext';
import ChatBubble from './ChatBubble';
import TypingIndicator from './TypingIndicator';
import ChatInput from './ChatInput';
import SuggestionButton from './SuggestionButton';

const ChatContainer: React.FC = () => {
  const { messages, sendMessage, isTyping } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Get current time of day for greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };
  
  // Suggestions for empty state
  const suggestions = [
    { text: 'Write a first draft', action: () => sendMessage('Help me write a first draft') },
    { text: 'Get advice', action: () => sendMessage('I need some advice') },
    { text: 'Learn something new', action: () => sendMessage('Teach me something interesting') },
    { text: 'Create an image', action: () => sendMessage('Describe an image of') },
    { text: 'Make a plan', action: () => sendMessage('Help me make a plan for') },
    { text: 'Brainstorm ideas', action: () => sendMessage('Let\'s brainstorm ideas for') },
    { text: 'Practice a language', action: () => sendMessage('Help me practice a language') },
    { text: 'Take a quiz', action: () => sendMessage('Create a quiz about') },
  ];

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col h-full bg-black">
      <div className="flex-1 overflow-y-auto px-3 py-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center px-4 mt-10">
            <div className="mb-6">
              <img 
                src="/image/friday.jpg" 
                alt="Friday AI" 
                className="w-24 h-24 rounded-full object-cover border-2 border-blue-500" 
              />
            </div>
            <h1 className="text-2xl font-medium text-white mb-2">
              {getGreeting()}
            </h1>
            <h2 className="text-3xl font-semibold text-white mb-3">
              What can I help you with today?
            </h2>
            <p className="text-gray-400 mb-8 max-w-md">
              I'm Friday AI, your friendly AI assistant. I can help with creative tasks, answer questions, and assist with various challenges. What would you like to explore today?
            </p>
            
            <div className="grid grid-cols-2 gap-2 max-w-md mb-4">
              {suggestions.slice(0, 4).map((suggestion, index) => (
                <SuggestionButton 
                  key={index}
                  text={suggestion.text}
                  onClick={suggestion.action}
                />
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-2 max-w-md">
              {suggestions.slice(4).map((suggestion, index) => (
                <SuggestionButton 
                  key={index + 4}
                  text={suggestion.text}
                  onClick={suggestion.action}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-1 pt-4">
            {messages.map(message => (
              <ChatBubble key={message.id} message={message} />
            ))}
            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
      
      <div className="p-4">
        <ChatInput onSendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default ChatContainer;