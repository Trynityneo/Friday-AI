import React, { createContext, useContext, useState, useCallback, useEffect, useMemo } from 'react';
import { Message, Conversation } from '../types';
import { generateResponse } from '../services/geminiService';
import { v4 as uuidv4 } from 'uuid';

type ChatContextType = {
  conversations: Conversation[];
  currentConversationId: string | null;
  messages: Message[];
  isTyping: boolean;
  sendMessage: (content: string) => void;
  startNewConversation: () => void;
  setCurrentConversation: (id: string) => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);

  // Get current messages for the active conversation
  const currentMessages = useMemo(() => {
    return conversations.find(c => c.id === currentConversationId)?.messages || [];
  }, [conversations, currentConversationId]);

  // Create a new conversation
  const createNewConversation = useCallback((): Conversation => {
    const now = new Date();
    return {
      id: uuidv4(),
      title: `New Chat`,
      messages: [],
      createdAt: now,
      updatedAt: now
    };
  }, []);

  // Start a new conversation
  const startNewConversation = useCallback(() => {
    const newConversation = createNewConversation();
    setConversations(prev => [newConversation, ...prev]);
    setCurrentConversationId(newConversation.id);
  }, [createNewConversation]);

  // Set the current conversation
  const setCurrentConversation = useCallback((id: string) => {
    setCurrentConversationId(id);
  }, []);

  // Send a message in the current conversation
  const sendMessage = useCallback(async (content: string): Promise<void> => {
    if (!content.trim()) return;
    
    // Create or ensure current conversation exists
    let conversationId = currentConversationId;
    let isNewConversation = false;
    
    if (!conversationId) {
      const newConversation = createNewConversation();
      setConversations(prev => [newConversation, ...prev]);
      conversationId = newConversation.id;
      setCurrentConversationId(conversationId);
      isNewConversation = true;
    }
    
    // Add user message
    const userMessage: Message = {
      id: uuidv4(),
      content,
      role: 'user',
      timestamp: new Date()
    };
    
    // Update conversation with user message
    setConversations(prev => {
      return prev.map(conv => 
        conv.id === conversationId 
          ? {
              ...conv,
              messages: [...conv.messages, userMessage],
              updatedAt: new Date(),
              title: isNewConversation 
                ? content.slice(0, 30) + (content.length > 30 ? '...' : '')
                : conv.title
            }
          : conv
      );
    });
    
    // Generate AI response
    setIsTyping(true);
    
    try {
      // Get the latest state of conversations
      const currentConv = conversations.find(c => c.id === conversationId);
      
      if (!currentConv) {
        throw new Error('Conversation not found');
      }
      
      const chatHistory = currentConv.messages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: msg.content
      }));
      
      // Get response from Gemini
      const aiResponse = await generateResponse(content, chatHistory);
      
      // Add AI response to conversation
      const aiMessage: Message = {
        id: uuidv4(),
        content: aiResponse,
        role: 'assistant',
        timestamp: new Date()
      };
      
      setConversations(prev => 
        prev.map(conv => 
          conv.id === conversationId 
            ? {
                ...conv,
                messages: [...conv.messages, aiMessage],
                updatedAt: new Date()
              }
            : conv
        )
      );
    } catch (error) {
      console.error('Error getting AI response:', error);
      
      // Add error message if API call fails
      const errorMessage: Message = {
        id: uuidv4(),
        content: 'Sorry, I encountered an error while processing your request. Please try again.',
        role: 'assistant',
        timestamp: new Date()
      };
      
      setConversations(prev => 
        prev.map(conv => 
          conv.id === conversationId 
            ? {
                ...conv,
                messages: [...conv.messages, errorMessage],
                updatedAt: new Date()
              }
            : conv
        )
      );
    } finally {
      setIsTyping(false);
    }
  }, [currentConversationId, conversations, createNewConversation]);

  // Initialize with an empty conversation if none exists
  useEffect(() => {
    if (conversations.length === 0) {
      startNewConversation();
    }
  }, [conversations.length, startNewConversation]);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    conversations,
    currentConversationId,
    messages: currentMessages,
    isTyping,
    sendMessage,
    startNewConversation,
    setCurrentConversation
  }), [
    conversations,
    currentConversationId,
    currentMessages,
    isTyping,
    sendMessage,
    startNewConversation,
    setCurrentConversation
  ]);

  return (
    <ChatContext.Provider value={contextValue}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};