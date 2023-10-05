import Image from "next/image";
import { LoggedOut, LoggedIn, useUser } from "@/hellocoop-nextjs";

export default function Hero() {
    const user = useUser()

    return (
        <section>
            <h1 className="text-[5vw] xs:text-2xl italic">Add login and registration in seconds</h1>
            <div className="my-6">
                <LoggedOut>
                    <h2 className="text-[12vw] xs:text-[3.42rem]">Try out the demo</h2>
                </LoggedOut>
                
            </div>
            <div className="text-left mx-auto w-64 mb-6 pl-4">
                <LoggedOut>
                    <h3>You will be prompted to provide:</h3>
                    <ul className="list-disc list-inside">
                        <li className="font-semibold">Name</li>
                        <li className="font-semibold">Verified Email</li>
                        <li className="font-semibold">Profile Picture</li>
                    </ul>
                </LoggedOut>
            </div>
            <LoggedIn>
                <section className="relative h-64 bg-no-repeat bg-center bg-contain flex items-center justify-center text-[4vw] xs:text-2xl font-mono my-16">
                    Say Hellō to a Co-operative World<span className="blinker"></span>
                    <Image src="/world.png" alt="Hellō to a new World" className="absolute opacity-90" width={260} height={256}/>
                </section>

                <h1 className="text-2xl">{user?.name}</h1>
            </LoggedIn>
        </section>
    )
}