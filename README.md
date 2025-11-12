# Portfolio 2.0

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with glassmorphism effects
- **Responsive Design**: Optimized for all devices and screen sizes
- **Smooth Animations**: Powered by Framer Motion for delightful interactions
- **GitHub Integration**: Real-time GitHub stats and contribution graphs
- **Dynamic Content**: Projects fetched from GitHub API
- **TypeScript**: Full type safety and better developer experience

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS, Shadcn/ui components
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **API**: GitHub GraphQL API

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- GitHub Personal Access Token (for GitHub integration)

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/Rkarama26/Portfolio2.o.git
   cd Portfolio2.o
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your GitHub Personal Access Token:

   ```
   VITE_GITHUB_TOKEN=your_github_token_here
   ```

   **Getting a GitHub Token:**
   - Go to [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
   - Generate a new token with `repo` and `read:user` scopes
   - Copy the token and paste it in your `.env` file

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🎨 Customization

### Colors and Theme

The portfolio uses CSS custom properties for theming. You can customize colors in `src/index.css`:

```css
:root {
  --primary: 221 83% 53%;
  --muted: 217 19% 12%;
  /* Add your custom colors here */
}
```

### Content

Update the following files to customize content:

- `src/components/Hero.tsx` - Hero section
- `src/components/About.tsx` - About section
- `src/components/Skills.tsx` - Skills section
- `src/components/Projects.tsx` - Projects section (uses GitHub data)
- `src/components/GitHubStats.tsx` - GitHub statistics

### GitHub Username

To change the GitHub username for stats and projects:

1. Update the username in `src/components/Projects.tsx` and `src/components/GitHubStats.tsx`
2. Make sure your GitHub token has access to the new account

## 🔒 Security

- Never commit `.env` files containing sensitive information
- The `.env` file is automatically ignored by git
- Use environment variables for all sensitive data

## 📱 Deployment

### Vercel

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard:
   - `VITE_GITHUB_TOKEN`: Your GitHub token
3. Deploy!

### Netlify

1. Connect your GitHub repository to Netlify
2. Add environment variables in Netlify dashboard
3. Deploy!

### Other Platforms

Build the project with `npm run build` and deploy the `dist` folder.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [GitHub](https://github.com/) for the amazing platform

---

Built with ❤️ by [Your Name](https://github.com/Rkarama26)
