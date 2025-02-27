# SaaS Landing Page Template

![SaaS Landing Page](/public/screenshots/sass1.png)

A modern, responsive landing page template for SaaS products built with Next.js, Tailwind CSS, and Framer Motion. This template includes multiple customizable sections, interactive animations, and a comprehensive set of UI components.

<!-- ## 📸 Screenshots

<div align="center">
  <img src="/public/screenshots/sass1.png" alt="Hero Section" width="800px" />
  <p><em>Hero Section with neon grid</em></p>
  
  <img src="/public/screenshots/sass2.png" alt="Hero Section" width="800px" />
  <p><em>Hero Section with neon grid</em></p>

  <img src="/public/screenshots/sass3.png" alt="Hero Section" width="800px" />
  <p><em>Hero Section with neon grid</em></p>
  
</div> -->

## 🚀 Features

- **Modern Design**: Sleek, professional design with customizable color schemes
- **Fully Responsive**: Looks great on all devices (mobile, tablet, desktop)
- **Performance Optimized**: Fast loading times with Next.js
- **Interactive Animations**: Smooth animations powered by Framer Motion
- **Component-Based**: Built with reusable components for easy customization
- **Dark Mode by Default**: Elegant dark theme with neon accents
- **SEO Ready**: Optimized for search engines

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [Lucide Icons](https://lucide.dev/) - Beautiful open source icons

## 📋 Prerequisites

- Node.js 16.8.0 or later
- npm or yarn package manager

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Owusu1946/saas-landing-page.git
   cd saas-landing-page
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure
```plaintext
saas-landing-page/
├── app/ # Next.js app directory
│ ├── layout.tsx # Base layout
│ ├── page.tsx # Main page component
│ └── globals.css # Global styles
├── components/ # Reusable components
│ ├── ui/ # UI components (buttons, cards, etc.)
│ ├── header.tsx # Site header
│ ├── footer.tsx # Site footer
│ ├── hero-section.tsx
│ ├── features-section.tsx
│ ├── pricing-section.tsx
│ └── ...
├── public/ # Static assets
└── ...
```


## 🧩 Available Sections

The landing page includes the following customizable sections:

1. **Header**: Navigation with dropdown menus
2. **Hero**: Main banner with CTA buttons
3. **Features**: Showcase product features with interactive cards
4. **Database Visual**: Visual representation of your database functionality
5. **Performance**: Highlight performance metrics
6. **Testimonials**: Customer testimonials and success stories
7. **Pricing**: Pricing plans with feature comparison
8. **Footer**: Links, copyright info, and additional navigation

## 🎨 UI Components

The template includes a comprehensive set of UI components from [shadcn/ui](https://ui.shadcn.com/):

- **Buttons**: Default, outline, ghost variants in various sizes
- **Cards**: Regular, hover effect cards
- **Dropdowns**: Menus, select inputs
- **Accordion**: Collapsible content sections
- **Dialogs/Modals**: Popup dialogs for important actions
- **Badges**: Label and highlight content
- **Alerts**: Notify users of important information
- **Breadcrumbs**: Show navigation hierarchy
- **Navigation**: Menus, tabs
- **Popovers**: Context-specific information
- **Tooltips**: Additional guidance for UI elements
- **Skeletons**: Loading states

## 🔄 Customization

### Colors

The primary color scheme uses black backgrounds with neon green accents (`#00E699`). You can customize the colors in the following files:

1. `app/globals.css`: Contains CSS variables for the color scheme
2. `tailwind.config.ts`: Tailwind configuration including theme colors

### Content

Customize the content by editing the corresponding section components in the `components/` directory:

- `components/hero-section.tsx`
- `components/features-section.tsx`
- `components/pricing-section.tsx`
- etc.

### Logo and Images

Replace the SVG logo in `components/header.tsx` with your own logo.

### Adding New Sections

To add a new section:

1. Create a new component file in the `components/` directory
2. Import the component in `app/page.tsx`
3. Add the component to the page layout

## 📱 Responsive Design

The template is fully responsive with optimized layouts for:
- Mobile devices (< 640px)
- Tablets (640px - 1024px)
- Desktops (> 1024px)

## 🚀 Deployment

### Deploy to Vercel with One Click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FOwusu1946%2Fsaas-landing-page&project-name=saas-landing-page&repository-name=saas-landing-page)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/).

1. Click the "Deploy" button above
2. Vercel will automatically create a new repository in your GitHub account with this template
3. Follow the setup instructions on Vercel
4. Your site will be deployed with a URL instantly

### Other Deployment Options

- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [GitHub Pages](https://pages.github.com/)

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- UI components based on [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide Icons](https://lucide.dev/)

---

Built with ❤️ by [Owusu1946](https://github.com/Owusu1946)