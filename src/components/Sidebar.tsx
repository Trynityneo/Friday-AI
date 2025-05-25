import React from 'react';
import { useChat } from '../context/ChatContext';
import { PlusCircle, MessageSquare } from 'lucide-react';

type SidebarProps = {
  isOpen: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const { conversations, currentConversationId, startNewConversation, setCurrentConversation } = useChat();

  return (
    <div 
      className={`fixed top-16 bottom-0 left-0 w-64 bg-gray-50 dark:bg-gray-800 transform transition-transform duration-300 ease-in-out z-20 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 shadow-md md:shadow-none`}
    >
      <div className="flex flex-col h-full">
        <div className="p-4">
          <button 
            onClick={startNewConversation}
            className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors"
          >
            <PlusCircle size={18} />
            <span>New Chat</span>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <div className="px-3 py-2">
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
              Recent Conversations
            </h3>
            <div className="space-y-1">
              {/* Show only the most recent conversation */}
              {conversations.slice(0, 1).map(conversation => (
                <button
                  key={conversation.id}
                  onClick={() => setCurrentConversation(conversation.id)}
                  className={`w-full text-left px-3 py-2 rounded-md flex items-center space-x-2 truncate ${
                    conversation.id === currentConversationId
                      ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <MessageSquare size={16} />
                  <span className="truncate">{conversation.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Settings and profile sections removed as requested */}
      </div>
    </div>
  );
};

export default Sidebar;