# Deployment Guide - MBBS Physiology Exam Portal

## Option 1: Netlify Drop (Easiest - No Account Needed)

1. Go to **https://app.netlify.com/drop**
2. Drag and drop the `physiology-exam` folder onto the page
3. You'll get a free URL like `https://random-name-12345.netlify.app`
4. Done! Your site is live

## Option 2: Vercel (Fast & Free)

1. Go to **https://vercel.com** and sign up for free
2. Install Vercel CLI: `npm i -g vercel`
3. Run in this directory:
   ```bash
   cd /home/karan/physiology-exam
   vercel
   ```
4. Follow the prompts — you'll get a URL like `https://physiology-exam.vercel.app`

## Option 3: GitHub Pages (Free & Reliable)

1. Create a free account at **https://github.com**
2. Create a new repository named `physiology-exam`
3. Upload all files (`index.html`, `style.css`, `script.js`, `question_bank.json`)
4. Go to **Settings → Pages** → Select branch `main` → Save
5. Your site will be live at `https://yourusername.github.io/physiology-exam`

## Option 4: Cloudflare Pages (Fast & Free)

1. Go to **https://pages.cloudflare.com** and sign up
2. Create a new project → Upload your files
3. Deploy — you'll get a URL like `https://physiology-exam.pages.dev`

## Option 5: Render (Free Static Sites)

1. Go to **https://render.com** and sign up
2. Click **New → Static Site**
3. Upload your files or connect a GitHub repo
4. Deploy — free URL provided

## Option 6: Firebase Hosting (Free Tier)

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Run:
   ```bash
   cd /home/karan/physiology-exam
   firebase init hosting
   firebase deploy
   ```
3. You'll get a URL like `https://your-project.web.app`

## Recommended: Netlify Drop for Quick Sharing

The fastest way to share with students:
1. Open https://app.netlify.com/drop
2. Drag the folder
3. Copy the URL and share it!

## Files Needed for Deployment

- `index.html` — Main page
- `style.css` — Styles
- `script.js` — Exam logic
- `question_bank.json` — Question data (auto-generated)
