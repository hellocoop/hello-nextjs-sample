export default function LinkCards() {
    return (
        <section className="flex flex-wrap justify-between">
            {[...Array(3)].map(i => (
                <div className="w-56 h-36 border border-white border-opacity-25 rounded-md text-left flex flex-col items-start justify-between p-4">
                    <span>Learn more<br/>about Hellō</span>
                    <span>www.hello.coop</span>
                </div>
            ))}
        </section>
    )
}