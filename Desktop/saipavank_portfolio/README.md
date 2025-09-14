# Sai Pavan Katineedi Portfolio

A modern, animated portfolio website built with Next.js, replicating the loading screen style of saisrinivasalahari.com and customized for Sai Pavan Katineedi, a Data Engineer specializing in real-time analytics and scalable streaming data.

## Features

- **Animated Loading Screen**: Star field background with twinkling stars
- **Letter-by-Letter Animation**: Name appears with staggered fade-in-up effect
- **Progress Bar**: Smooth loading animation
- **Responsive Design**: Optimized for all screen sizes
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Ready for Vercel/Netlify

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Saipavank63/SaiPavanKatineediPortfolio.git
   cd saipavank_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main page with loading screen
│   └── globals.css     # Global styles and animations
├── components/         # (Future) Reusable components
└── lib/               # (Future) Utility functions
```

## Customization

- Update the name and tagline in `src/app/page.tsx`
- Modify animations in `src/app/globals.css`
- Add portfolio sections in the loaded state

## Deployment

Deploy to Vercel:
```bash
npm run build
```

Then connect your repository to Vercel for automatic deployments.

## License

This project is open source and available under the [MIT License](LICENSE).
