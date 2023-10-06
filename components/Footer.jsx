import Link from "next/link";

export default function Footer() {
    return (
        <footer className="h-12 w-full bg-[#303030] flex items-center justify-center space-x-4 text-sm text-[#d4d4d4]">
            <Link href="https://www.hello.coop/terms-of-service.html" className="hover:underline">Terms of Service</Link>
            <Link href="https://www.hello.coop/privacy-policy.html" className="hover:underline">Privacy Policy</Link>
        </footer>
    )
}