import { FiCornerRightDown } from "react-icons/fi"
import { Reveal } from "../utils/reveal"
import { LuCornerLeftDown, LuCornerLeftUp, LuCornerRightDown, LuCornerRightUp } from "react-icons/lu"


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
                    <p className="font-medium tracking-tighter text-2xl">{title}</p>
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
                <div className="col-span-1 text-neutral-500 font-light tracking-wide mb-2">
                    {title}
                </div>
                <div className="col-span-3">
                    {children}
                </div>
            </div>
        </Reveal>
    )
}