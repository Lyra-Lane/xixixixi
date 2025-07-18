# ManYao Li - Personal Portfolio

A bilingual (English/Chinese) personal portfolio website showcasing AI research and statistics background with integrated chatbot functionality.

## 🌟 Features

- **Bilingual Support**: Full English and Chinese localization
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Interactive Chatbot**: Integrated AI assistant for visitor engagement
- **Modern UI**: Clean, professional design with smooth animations
- **SEO Optimized**: Meta tags and Open Graph support
- **GitHub Pages Ready**: Automatic deployment pipeline

## 🚀 Live Demo

Visit the live site: [Your GitHub Pages URL]

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **UI Components**: Radix UI, Shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── data/          # Content and translations
│   │   └── hooks/         # Custom React hooks
├── dist/                  # Built files for deployment
└── .github/workflows/     # GitHub Actions for deployment
```

## 🔧 Development

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd [repo-name]
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🚀 Deployment to GitHub Pages

1. **Enable GitHub Pages** in your repository settings
2. **Set source** to "GitHub Actions"
3. **Push to main branch** - automatic deployment will trigger

The GitHub Actions workflow will:
- Install dependencies
- Build the project
- Deploy to GitHub Pages
- Handle SPA routing with 404.html

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🎨 Customization

### Content
Edit `client/src/data/content.ts` to modify:
- Personal information
- Project descriptions
- Blog posts
- Contact details

### Styling
- Colors: Update CSS variables in `client/src/index.css`
- Components: Modify Tailwind classes throughout components
- Layout: Adjust responsive breakpoints in component files

### Chatbot
Update the chatbot iframe source in `client/src/pages/chatbot.tsx`

## 📄 License

MIT License - see LICENSE file for details

## 👤 Author

**ManYao Li**
- Email: manyaoli@berkeley.edu
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

---

Built with ❤️ for showcasing AI research and academic achievements.