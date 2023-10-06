export default function ProfileContainer({ children, heading }) {
    return (
        <section className="flex flex-col items-start">
            <h1 className="text-2xl font-medium">{heading}</h1>
            <div className="bg-[#E8E8E8] dark:bg-[#303030] p-6 rounded-md w-full mt-4 text-left space-y-4">
                {children}
            </div>
        </section>
    )
}