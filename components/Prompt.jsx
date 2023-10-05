
export default function Prompt() {
    return (
        <section>
            <h1 className="text-[5vw] xs:text-2xl italic">Add login and registration in seconds</h1>
            <div className="my-6">
                <h2 className="text-[12vw] xs:text-[3.42rem]">Try out the demo</h2>
            </div>
            <div className="text-left mx-auto w-64 mb-6 pl-4">
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
