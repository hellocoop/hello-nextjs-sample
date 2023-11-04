import Link from "next/link"

const links = [
    {
        text: "Add Hellō to your Next.js app<br/>hello-nextjs-sample",
        link: "https://www.hello.dev/docs/quickstarts/nextjs",
        linkText: "helo.dev"
    },
    {
        text: "Checkout this sample app<br/>hello-nextjs-sample",
        link: "https://github.com/hellocoop/hello-nextjs-sample",
        linkText: "GitHub"
    },
    {
        text: "Learn more about Hellō",
        link: "https://www.hello.coop",
        linkText: "hello.cop"
    },
]

const LinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 inline-block ml-1 mb-1 opacity-70">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
)

export default function Info() {
    return (
        <section>
            <hr className="border-black dark:border-white opacity-25 my-10"/>
            <p>
                This sample app demonstrates how you can add Hellō login and registration to a Next.js app in seconds
                with the <Link target="_blank" href="https://www.npmjs.com/package/@hellocoop/quickstart">@hellocoop/quickstart</Link><LinkIcon/> and <Link target="_blank" href="https://www.npmjs.com/package/@hellocoop/nextjs">@hellocoop/nextjs</Link><LinkIcon/> packages.<br/>
                User profile data is stored in an encrypted and integrity protected cookie.</p>
            <div className="flex flex-wrap justify-between mt-10 gap-0">
                {links.map(i => 
                    <Link href={i.link} target="_blank" key={i.link} className="link-card w-full lg:w-72 h-32 cursor-pointer">
                        <span className="border dark:border-[white] border-charcoal dark:border-opacity-25 border-opacity-25 hover:border-opacity-60 dark:hover:border-opacity-25 rounded-lg p-4 dark:hover:bg-[#202020] text-left flex flex-col items-start justify-between">
                            <span className="font-medium text-lg" dangerouslySetInnerHTML={{__html: i.text}} />
                            <span className="opacity-80">{i.linkText}</span>
                        </span>
                    </Link>    
                )}
            </div>
        </section>
    )
}