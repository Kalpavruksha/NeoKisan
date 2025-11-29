# Video Placement Guide

## Product Videos Location

You have two product demonstration videos that need to be placed in the following location:

### 📁 Directory Structure
```
public/
  videos/
    ├── hero.mp4 (already exists)
    ├── products-background.mp4 (already exists)
    ├── pruning-demo.mp4 ⬅️ ADD THIS (Prunolite pruning demonstration)
    └── gloves-demo.mp4 ⬅️ ADD THIS (Protective gloves demonstration)
```

## Video Files to Add

### 1. Pruning Demo Video
- **File Name**: `pruning-demo.mp4`
- **Location**: `public/videos/pruning-demo.mp4`
- **Purpose**: Shows Prunolite Smart Secateur in action during pruning
- **Displayed On**: Products page, below the Prunolite product image

### 2. Gloves Demo Video
- **File Name**: `gloves-demo.mp4`
- **Location**: `public/videos/gloves-demo.mp4`
- **Purpose**: Shows Controlled-Flow Protective Gloves in action
- **Displayed On**: Products page, below the Protective Gloves product image

## How to Add Videos

1. **Copy your videos** to the `public/videos/` folder:
   - Rename your pruning video to `pruning-demo.mp4`
   - Rename your gloves video to `gloves-demo.mp4`

2. **Place them in**: `D:\Neokisan\public\videos\`

3. **The videos will automatically appear** on the products page below each product image

## Video Specifications (Recommended)

- **Format**: MP4 (H.264 codec)
- **Resolution**: 1080p or 720p
- **Aspect Ratio**: 16:9 (landscape) or 9:16 (portrait) - both work
- **File Size**: Keep under 50MB for faster loading
- **Duration**: 30 seconds to 2 minutes recommended

## Features

✅ Videos are embedded with controls (play/pause)
✅ Responsive design - works on mobile and desktop
✅ Professional glassmorphism styling
✅ Poster images use product images as thumbnails
✅ Videos load on-demand (preload="metadata")

## Testing

After adding the videos:
1. Run `npm run dev`
2. Navigate to `/products` page
3. Scroll down to see the videos below each product image
4. Click play to test video playback

## Notes

- If videos don't appear, check the file names match exactly: `pruning-demo.mp4` and `gloves-demo.mp4`
- Make sure videos are in the `public/videos/` folder (not `public/images/`)
- The videos will show a fallback message if the file is missing

