'use client';

import { useState } from 'react';
import Editor from '@monaco-editor/react';

export default function CompilerExplorer() {
  const [rCode, setRCode] = useState(`# R Code Example
x <- 1:10
y <- x * 2
print(y)`);

  const [watOutput, setWatOutput] = useState(`;; WAT output will appear here
;; Waiting for compiler integration...`);

  const handleCompile = () => {
    // Placeholder for compiler integration
    // This will be replaced with actual compiler call in the future
    setWatOutput(`;; Compiler placeholder
;; R code length: ${rCode.length} characters
;; Actual compilation will be integrated later`);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-white">R to WAT Compiler Explorer</h1>
        <button
          onClick={handleCompile}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
        >
          Compile
        </button>
      </div>

      {/* Editors Container */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Editor - R Code */}
        <div className="flex-1 flex flex-col border-r border-gray-700">
          <div className="px-4 py-2 bg-gray-800 border-b border-gray-700">
            <h2 className="text-sm font-semibold text-gray-300">R Code</h2>
          </div>
          <div className="flex-1">
            <Editor
              height="100%"
              defaultLanguage="r"
              value={rCode}
              onChange={(value) => setRCode(value || '')}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: 'on',
                scrollBeyondLastLine: false,
                automaticLayout: true,
                tabSize: 2,
              }}
            />
          </div>
        </div>

        {/* Right Editor - WAT Output */}
        <div className="flex-1 flex flex-col">
          <div className="px-4 py-2 bg-gray-800 border-b border-gray-700">
            <h2 className="text-sm font-semibold text-gray-300">WAT Output</h2>
          </div>
          <div className="flex-1">
            <Editor
              height="100%"
              defaultLanguage="wasm"
              value={watOutput}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: 'on',
                scrollBeyondLastLine: false,
                automaticLayout: true,
                readOnly: true,
                tabSize: 2,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
