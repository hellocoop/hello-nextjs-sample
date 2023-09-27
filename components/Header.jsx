export default function Header() {
    return (
        <header className="h-12 w-full bg-[#303030]">
            <div className="max-w-3xl flex h-full mx-auto">
                {/* Use next/image */}
                <div className="inline-flex items-center space-x-3">
                    <img src="hello.svg" className="h-4" />
                    <img src="next.svg" className="h-4" />
                </div>
            </div>
        </header>
    )
}