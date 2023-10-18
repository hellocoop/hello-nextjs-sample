import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <meta name="title" content="Hellō Next.js Starter"/>
                <meta name="description" content="Login and registration in seconds"/>
                <link rel="icon" href="https://cdn.hello.coop/images/favicon-light.png"  media="(prefers-color-scheme: light)" />
                <link rel="icon" href="https://cdn.hello.coop/images/favicon-dark.png" media="(prefers-color-scheme: dark)" />
                
                <link rel="stylesheet" href="https://cdn.hello.coop/css/hello-btn.css"/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}