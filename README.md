# Hellō Next.js Starter

This is a starter application for the Hellō Next.js SDK [@hellocoop/nextjs](https://www.npmjs.com/package/@hellocoop/nextjs) 

See a live version of the starter app at <https://hello-nextjs-starter.vercel.app>

## Getting started Tl;dr:
You will need: 
- nodejs 18+
- git
```
git clone https://github.com/hellocoop/hello-nextjs-starter.git
cd hello-nextjs-starter
npm install
npm run quickstart       # creates and adds Hellō config to next.config.js
npm run dev              # starts the server
```

Then open <http://localhost:3000> (assuming port 3000 was free)

You will be running a local node server configured with Hellō is less than a minute.

## Deploy to Vercel

### Create your own fork of hello-nextjs-starter
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

### Deploy to Vercel

Login to Vercel, link your GitHub (or other) account, and then select your `hello-nextjs-starter` repo and deploy it.

No configuration needed at Vercel! 

The first time you login to your deployed app, you will be prompted to add the Redirect URI to your app at the [Hello Developer Console](https://console.hello.coop/). For development deployments, add to your Development Redirect URIs, for production or deployments you want others to access, add to your Production Redirect URIs.

---
## Learn More
- [Hellō Next.js SDK](https://www.npmjs.com/package/@hellocoop/nextjs)
- [Hellō Quickstart for Next.js](https://www.npmjs.com/package/@hellocoop/quickstart-nextjs)
- [Hellō Documentation](https://www.hello.dev/documentation)
