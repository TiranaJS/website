# TiranaJS Community Website

A modern, engaging website for the TiranaJS Community built with Next.js, TypeScript, and Tailwind CSS.

## 🎨 Design Features

### Visual Style
- **Logo**: Custom "tJS" logo with angular geometric "t" and bold "JS" text set against a soft, organic gradient cloud shape
- **Color Palette**: Light lavender background, deep indigo accents, and purple-to-pink gradient elements
- **Typography**: Clean Inter font family with bold headings and readable body text
- **Shape Language**: Rounded corners with subtle angular accents, floating gradient cloud elements

### Key Components
- **Floating Clouds**: Animated organic shapes that gently drift across sections
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Modern UI**: Cards, buttons, and interactive elements with smooth transitions
- **Accessibility**: High contrast, focus states, and semantic HTML structure

## 🚀 Features

### Pages
- **Homepage**: Hero section, about preview, upcoming events, and latest news
- **Events**: Detailed event listings with speaker information and registration
- **About**: Community story, values, timeline, and team information
- **Speakers**: Featured and past speakers with talk details
- **Resources**: Curated learning materials, tools, and community projects
- **Contact**: Contact form with social links and quick information

### Components
- **Navigation**: Responsive navigation with mobile menu
- **Logo**: Scalable TiranaJS logo component
- **FloatingClouds**: Animated background elements
- **Cards**: Reusable card components for events, news, and content
- **Footer**: Comprehensive footer with links and social media

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (SVG)
- **Fonts**: Inter (Google Fonts)

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd tirana-js-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:3000`

## 🏗 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── events/            # Events page
│   ├── resources/         # Resources page
│   ├── speakers/          # Speakers page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── AboutSection.tsx   # Homepage about section
│   ├── FloatingClouds.tsx # Animated background clouds
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Homepage hero section
│   ├── LatestNews.tsx     # News section
│   ├── Logo.tsx           # TiranaJS logo component
│   ├── Navigation.tsx     # Site navigation
│   └── UpcomingEvents.tsx # Events preview
├── lib/                   # Utilities and helpers
└── types/                 # TypeScript type definitions
```

## 🎯 Key Features Implemented

### Design System
- ✅ Custom color palette with primary, accent, and dark colors
- ✅ Typography system with Inter font family
- ✅ Component classes for buttons, cards, and utilities
- ✅ Consistent spacing and border radius system

### Logo & Branding
- ✅ Custom TiranaJS logo with gradient cloud background
- ✅ Scalable logo component with multiple sizes
- ✅ Consistent branding across all pages

### Interactive Elements
- ✅ Floating cloud animations with CSS keyframes
- ✅ Hover effects and smooth transitions
- ✅ Mobile-responsive navigation with hamburger menu
- ✅ Interactive contact form with validation

### Content Structure
- ✅ Comprehensive homepage with multiple sections
- ✅ Detailed events page with upcoming and past events
- ✅ About page with team, values, and timeline
- ✅ Speakers showcase with featured and past speakers
- ✅ Resources page with learning materials and tools
- ✅ Contact page with form and social links

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm run start
```

### Environment Variables
Create a `.env.local` file for any environment-specific variables:
```env
NEXT_PUBLIC_SITE_URL=https://tiranajs.org
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- TiranaJS Community for the inspiration and requirements
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first styling approach
- All community members who contribute to making this project better

---

Built with ❤️ for the TiranaJS Community
