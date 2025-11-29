# Neokisan Innovations Website

Professional website for Neokisan Innovations Pvt Ltd - An agri-technology company focused on smart pruning solutions.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- FormSubmit.co (for contact and career forms - no backend needed!)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Add your hero video:
   - Place `hero.mp4` in `public/videos/` directory
   - Place `hero-poster.jpg` in `public/images/` directory
   - **Video specs for best performance:**
     - Format: MP4 (H.264 codec)
     - Resolution: 1920x1080 or higher
     - Duration: 15-30 seconds (will loop)
     - File size: Under 5MB (use compression tools like HandBrake)
   - **Poster image specs:**
     - Format: JPG or WebP
     - Resolution: 1920x1080
     - File size: Under 200KB

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Form Setup (FormSubmit.co)

The contact and career forms use FormSubmit.co - **no backend configuration needed!**

1. When someone submits a form for the first time, FormSubmit will send a confirmation email to `neokisaninnovations@gmail.com`
2. Click **ACTIVATE** in that email
3. From then on, all form submissions will come directly to your inbox ✅

**Note:** Both forms are already configured to send to `neokisaninnovations@gmail.com`. If you need to change the email, update the `action` attribute in:
- `app/contact/page.tsx` (line with `action="https://formsubmit.co/..."`)
- `app/careers/page.tsx` (line with `action="https://formsubmit.co/..."`)

## Deployment

This project is configured for Vercel deployment:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy!

**Note:** No environment variables needed! Forms work out of the box with FormSubmit.co.

The site will be automatically deployed on every push to the main branch.

## Features

- Responsive design
- SEO optimized
- Contact form with FormSubmit.co (no backend needed)
- Career application form with file upload support
- Product gallery
- Professional hero video with autoplay, loop, and smooth playback
- YouTube video integration
- Modern agritech design with green theme

