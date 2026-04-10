# Render Deployment Fix

## Current Issue
- Service Type: Static Site (should be Web Service)
- Build Command: bun install (should be npm run build)
- Missing start command for preview

## Quick Fix Steps

### Option 1: Update Current Service
1. Go to Render Dashboard
2. Click "Q1.1_SWE202" service
3. Go to Settings > Build & Deploy
4. Update:
   - Build Command: `npm run build`
   - Start Command: `npm run preview`
5. Save and trigger manual deploy

### Option 2: Delete & Recreate (Recommended)
1. Delete current service
2. Create NEW > Web Service (not Static Site)
3. Use these settings:
   - Build Command: `npm run build`
   - Start Command: `npm run preview`
   - Publish Directory: `dist`

### Option 3: Use render.yaml
The render.yaml file should auto-configure everything when you reconnect the repo.

## Why Static Site Failed
Static Sites only serve static files, but React apps need a server to handle client-side routing.
Web Service provides Node.js environment for npm run preview.
