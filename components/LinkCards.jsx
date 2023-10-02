import Link from "next/link";

const links = [
    {
        text: "Learn more about Hellō",
        link: "https://www.hello.coop"
    },
    {
        text: "Read the Hellō Developer Documentation",
        link: "https://www.hello.dev"
    },
    {
        text: "View the source code for the starter app",
        link: "https://www.github.com/hellocoop/hello-nextjs-starter"
    },
]

export default function LinkCards() {
    return (
        <section className="flex flex-wrap justify-between mt-10">
            {links.map(i => 
                <Link href={i.link} target="_blank" key={i.link} className="link-card cursor-pointer w-72 h-32 border dark:border-[white] border-[#303030] dark:border-opacity-25 border-opacity-25 hover:border-opacity-60 dark:hover:border-opacity-25 rounded-lg text-left flex flex-col items-start justify-between p-4 dark:hover:bg-[#202020] transition-color duration-200">
                    <span className="font-medium text-lg">{i.text}</span>
                    <span className="opacity-80">{new URL(i.link).hostname}</span>
                </Link>    
            )}
        </section>
    )
}