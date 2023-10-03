import Link from "next/link";

const links = [
    {
        text: "Learn about this app<br/>hello-nextjs-starter",
        link: "https://github.com/hellocoop/hello-nextjs-starter",
        linkText: "GitHub"
    },
    {
        text: "Learn how to use the<br/>@hellocoop/nextjs package",
        link: "https://www.npmjs.com/package/@hellocoop/nextjs",
        linkText: "npm"
    },
    {
        text: "Learn how to customize the<br/>Hellō experience",
        link: "https://www.hello.dev/documentation",
        linkText: "hello.dev"
    },
]

export default function LinkCards() {
    return (
        <section className="flex flex-wrap justify-between mt-10 gap-4">
            {/* {links.map(i => 
                <Link href={i.link} target="_blank" key={i.link} className="link-card cursor-pointer w-full lg:w-72 h-32 border dark:border-[white] border-[#303030] dark:border-opacity-25 border-opacity-25 hover:border-opacity-60 dark:hover:border-opacity-25 rounded-lg text-left flex flex-col items-start justify-between p-4 dark:hover:bg-[#202020]">
                    <span className="font-medium text-lg" dangerouslySetInnerHTML={{__html: i.text}} />
                    <span className="opacity-80">{i.linkText}</span>
                </Link>    
            )} */}
        </section>
    )
}