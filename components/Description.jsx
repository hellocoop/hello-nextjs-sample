import Link from "next/link"

const LinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 inline-block ml-1 mb-1 opacity-70">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
)

export default function Description() {
    return (
        <>
            <hr className="border-black dark:border-white opacity-25 my-10"/>
            <p>
                This starter app demonstrates how you can add Hellō login and registration to a Next.js app in seconds
                with the <Link target="_blank" href="https://www.npmjs.com/package/@hellocoop/quickstart-nextjs">@hellocoop/quickstart-nextjs</Link><LinkIcon/> and <Link target="_blank" href="https://www.npmjs.com/package/@hellocoop/nextjs">@hellocoop/nextjs</Link><LinkIcon/> packages.<br/>
                User profile data is stored in a signed and encrypted cookie using <Link target="_blank" href="https://www.npmjs.com/package/iron-session">iron-session</Link><LinkIcon/>.
            </p>
        </>
    )
}