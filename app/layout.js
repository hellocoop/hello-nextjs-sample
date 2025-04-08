import "./globals.css";

export const metadata = {
  title: "Hellō Next.js Sample",
  description: "Login and registration in seconds",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="title" content="Hellō Next.js Sample"/>
        <meta name="description" content="Login and registration in seconds"/>
        <link rel="icon" href="https://cdn.hello.coop/images/favicon-light.png"  media="(prefers-color-scheme: light)" />
        <link rel="icon" href="https://cdn.hello.coop/images/favicon-dark.png" media="(prefers-color-scheme: dark)" />
        <link rel="stylesheet" href="https://cdn.hello.coop/css/hello-btn.css"/>
        <script defer data-domain="hello-nextjs-sample.vercel.app" src="https://plausible.io/js/script.js"/>
      </head>
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
