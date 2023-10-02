import { LoggedOut, LoggedIn } from "@hellocoop/nextjs";

export default function Hero() {
    return (
        <section>
            <h1 className="text-2xl">Add login and registration in seconds</h1>
            <div className="my-5">
                <LoggedOut>
                    <h2 className="text-2xl">Try out the demo</h2>
                </LoggedOut>
                <LoggedIn>
                    <h2 className="text-2xl">You are now logged in</h2>
                </LoggedIn>
            </div>
            <div className="text-left mx-auto w-64 mb-6">
                <LoggedOut>
                    <h3>You will be prompted to provide:</h3>
                </LoggedOut>
                <LoggedIn>
                    <h3>You just provided your:</h3>
                </LoggedIn>
                <ul className="list-disc list-inside">
                    <li className="font-semibold">Name</li>
                    <li className="font-semibold">Verified Email</li>
                    <li className="font-semibold">Profile Picture</li>
                </ul>
            </div>
        </section>
    )
}