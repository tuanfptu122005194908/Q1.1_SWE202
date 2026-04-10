# Huong Dan Deploy Len Render

## Tong Quan
Render la platform hosting cho web applications, hoan thien cho React/Vite project nhu Prompt Pal.

## Buoc 1: Chuang Bi Project

### 1.1 Kiem Tra Git Repository
Dam bao project da push len GitHub:
```bash
git status
git push origin main
```

### 1.2 Kiem Tra Build Command
Kiem tra file `package.json`:
```json
{
  "scripts": {
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### 1.3 Cap Nhat Vite Config (Neu Can)
File `vite.config.ts`:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
```

## Buoc 2: Dang Ky Tai Khoan Render

1. Truy cap: https://render.com/
2. Click **"Sign Up"**
3. Dang ky bang:
   - GitHub Account (de nhat)
   - Google Account
   - Email thuong

### Kiem Tra GitHub Integration
- Sau khi dang ky, click avatar > **"Account Settings"**
- Chon **"GitHub"** tab
- Dam sure da connect GitHub repository

## Buoc 3: Tao Web Service

### 3.1 Tao New Web Service
1. Login vao Render dashboard
2. Click **"New +"** > **"Web Service"**
3. Chon **"Connect a repository"**
4. Chon repository: `tuanfptu122005194908/Q1.1_SWE202`
5. Click **"Connect"**

### 3.2 Cau Hinh Web Service

#### Basic Settings:
- **Name**: `prompt-pal-app` (hoac ten bat ky)
- **Region**: chon region gan nhat (Singapore/EU/US)
- **Branch**: `main`

#### Build Settings:
- **Runtime**: `Node`
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`

#### Start Command:
- **Start Command**: `npm run preview`

#### Environment Variables:
```bash
# Neu co environment variables
NODE_ENV=production
```

### 3.3 Advanced Settings (Optional)

#### Auto-Deploy:
- **Auto-Deploy**: Yes (tu dong deploy khi push code)
- **Branch**: main

#### Health Check Path:
- **Health Check Path**: `/`

## Buoc 4: Deploy

1. Review all settings
2. Click **"Create Web Service"**
3. Cho Render deploy (thuong mat 2-5 phut)

### Theo Doi Deploy Process:
- **Build Step**: Install dependencies & build
- **Deploy Step**: Start server
- **Status**: "Live" khi hoan thanh

## Buoc 5: Kiem Tra Va Fix Loi

### 5.1 Kiem Tra URL
Sau khi deploy xong, Render se cung cap URL:
```
https://prompt-pal-app.onrender.com
```

### 5.2 Loi Thuong Gap

#### "Build Failed"
```bash
# Kiem tra build local
npm run build

# Common issues:
- Missing dependencies
- Syntax errors
- Vite config problems
```

#### "Application Not Responding"
```bash
# Kiem tra preview command
npm run preview

# Fix trong package.json:
"scripts": {
  "preview": "vite preview --host 0.0.0.0 --port 10000"
}
```

#### "404 Errors"
- Kiem tra `base` trong `vite.config.ts`
- Neu deploy vao subfolder:
```typescript
export default defineConfig({
  base: '/prompt-pal-app/',
  // ...
})
```

## Buoc 6: Custom Domain (Optional)

### 6.1 Add Custom Domain
1. Trong Web Service settings
2. Chon **"Custom Domains"**
3. Add domain: `yourdomain.com`
4. Follow DNS instructions

### 6.2 SSL Certificate
- Render tu dong cap SSL certificate
- Mat 5-10 phut de active

## Buoc 7: Optimization Tips

### 7.1 Build Optimization
```typescript
// vite.config.ts
export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-button']
        }
      }
    }
  }
})
```

### 7.2 Cache Headers
```javascript
// Neu dung custom server
app.use(express.static('dist', {
  maxAge: '1y',
  etag: true
}))
```

## Buoc 8: Monitoring

### 8.1 Render Dashboard
- **Logs**: Xem error logs
- **Metrics**: CPU, Memory usage
- **Events**: Deploy history

### 8.2 Health Checks
```typescript
// Them health check endpoint
// src/components/HealthCheck.tsx (neu can)
```

## Troubleshooting

### Common Issues & Solutions

#### 1. "Cannot find module"
```bash
# Delete node_modules va package-lock.json
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### 2. "Port already in use"
```bash
# Render tu dong assign port
# Khong can fix manual
```

#### 3. "CORS issues"
```typescript
// Neu co API calls
// Them CORS headers neu can
```

#### 4. "Slow loading"
- Optimize images
- Use code splitting
- Enable gzip compression

## Alternative: Static Site Deploy

Neu chi can static site (khong can server):

### 1. Tao Static Build
```json
// package.json
{
  "scripts": {
    "build": "vite build",
    "start": "serve -s dist -l 10000"
  }
}
```

### 2. Dung Static Site Service
- **Vercel** (de nhat cho React)
- **Netlify**
- **GitHub Pages**

## Render Pricing

### Free Tier:
- **750 hours/month** (sufficient cho hobby projects)
- **Custom domain**
- **SSL certificate**
- **Auto-deploys**

### Paid Plans:
- **Starter**: $7/month
- **Standard**: $19/month
- **Pro**: $49/month

## Quick Checklist

- [ ] GitHub repository up-to-date
- [ ] `npm run build` works locally
- [ ] `npm run preview` works locally  
- [ ] Connected GitHub to Render
- [ ] Correct build command
- [ ] Correct publish directory
- [ ] Environment variables set
- [ ] Custom domain (if needed)
- [ ] SSL certificate active
- [ ] Health checks passing

## Support

- **Render Documentation**: https://render.com/docs
- **Render Status**: https://status.render.com
- **Community**: https://community.render.com
- **Email**: support@render.com

---

**Lu y:** Render free tier co limit, neu app cao traffic hay xem pricing plans.
