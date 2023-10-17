# Hellō Next.js Starter

This is a starter application for the Hellō Next.js SDK [@hellocoop/nextjs](https://www.npmjs.com/package/@hellocoop/nextjs)

See a deployed version  at [https://hello-nextjs-starter.vercel.appss](https://hello-nextjs-starter.vercel.app)

To run locally, you will need:

- [nodejs 18+](https://nodejs.org/en/download)
- [git](https://github.com/git-guides/install-git)
- A [GitHub](https://github.com) account

## 1\. Fork this repository to your GitHub account

<https://github.com/hellocoop/hello-nextjs-starter/fork>

## 2\. Clone your fork to your local machine
[How to clone a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

- Click on the `[ Code ]` button above and copy the address of your forked repo to your clipboard.
- Open a terminal on your machine, and type `git clone ` and then paste in the address you copied. 

This will create a `hello-nextjs-starter` directory on your machine with the contents of this repo.

## 3\. Install, setup, commit, push, and run!

Run these commands to start running locally:

```sh
cd hello-nextjs-starter
npm install
npm run quickstart
git add *
git commit -a -m"quickstart"
git push origin
npm run dev
```

Open <http://localhost:3000> (assuming port 3000 was free)

## 4\. Deploy to Vercel and open your deployment

You will need:

- A [Vercel](https://vercel.com) account linked to your GitHub account so it can access the repo you just created
- Vercel CLI that is logged into your Vercel account 

These commands will install the Vercel CLI and login

```sh
npm install -g vercel
vercel login
```

These commands will build and deploy your repo to Vercel and then load the deployed site:

```sh
DEPLOYMENT=$(vercel --yes)
npx open-cli $DEPLOYMENT
```

No other configuration needed at Vercel!

### How Configuration Works
The Hellō Quickstart Web App created your application at Hellō and returned your `client_id`. You are able to use your app on your own machine immediately as `http://localhost:*` Redirect URIs are enabled for your development team by default.

You are able to access your app when deployed as we have enabled `https://*` Redirect URIs for members of your development team. The first time you login to your deployed app, the [@hellocoop/nextjs](https://www.npmjs.com/package/@hellocoop/nextjs) package auto configures the `redirect_uri`, and on return you will be prompted to add the Redirect URI to your app at the [Hello Developer Console](https://console.hello.coop/). For development deployments, add to your Development Redirect URIs, for production or deployments you want others to access, add to your Production Redirect URIs.

---

## Learn More

- [Hellō Next.js SDK](https://www.npmjs.com/package/@hellocoop/nextjs) NOTE - the Next.js SDK API is under development and will change
- [Hellō Quickstart for Next.js](https://www.npmjs.com/package/@hellocoop/quickstart-nextjs)
- [Hellō Documentation](https://www.hello.dev/documentation)
