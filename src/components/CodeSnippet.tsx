import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check, Maximize2, Minimize2 } from 'lucide-react';

interface CodeSnippetProps {
  code: string;
  language: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative my-4 rounded-md overflow-hidden ${expanded ? 'fixed inset-4 z-50 flex flex-col' : ''}`}>
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-xs text-gray-200">
        <span>{language}</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs text-gray-300 hover:text-white transition-colors"
            aria-label={expanded ? 'Minimize code' : 'Expand code'}
          >
            {expanded ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-xs text-gray-300 hover:text-white transition-colors"
            aria-label="Copy code"
          >
            {copied ? (
              <>
                <Check size={14} />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>Copy code</span>
              </>
            )}
          </button>
        </div>
      </div>
      <div className={`${expanded ? 'flex-1 overflow-auto' : 'max-h-[500px] overflow-auto'}`}>
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: '1rem',
            borderRadius: '0 0 0.375rem 0.375rem',
            height: expanded ? '100%' : 'auto',
            maxHeight: expanded ? 'none' : '500px',
          }}
          wrapLongLines={false}
          showLineNumbers={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
      {expanded && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40" 
          onClick={() => setExpanded(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default CodeSnippet;
