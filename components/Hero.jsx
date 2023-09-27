export default function Hero() {
    return (
        <section>
            <div className="inline-flex items-center space-x-4">
                <img src="hello.svg" className="h-6" />
                <img src="next.svg" className="h-6" />
            </div>
            <h1 className="text-2xl">Login and registration in less than a minute</h1>
            <div className="text-left mx-auto w-64">
                <h2 className="font-semibold">Try out the demo.</h2>
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