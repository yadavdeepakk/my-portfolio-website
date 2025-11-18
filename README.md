# 🚀 Deepak Kumar Yadav - Portfolio

A modern, responsive, and beautifully designed personal portfolio website showcasing projects, skills, and professional journey. Built with cutting-edge technologies and optimized for performance.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-06B6D4?style=flat-square&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=flat-square&logo=vite)

## ✨ Features

- 🎨 **Modern UI Design** - Clean, elegant, and professional interface with smooth animations
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🌙 **Dark Mode Support** - Seamless theme switching with dark/light modes
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and production builds
- 🎯 **Smooth Scrolling** - Smooth navigation between sections with scroll anchors
- 📧 **Contact Form** - Functional contact form for getting in touch
- 💼 **Project Showcase** - Display of completed projects with descriptions
- 📊 **Skills Dashboard** - Comprehensive skills and tech stack display
- 🔗 **Social Links** - Quick access to GitHub, LinkedIn, and email
- 📄 **Resume Download** - One-click resume access via Google Drive
- 🎨 **Component Library** - Pre-built UI components from Radix UI and shadcn/ui

## 🛠️ Tech Stack

### Frontend

- **React** 18.3.1 - UI library
- **TypeScript** 5.9.2 - Type-safe JavaScript
- **Vite** 7.1.2 - Next generation build tool
- **Tailwind CSS** 3.4.17 - Utility-first CSS framework
- **Radix UI** - Accessible components
- **Framer Motion** 12.23.12 - Animations library
- **React Router** 6.30.1 - Client-side routing

### Backend

- **Express** 5.1.0 - Node.js web framework
- **Node.js** - JavaScript runtime

### Development Tools

- **TypeScript** - Static type checking
- **Vitest** 3.2.4 - Unit testing framework
- **Prettier** 3.6.2 - Code formatter
- **PostCSS** 8.5.6 - CSS processing
- **SWC** - Fast JavaScript compiler

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** v16 or higher ([Download](https://nodejs.org/))
- **pnpm** v10.14.0 ([Download](https://pnpm.io/installation))
  - Alternatively, you can use **npm** or **yarn**
- **Git** ([Download](https://git-scm.com/))

You can verify your installations by running:

```bash
node --version
pnpm --version
git --version
```

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yadavdeepakk/portfolio.git
cd portfolio
```

### 2. Install Dependencies

Using **pnpm** (recommended):

```bash
pnpm install
```

Or using **npm**:

```bash
npm install
```

Or using **yarn**:

```bash
yarn install
```

### 3. Start Development Server

```bash
pnpm dev
```

The application will be available at `http://localhost:8080`

### 4. Open in Browser

Open your web browser and navigate to:

```
http://localhost:8080
```

You'll see the portfolio with live reload enabled - any changes you make to the source code will automatically refresh in the browser!

## 📂 Project Structure

```
portfolio/
├── client/                    # Frontend React application
│   ├── components/           # Reusable React components
│   │   ├── ui/              # UI component library (Radix UI, shadcn/ui)
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Hero.tsx         # Hero/landing section
│   │   ├── About.tsx        # About me section
│   │   ├── Skills.tsx       # Skills showcase
│   │   ├── Projects.tsx     # Projects gallery
│   │   ├── Journey.tsx      # Professional journey timeline
│   │   ├── Contact.tsx      # Contact section with form
│   │   └── Footer.tsx       # Footer with social links
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── pages/               # Page components
│   │   └── Index.tsx        # Main portfolio page
��   ├── App.tsx              # Root component
│   ├── global.css           # Global styles
│   └── vite-env.d.ts        # Vite environment types
├── server/                   # Backend Express server
│   ├── routes/              # API routes
│   ├── index.ts             # Server entry point
│   └── node-build.ts        # Node server builder
├── shared/                   # Shared code between client and server
│   └── api.ts               # API type definitions
├── netlify/functions/        # Netlify serverless functions
│   └── api.ts               # API handler
├── public/                   # Static assets
├── components.json           # Component configuration
├── package.json             # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── vite.config.ts           # Vite configuration
├── vite.config.server.ts    # Vite server build configuration
└── README.md                # This file
```

## 🔨 Available Scripts

### Development

```bash
# Start dev server with hot reload
pnpm dev
```

### Building

```bash
# Build both client and server
pnpm build

# Build only client
pnpm build:client

# Build only server
pnpm build:server
```

### Production

```bash
# Start production server
pnpm start
```

### Testing

```bash
# Run unit tests
pnpm test
```

### Code Quality

```bash
# Format code with Prettier
pnpm format.fix

# Type check TypeScript
pnpm typecheck
```

## 🔧 Environment Variables

The application doesn't require environment variables to run locally. However, if you want to customize it:

Create a `.env` file in the root directory:

```env
# Example environment variables
VITE_API_URL=http://localhost:8080
```

**Note:** Environment variables prefixed with `VITE_` are exposed to the client-side code.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktops (1024px and up)
- 🖥️ Large screens (1400px and up)

Test responsiveness by:

1. Opening the app in your browser
2. Pressing `F12` to open Developer Tools
3. Click the device toggle to view different screen sizes

## 🎨 Customization

### Update Personal Information

Edit these files to customize the portfolio:

- **`client/components/Hero.tsx`** - Update your name, title, and introduction
- **`client/components/About.tsx`** - Update your about me section
- **`client/components/Skills.tsx`** - Update your skills and tech stack
- **`client/components/Projects.tsx`** - Add or remove projects
- **`client/components/Journey.tsx`** - Update your professional journey
- **`client/components/Contact.tsx`** - Update contact information and social links
- **`client/components/Footer.tsx`** - Update footer content

### Change Colors and Theme

Edit `tailwind.config.ts` to customize the theme colors. The design uses CSS custom properties defined in `client/global.css`.

### Add New Pages/Sections

1. Create a new component in `client/components/`
2. Import it in `client/pages/Index.tsx`
3. Add the component to the render output

## 🚀 Deployment

### Deploy to Netlify

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)
2. Connect your repository to Netlify
3. Set build command: `pnpm build`
4. Set publish directory: `dist/spa`
5. Deploy!

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Vite configuration
4. Click Deploy

### Deploy to Other Platforms

The application builds to `dist/spa` for the frontend. You can deploy this to any static hosting service:

- GitHub Pages
- GitLab Pages
- Cloudflare Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 🐛 Troubleshooting

### Port Already in Use

If port 8080 is already in use:

```bash
# Kill the process using port 8080 (Unix/Linux/Mac)
lsof -ti:8080 | xargs kill -9

# Or change the port in vite.config.ts
```

### Dependencies Not Installing

```bash
# Clear package manager cache
pnpm store prune

# Or for npm
npm cache clean --force

# Reinstall dependencies
pnpm install
```

### Hot Reload Not Working

1. Check if the dev server is running
2. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
3. Clear browser cache and restart the dev server

### TypeScript Errors

```bash
# Run type checking
pnpm typecheck

# Format code
pnpm format.fix
```

## 🤝 Contributing

If you'd like to use this portfolio as a template:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🔗 Connect

- **Email:** [yadavdeepakk9212@gmail.com](mailto:yadavdeepakk9212@gmail..com)
- **GitHub:** [github.com/yadavdeepakk](https://github.com/yadavdeepakk)
- **LinkedIn:** [Deepak Yadav](https://www.linkedin.com/in/deepak-yadav-922503245/)
- **Portfolio:** [Portfolio Website](http://localhost:8080)

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Create an issue on GitHub
3. Reach out via email

---

## 🎯 Future Enhancements

Planned features for future versions:

- [ ] Blog section
- [ ] GitHub integration to display latest projects
- [ ] Analytics dashboard
- [ ] Newsletter subscription
- [ ] Multi-language support
- [ ] CMS integration

---

<div align="center">

Made with ❤️ by [Deepak Kumar Yadav](https://github.com/yadavdeepakk)

If you found this helpful, please consider giving it a ⭐

</div>
