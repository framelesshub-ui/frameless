# 🎬 Portfolio Videos Directory

Upload your portfolio video files (`.mp4`, `.webm`) here.

### How to Upload on GitHub:
1. Click **"Add file"** > **"Upload files"** in the top right of this folder.
2. Drag and drop your `.mp4` video files.
3. Commit changes.

### Recommended File Naming:
- `birlas-parvai.mp4`
- `ora-kitchen-commercial.mp4`
- `aura-home-reel.mp4`
- `frameless-media-intro.mp4`

### Automatic URL Path:
Any video uploaded here will automatically be available at:
`https://www.framelesshub.com/media/videos/<your-file-name>.mp4`

In `src/data/projects.ts`, simply link it as:
```typescript
video: '/media/videos/<your-file-name>.mp4',
```
