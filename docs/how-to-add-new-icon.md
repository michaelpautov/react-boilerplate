# How to add new icon

This document describes adding icons

## Guidelines:

1. In figma select icon and then go to main component
2. Select larger icon in block
3. Select from left sidebar parent of icon (example: ◊ 24)
4. Right Sidebar click to export, select type svg and download
5. Go to src/components/icon/assets
6. Create file with name which used for figma (example: Basic/settings should be basic-settings.tsx)
7. Create react component and re-write fill to 'currentColor', and width and height should be '100%'
8. Export icon to src/components/icon/assets/index.ts
9. Add your icon to icons list src/components/icon/icons.ts

Now, You be able to use your icon
