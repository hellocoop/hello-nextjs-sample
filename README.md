# Hellō Next.js Starter

Getting started Tl;dr:

```
git clone https://github.com/hellocoop/hello-nextjs-starter.git
cd hello-nextjs-starter
npm install
npm run dev
```

Then open <http://localhost:3000> (assuming port 3000 was free)

You will be running a local node server configured with Hellō is less than a minute.

Prerequisites:

- nodejs 18+
- git

To create a fork in your own GitHub repository

- requires `gh` 

```
# commit the config updates
git commit -a -m"set Hellō config"

# make sure we can login to GiitHub
gh auth login

# create the repo 
gh repo create hello-nextjs-starter --private

# set remote to be your fork and push code up
git remote set-url origin hello-nextjs-starter
git push
```