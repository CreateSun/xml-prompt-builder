
# XML Prompt Builder

A modern web application built with **Next.js 14** that helps you create structured XML prompts for AI systems without the hassle of manual formatting. Perfect for prompt engineers and AI enthusiasts.

## 🚀 Features

- **Visual XML Builder**: Create XML tags and nest them to create complex hierarchies easily
- **Automatic Formatting**: Let the tool handle indentation, nesting, and proper XML formatting
- **Import Existing XML**: Paste an existing XML prompt and edit it visually in seconds
- **Drag & Drop Interface**: Intuitive drag-and-drop interface for reordering elements
- **Real-time Preview**: See your XML structure as you build it
- **Token Counting**: Estimate token usage for your prompts
- **Responsive Design**: Works perfectly on desktop and mobile devices

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **State Management**: React Hooks
- **Drag & Drop**: @dnd-kit
- **Icons**: Lucide React

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/lolrazh/xml-prompt-builder.git
cd xml-prompt-builder
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Build & Deploy

Build for production:
```bash
pnpm build
```

Start production server:
```bash
pnpm start
```

## 🎯 Usage

1. **Add Elements**: Click "Add Element" to create new XML tags
2. **Edit Properties**: Select any element to edit its name and content
3. **Nest Elements**: Add child elements to create nested structures
4. **Reorder**: Use drag and drop to rearrange elements
5. **Import**: Paste existing XML to load and edit it
6. **Export**: Copy the final XML for use in your AI applications

## 🔧 Development

The project uses Next.js 14 with the App Router for modern React development:

- `app/` - Next.js App Router pages and layouts
- `src/components/` - React components
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions and libraries

## 📱 SEO Optimized

- Server-side rendering capabilities
- Structured data (JSON-LD) for search engines
- Open Graph and Twitter Card support
- Semantic HTML structure
- Performance optimized with Next.js

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Created with ♥ for prompt engineers and AI enthusiasts by [@lolrazh](https://github.com/lolrazh)
