# YouTube Video Setup Guide

## How to Add Your YouTube Video

1. **Go to your YouTube channel:** https://youtube.com/@neokisaninnovations
2. **Select the video you want to feature** on the home page
3. **Copy the Video ID** from the URL:
   - Example: `https://www.youtube.com/watch?v=ABC123xyz`
   - Video ID is: `ABC123xyz` (the part after `v=`)

4. **Update the video in `app/page.tsx`:**
   - Find this line: `src="https://www.youtube.com/embed/VIDEO_ID_HERE?rel=0&modestbranding=1"`
   - Replace `VIDEO_ID_HERE` with your actual video ID
   - Example: `src="https://www.youtube.com/embed/ABC123xyz?rel=0&modestbranding=1"`

## Alternative: Use Channel's Latest Video

If you want to automatically show your latest video, you can use:
```
https://www.youtube.com/embed?listType=user_uploads&list=neokisaninnovations
```

But this requires the channel ID, not the handle. To get your channel ID:
1. Go to YouTube Studio
2. Settings → Channel → Advanced settings
3. Copy your Channel ID

Then use:
```
https://www.youtube.com/embed?listType=user_uploads&list=YOUR_CHANNEL_ID
```

## Recommended: Use a Specific Video

The best approach is to use a specific video ID for better control and performance.

