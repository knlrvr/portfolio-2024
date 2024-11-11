import { Reveal } from "../utils/reveal"

export function Section({
    title, 
    children,
}: {
    title: string,
    children: React.ReactNode,
}) {
    return (
        <Reveal>
            <div className="flex flex-col space-y-6 text-sm">
                <div className="flex gap-2 items-center">
                    {/* <LuCornerRightUp className="text-neutral-500 rotate-90" /> */}
                    <p className="tracking-tighter text-2xl text-neutral-600 dark:text-neutral-400">{title}</p>
                </div>
                <div className="">{children}</div>
            </div>
        </Reveal>
    )
}

export function Subsection({
    title, 
    children
}: {
    title: string,
    children: React.ReactNode,
}) {
    return (
        <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-4 text-sm gap-2 sm:gap-4">
                <div className="col-span-1 text-neutral-500 font-light tracking-wide">
                    {title}
                </div>
                <div className="col-span-3">
                    {children}
                </div>
            </div>
        </Reveal>
    )
}