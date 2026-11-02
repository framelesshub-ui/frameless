# 🏷️ Client Logos Directory

Upload client brand logos (`.png`, `.svg`, `.webp`) here.

### Existing Client Logos:
- `birlas-parvai.png` — Official Birlas Parvai Logo
- `supratha-wellness.png` — Official Supratha Wellness Logo
- `frameless-media.png` — Official Frameless Media Logo
- `ora-kitchen.png` — Official ORA Kitchen Logo

### How to Upload on GitHub:
1. Click **"Add file"** > **"Upload files"** in the top right.
2. Drag and drop transparent `.png` or `.svg` logo files.
3. Commit changes.

### Recommended File Naming:
- `client-name.png` (e.g. `brand-name.png`)

### Automatic URL Path:
Any logo uploaded here will automatically be available at:
`https://www.framelesshub.com/media/clients/<your-file-name>.png`

In `src/data/projects.ts`, simply link it as:
```typescript
logo: '/media/clients/<your-file-name>.png',
```
