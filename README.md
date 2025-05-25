# BUBU AI - Your Smart Chat Assistant

<div align="center">
  <img src="public/bubu-icon.png" alt="BUBU AI Logo" width="120" height="120" style="border-radius: 50%;">
  <br>
  <h3>Intelligent, Friendly, and Helpful AI Assistant</h3>
</div>

## 🌟 Overview

BUBU AI is a modern, intelligent chat assistant built with React and TypeScript. It leverages the power of Google's Gemini AI to provide helpful responses to user queries, assist with creative tasks, and offer solutions to various challenges.

<div align="center">
  <img src="screenshots/bubu-ai-demo.png" alt="BUBU AI Demo" width="700">
</div>

## ✨ Features

- **Modern UI**: Clean, dark-themed interface with a focus on user experience
- **AI-Powered Conversations**: Utilizes Google's Gemini AI for intelligent responses
- **Voice Input**: Speak directly to BUBU AI using your microphone
- **Code Highlighting**: Beautiful syntax highlighting for code snippets
- **Markdown Support**: Rich text formatting with support for bold, italic, and code blocks
- **Suggestion Buttons**: Quick-start your conversations with suggested prompts
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark Mode**: Easy on the eyes with a sleek dark interface
- **SEO Optimized**: Properly configured for search engines and social sharing

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/bubu-ai.git
   cd bubu-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory with your Gemini API key:
   ```
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript, TailwindCSS
- **Build Tool**: Vite
- **State Management**: React Context API
- **AI Integration**: Google Gemini API
- **Code Highlighting**: React Syntax Highlighter
- **Markdown Rendering**: React Markdown

## 📂 Project Structure

```
bubu-ai/
├── public/                # Static assets
├── src/
│   ├── components/        # UI components
│   │   ├── ChatBubble.tsx # Message bubbles
│   │   ├── ChatContainer.tsx # Main chat area
│   │   ├── ChatInput.tsx  # Message input
│   │   ├── CodeSnippet.tsx # Code highlighting
│   │   ├── Header.tsx     # App header
│   │   ├── Sidebar.tsx    # Conversation sidebar
│   │   └── TypingIndicator.tsx # Loading animation
│   ├── context/           # React Context providers
│   │   ├── ChatContext.tsx # Chat state management
│   │   └── ThemeContext.tsx # Theme management
│   ├── services/          # External service integrations
│   │   └── geminiService.ts # Gemini API integration
│   ├── types/             # TypeScript type definitions
│   ├── App.tsx            # Main component
│   └── main.tsx           # Entry point
├── .env                   # Environment variables
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation
```

## 🧩 Key Components

### ChatContext

Manages the state of conversations, including:
- Creating new conversations
- Storing and retrieving messages
- Handling AI responses
- Managing typing indicators

### GeminiService

Handles communication with the Google Gemini API:
- Formats requests to the API
- Processes responses
- Manages conversation history

### ChatContainer

The main UI component that:
- Displays messages
- Shows typing indicators
- Provides suggestion buttons
- Handles the welcome screen

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the project root with the following variables:

```
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

You can obtain a Gemini API key from the [Google AI Studio](https://ai.google.dev/).

## 📱 Progressive Web App

BUBU AI is configured as a Progressive Web App (PWA), allowing users to install it on their devices for a native app-like experience.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Google Gemini AI](https://ai.google.dev/) for powering the intelligent responses
- [React](https://reactjs.org/) for the UI library
- [Vite](https://vitejs.dev/) for the build tooling
- [TailwindCSS](https://tailwindcss.com/) for styling

---

<div align="center">
  Made with ❤️ by Your Name
</div>
