# Hellō Next.js Starter

## Getting started Tl;dr:
You will need: 
- nodejs 18+
- git
```
git clone https://github.com/hellocoop/hello-nextjs-starter.git
cd hello-nextjs-starter
npm install
npm run quickstart       # creates and adds Hellō config to next.config.js
npm run dev
```

Then open <http://localhost:3000> (assuming port 3000 was free)

You will be running a local node server configured with Hellō is less than a minute.

## Deploy to Vercel / Netlify

### 1. Create your own fork
You will need:
- git
- gh 
- Vercel or Netlify account
```
git remote rename origin upstream
gh repo create --source ./ --private
git add *
git commit -a -m"quickstart"
git push origin
```

### 2 Deploy to Vercel or Netlify

Login to Vercel / Netlify and link your GitHub (or other) account, and then select the `hello-nextjs-starter` repo and deploy it.
