# Video Assets Guide

## Required Video Files for Projects Page

Place the following video files in this directory (`assets/videos/`):

### Hero Section

- `hero-hologram.mp4` - Main hero background video
- `hero-hologram.webm` - WebM format for better browser support
- `hero-poster.jpg` - Poster image shown before video loads

### Project Cards

Each project needs both MP4 and WebM formats for cross-browser compatibility:

#### Retail Projects

- `project-retail-1.mp4` / `project-retail-1.webm`
- `project-retail-2.mp4` / `project-retail-2.webm`

#### Events Projects

- `project-events-1.mp4` / `project-events-1.webm`
- `project-events-2.mp4` / `project-events-2.webm`

#### Corporate Projects

- `project-corporate-1.mp4` / `project-corporate-1.webm`
- `project-corporate-2.mp4` / `project-corporate-2.webm`

#### Exhibition Projects

- `project-exhibition-1.mp4` / `project-exhibition-1.webm`
- `project-exhibition-2.mp4` / `project-exhibition-2.webm`

#### Mall Projects

- `project-mall-1.mp4` / `project-mall-1.webm`

### Poster Images

Optional poster images for each project card (shown before video loads):

- `project-1-poster.jpg` through `project-9-poster.jpg`

## Video Specifications

### Recommended Settings:

- **Resolution**: 1920x1080 (Full HD) or 1280x720 (HD)
- **Aspect Ratio**: 16:9
- **Frame Rate**: 24-30 fps
- **Duration**: 5-15 seconds (looping videos)
- **File Size**: Keep under 5MB per video for optimal performance
- **Codec**: H.264 for MP4, VP9 for WebM

### Optimization Tips:

1. Use compressed video formats to reduce loading time
2. Keep videos short (5-15 seconds) as they loop
3. Mute audio or remove audio tracks (videos autoplay muted)
4. Use tools like HandBrake or FFmpeg for compression
5. Test on mobile devices to ensure smooth playback

## Quick Video Compression Commands

### Using FFmpeg:

**For MP4:**

```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -vf scale=1920:1080 -an output.mp4
```

**For WebM:**

```bash
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -vf scale=1920:1080 -an output.webm
```

**Generate Poster Image:**

```bash
ffmpeg -i video.mp4 -ss 00:00:01 -vframes 1 poster.jpg
```

## Fallback Options

If you don't have video files yet, you can:

1. Use placeholder images instead
2. Replace `<video>` tags with `<img>` tags temporarily
3. Use stock hologram videos from free video sites like Pexels or Pixabay

## Performance Notes

The projects page includes automatic video optimization:

- Videos pause when not in viewport (Intersection Observer)
- Videos only play when visible on screen
- This improves performance and reduces bandwidth usage
