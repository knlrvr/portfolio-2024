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
            <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 sm:gap-8 mb-16">
                <div className="">
                    <p className="tracking-tight text-sm text-neutral-500">{title}</p>
                </div>
                <div className="sm:col-span-5">{children}</div>
            </div>
        </Reveal>
    )
}

export function Subsection({
    children
}: {
    children: React.ReactNode,
}) {
    return (
        <Reveal>
            <div>
                {children}
            </div>
        </Reveal>
    )
}

export function SmallSection({
    title, 
    children,
}: {
    title: string,
    children: React.ReactNode,
}) {
    return (
        <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 sm:gap-8 mb-8">
                <div className="">
                    <p className="tracking-tight text-sm text-neutral-500">{title}</p>
                </div>
                <div className="sm:col-span-5">{children}</div>
            </div>
        </Reveal>
    )
}

export function InfoSection({
    title, 
    children
}: {
    title: string,
    children: React.ReactNode,
}) {
    return (
        <Reveal>
            <div className="grid grid-cols-1 gap-4 text-sm">
                <div className="">
                    <p className="tracking-tight text-neutral-500">{title}</p>
                </div>
                <div className="sm:col-span-5">{children}</div>
            </div>
        </Reveal>
    )
}