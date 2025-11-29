# 📁 File Placement Guide - Neokisan Website

## 🎥 VIDEOS (Place in `public/videos/` folder)

### 1. Landing Page Hero Video
**File:** `public/videos/hero.mp4`
**Used in:** Home page (`app/page.tsx`) - Hero section
**Specs:**
- Format: MP4 (H.264 codec)
- Resolution: 1920x1080 or higher
- Duration: 15-30 seconds (will loop)
- File size: Under 5MB (use compression tools like HandBrake)
- Content: Should showcase Neokisan/Prunolite in action

### 2. Products Page Background Video
**File:** `public/videos/products-background.mp4`
**Used in:** Products page (`app/products/page.tsx`) - Hero section background
**Specs:**
- Format: MP4 (H.264 codec)
- Resolution: 1920x1080 or higher
- Duration: 15-30 seconds (will loop)
- File size: Under 5MB
- Content: Product demonstration or farming/agriculture related

---

## 🖼️ IMAGES (Place in `public/images/` folder)

### 1. Landing Page Hero Poster Image
**File:** `public/images/hero-poster.jpg`
**Used in:** Home page - Shows while hero video loads
**Specs:**
- Format: JPG or WebP
- Resolution: 1920x1080
- File size: Under 200KB
- Content: A frame from your hero video or related image

### 2. Products Page Background Poster Image
**File:** `public/images/products-poster.jpg`
**Used in:** Products page - Shows while background video loads
**Specs:**
- Format: JPG or WebP
- Resolution: 1920x1080
- File size: Under 200KB
- Content: A frame from your products video or related image

### 3. Product Images (Place in `public/images/products/` folder)

#### Prunolite Smart Secateur
**File:** `public/images/products/prunolite-secateur.jpg`
**Used in:** Products page - Product 1 section
**Specs:**
- Format: JPG or WebP
- Resolution: 1200x1200 or higher (square format recommended)
- File size: Under 500KB
- Content: Clear image of the Prunolite Smart Secateur tool

#### Controlled-Flow Protective Gloves
**File:** `public/images/products/protective-gloves.jpg`
**Used in:** Products page - Product 2 section
**Specs:**
- Format: JPG or WebP
- Resolution: 1200x1200 or higher (square format recommended)
- File size: Under 500KB
- Content: Clear image of the Controlled-Flow Protective Gloves

---

## 📂 Complete Folder Structure

```
public/
├── videos/
│   ├── hero.mp4                    ← Landing page video
│   └── products-background.mp4     ← Products page background video
│
└── images/
    ├── hero-poster.jpg             ← Landing page poster
    ├── products-poster.jpg         ← Products page poster
    └── products/
        ├── prunolite-secateur.jpg  ← Product 1 image
        └── protective-gloves.jpg   ← Product 2 image
```

---

## ✅ Quick Checklist

- [ ] `public/videos/hero.mp4` - Landing page video
- [ ] `public/videos/products-background.mp4` - Products page video
- [ ] `public/images/hero-poster.jpg` - Landing page poster
- [ ] `public/images/products-poster.jpg` - Products page poster
- [ ] `public/images/products/prunolite-secateur.jpg` - Product 1 image
- [ ] `public/images/products/protective-gloves.jpg` - Product 2 image

---

## 🎬 How Videos Are Used

### Landing Page (`app/page.tsx`)
- **Video:** Full-screen background in hero section
- **Autoplay:** Yes (muted, loops)
- **Overlay:** Dark overlay (50% opacity) for text readability
- **Content:** Hero text and buttons over the video

### Products Page (`app/products/page.tsx`)
- **Video:** Background in hero section (60vh height)
- **Autoplay:** Yes (muted, loops)
- **Overlay:** Dark overlay (60% opacity) for text readability
- **Content:** "Our Products" heading and tagline over the video

---

## 💡 Tips

1. **Video Compression:** Use HandBrake or FFmpeg to compress videos while maintaining quality
2. **Image Optimization:** Use tools like TinyPNG or Squoosh to optimize images
3. **Naming:** Keep file names exactly as specified (case-sensitive)
4. **Formats:** MP4 for videos, JPG/WebP for images work best
5. **Testing:** After adding files, test on both desktop and mobile devices

---

## 🔄 After Adding Files

1. Restart your development server: `npm run dev`
2. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
3. Check that videos autoplay and loop smoothly
4. Verify images load correctly on products page

