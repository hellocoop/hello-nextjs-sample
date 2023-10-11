import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="title" content="Hellō Next.js Starter"/>
                <meta name="description" content="Login and registration in seconds"/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}