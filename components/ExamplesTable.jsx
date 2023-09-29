import Link from "next/link";

export default function ExamplesTable() {
    return (
        <section className="mt-10">
            <h2 className="text-xl">Examples</h2>
            <h3 className="opacity-75">Look in the x folder to see how to use <Link target="_black" href="https://www.npmjs.com/package/@hellocoop/nextjs">@hellocoop/nextjs</Link></h3>
            <div className="border rounded-md border-white border-opacity-25 mt-4">
                <div className="flex">
                    <span className="flex w-64 p-3 border-r border-white border-opacity-25 border-b border-white border-opacity-25">Client Side Rendering</span>
                    <span className="p-3 w-full text-left border-b border-white border-opacity-25">Lorem, ipsum dolor sit amet consectetur adipisicing elit</span>
                </div>
                <div className="flex">
                    <span className="flex w-64 p-3 border-r border-white border-opacity-25">Server Side Rendering</span>
                    <span className="p-3 w-full text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit</span>
                </div>
            </div>
        </section>
    )
}