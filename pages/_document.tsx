import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <title>Hellō Next.js Starter</title>
                <meta name="title" content="Hellō Next.js Starter"/>
                <meta name="description" content="Login and registration in seconds"/>
                <link href="https://cdn.hello.coop/css/hello-btn.css" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}