# Friday AI - Your Intelligent Chat Assistant

<div align="center">
  <img src="/image/friday.jpg" alt="Friday AI Logo" width="120" height="120" style="border-radius: 50%;">
  <br>
  <h3>Smart, Efficient, and Always Ready to Help</h3>
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
  [![GitHub stars](https://img.shields.io/github/stars/yourusername/friday-ai?style=social)](https://github.com/yourusername/friday-ai/stargazers)
</div>

## 🚀 Features

- **AI-Powered Conversations**: Powered by Google's Gemini AI for intelligent and contextual responses
- **Modern UI/UX**: Clean, responsive interface with dark mode support
- **Code Highlighting**: Beautiful syntax highlighting for code snippets
- **Markdown Support**: Rich text formatting for better readability
- **Voice Input**: Speak your queries with voice input support
- **Responsive Design**: Works seamlessly on all devices
- **Progressive Web App**: Installable on desktop and mobile devices
- **Fast & Lightweight**: Built with Vite for optimal performance

## 🌟 Live Demo

Check out the live demo [here](https://your-app-url.vercel.app) (if deployed)

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, TailwindCSS
- **Build Tool**: Vite
- **AI Integration**: Google Gemini API
- **State Management**: React Context API
- **Code Highlighting**: React Syntax Highlighter
- **Icons**: Lucide React
- **Markdown**: React Markdown

## 📦 Prerequisites

- Node.js (v16.0.0 or higher)
- npm or yarn
- Google Gemini API Key (Get it from [Google AI Studio](https://ai.google.dev/))

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/friday-ai.git
   cd friday-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Visit `http://localhost:5173`

## 📂 Project Structure

```
friday-ai/
├── public/                # Static assets
│   └── image/             # Image assets
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ChatBubble.tsx  # Chat message component
│   │   ├── ChatContainer.tsx # Main chat interface
│   │   ├── ChatInput.tsx   # Message input component
│   │   ├── Header.tsx      # Navigation header
│   │   └── TypingIndicator.tsx # Loading animation
│   ├── context/            # State management
│   │   ├── ChatContext.tsx  # Chat state
│   │   └── ThemeContext.tsx # Theme management
│   ├── services/           # External services
│   │   └── geminiService.ts # Gemini API integration
│   ├── types/              # TypeScript types
│   ├── App.tsx             # Root component
│   └── main.tsx            # Application entry point
├── .env.example           # Example environment variables
├── index.html             # HTML template
├── package.json           # Project dependencies
└── README.md              # Project documentation
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GEMINI_API_KEY` | Your Google Gemini API key | Yes |

## 📱 Progressive Web App

Friday AI is a PWA, which means you can install it on your device for a native app-like experience.

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👏 Acknowledgments

- [Google Gemini AI](https://ai.google.dev/) for the powerful AI capabilities
- [Vite](https://vitejs.dev/) for the amazing development experience
- [React](https://reactjs.org/) for the UI library
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS
- All contributors who have helped shape this project

---

<div align="center">
  Made with ❤️ by VishnuXrobot
</div>
