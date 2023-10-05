import Link from "next/link"
import LinkIcon from "./LinkIcon"

export default function Description() {
    return <p>
        This starter app demonstrates how you can add Hellō login and registration to a Next.js app in seconds
        with the <Link target="_blank" href="https://www.npmjs.com/package/@hellocoop/quickstart-nextjs">@hellocoop/quickstart-nextjs</Link><LinkIcon/> and <Link target="_blank" href="https://www.npmjs.com/package/@hellocoop/nextjs">@hellocoop/nextjs</Link><LinkIcon/> packages.<br/>
        User profile data is stored in a signed and encrypted cookie using <Link target="_blank" href="https://www.npmjs.com/package/iron-session">iron-session</Link><LinkIcon/>.
    </p>
}