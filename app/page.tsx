'use client'

import { useUser, SignInButton } from "@hellocoop/nextjs"

export default function Home() {

    return (
        <main className='max-w-4xl mx-auto p-4'>
            <header className='flex justify-between items-center'>
                <h1 className='text-2xl font-semibold'>Hellō Next.js Example App</h1>
            </header>
            <hr className='my-4'/>
                <section className='max-w-xl mx-auto p-4'>
                    <h2 className='text-xl text-left px-4'>Your Profile</h2>
                    <ul className='divide-y'>

                        <li className='p-4'>
                            <div className='flex flex-col'>
                                <span className='text-xs opacity-60 uppercase'>Name</span>
                                {/* <span className='text-lg'>{user.name}</span> */}
                            </div>
                        </li>
                        <li className='flex flex-col p-4'>
                            <span className='text-xs uppercase opacity-60'>JSON Payload</span>
                            {/* <pre className='text-sm mt-2 font-mono'>{JSON.stringify(user, null, 2)}</pre> */}
                        </li>
                    </ul>
                </section> : 
                <section className='max-w-xl mx-auto p-4 flex flex-col items-center'>
                    <h2 className='text-xl text-left px-4 font-semibold'>Lorem Ipsum</h2>
                    <p className='text-center px-4 mt-4'>This example demonstrates how to set up user authentication with Hellō and session management with iron-session. It is based off the with-iron-session example, which uses a signed and encrypted cookie to store session data.</p>
                    <ul className='mt-4 mb-8 flex space-x-2'>
                        <li>Name</li>
                        <li>• Email •</li>
                        <li>Picture</li>
                    </ul>
                    <SignInButton/>
                    <div className='space-x-8 mt-12'>
                        <a href="https://www.hello.coop" className='underline inline-flex items-center'>Learn more about Hellō <svg xmlns="http://www.w3.org/2000/svg" className="h-4 ml-1 mt-0.5 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a>
                        <a href="https://www.hello.dev" className='underline inline-flex items-center'>Hellō Developer Docs<svg xmlns="http://www.w3.org/2000/svg" className="h-4 ml-1 mt-0.5 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a>
                    </div>
                </section>
        </main>
    )
}