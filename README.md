# R to WAT Compiler Explorer

A web-based compiler explorer for compiling R code to WebAssembly Text (WAT) format. Built with Next.js and Monaco Editor.

## Features

- **Split-pane editor interface**: Write R code on the left, view WAT output on the right
- **Monaco Editor**: The same editor that powers VS Code
- **Real-time compilation**: Click the compile button to transform R code to WAT
- **Syntax highlighting**: Proper highlighting for both R and WAT formats
- **Responsive design**: Clean, dark-themed interface optimized for code editing

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd wasmr-web
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
wasmr-web/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   └── CompilerExplorer.tsx # Main compiler explorer component
├── public/                 # Static assets
└── package.json            # Project dependencies
```

## Compiler Integration

The compiler placeholder is located in `components/CompilerExplorer.tsx` in the `handleCompile` function:

```typescript
const handleCompile = () => {
  // Placeholder for compiler integration
  // Replace this with actual compiler call
  setWatOutput(/* compiled WAT output */);
};
```

To integrate your R to WAT compiler:

1. Import or add your compiler module
2. Replace the placeholder in `handleCompile` with your compiler logic
3. Pass the `rCode` to your compiler
4. Set the result to `watOutput` using `setWatOutput()`

## Technologies Used

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type-safe development
- **Monaco Editor**: VS Code's editor component
- **Tailwind CSS**: Utility-first CSS framework
- **React**: UI library

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## License

MIT

## Future Enhancements

- [ ] Integrate actual R to WAT compiler
- [ ] Add error handling and display
- [ ] Add code examples/templates
- [ ] Add download functionality for compiled output
- [ ] Add settings for editor preferences
- [ ] Add compilation statistics
