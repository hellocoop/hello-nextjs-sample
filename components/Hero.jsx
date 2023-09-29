export default function Hero() {
    return (
        <section>
            <div className="space-y-1">
                <h1 className="text-2xl">Login and registration in less than a minute</h1>
                <h2 className="text-2xl font-thin">Try out the demo</h2>
            </div>
            <div className="text-left mx-auto w-64 my-6">
                <h3>You will be prompted to provide:</h3>
                <ul className="list-disc list-inside">
                    <li className="font-semibold">Name</li>
                    <li className="font-semibold">Verified Email</li>
                    <li className="font-semibold">Profile Picture</li>
                </ul>
            </div>
        </section>
    )
}