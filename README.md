# Premium Portfolio Website

A stunning, professional portfolio website built with React, featuring smooth animations, custom cursor effects, and a modern glassmorphism design.

## 🚀 Features

- ✨ **Premium Animations**: Smooth Framer Motion animations throughout
- 🎯 **Custom Cursor**: Interactive custom cursor with hover effects
- 🌊 **Glassmorphism Design**: Modern glass-effect UI components
- 📱 **Fully Responsive**: Perfect on all devices
- 🎨 **Gradient Accents**: Beautiful gradient color schemes
- ⚡ **Fast Performance**: Built with Vite for optimal speed
- 🎭 **Particle Background**: Animated particle effects
- 📊 **Interactive Sections**: Hero, About, Skills, Projects, Experience, Contact

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Intersection Observer** - Scroll animations

## 📦 Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and visit: `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 📁 Project Structure

```
portfolio/
├── public/
│   └── Sibgatul_cv.pdf
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Navigation.jsx
│   │   ├── ParticlesBackground.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):

   - Update name, title, description
   - Add your profile picture

2. **About Section** (`src/components/About.jsx`):

   - Modify bio and highlights

3. **Skills Section** (`src/components/Skills.jsx`):

   - Add/remove skills
   - Adjust proficiency levels

4. **Projects Section** (`src/components/Projects.jsx`):

   - Update project information
   - Add GitHub and demo links

5. **Experience Section** (`src/components/Experience.jsx`):

   - Update work experience details

6. **Contact Section** (`src/components/Contact.jsx`):
   - Update email and location
   - Configure form submission

### Color Scheme

Modify CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #ec4899;
  /* ... */
}
```

## 🌟 Features Breakdown

### Custom Cursor

- Follows mouse movement
- Expands on hover over interactive elements
- Smooth transitions

### Animations

- Scroll-triggered animations
- Hover effects
- Page load animations
- Staggered content reveal

### Responsive Design

- Mobile-first approach
- Breakpoints for tablets and desktops
- Touch-friendly on mobile

## 📝 License

This project is open source and available for personal and commercial use.

## 👤 Author

**Sibgatul Hassen**

- GitHub: [@Sibgatul-Hassen](https://github.com/Sibgatul-Hassen)

## 🙏 Acknowledgments

- Framer Motion for amazing animations
- React Icons for beautiful icons
- Vite for blazing fast development

---

Made with ❤️ and lots of ☕
