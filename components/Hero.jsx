import { LoggedOut } from "@hellocoop/nextjs";

export default function Hero() {
    return (
        <section>
            <div className="space-y-1 mb-6">
                <h1 className="text-2xl">Add login and registration in seconds</h1>
                <LoggedOut>
                    <h2 className="text-2xl font-thin">Try out the demo</h2>
                </LoggedOut>
            </div>
            <LoggedOut>
                <div className="text-left mx-auto w-64 mb-6">
                    <h3>You will be prompted to provide:</h3>
                    <ul className="list-disc list-inside">
                        <li className="font-semibold">Name</li>
                        <li className="font-semibold">Verified Email</li>
                        <li className="font-semibold">Profile Picture</li>
                    </ul>
                </div>
            </LoggedOut>
        </section>
    )
}