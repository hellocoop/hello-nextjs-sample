import Link from "next/link";

export default function Footer() {
    return (
        <footer className="h-12 w-full bg-[#303030] flex items-center justify-center space-x-4 text-sm">
            <Link href="https://www.hello.coop/terms-of-service.html">Terms of Service</Link>
            <Link href="https://www.hello.coop/privacy-policy.html">Privacy Policy</Link>
        </footer>
    )
}