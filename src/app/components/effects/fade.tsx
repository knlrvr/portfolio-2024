import { cn } from "@/lib/utils"
import { HTMLProps } from "react"

export const fadeZIndex = 10

export const Fade = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-[999] h-full w-full overflow-hidden">
      <FadeStrip pos="bottom" />
    </div>
  )
}

const FadeStrip = ({
  sizing = "100px",
  pos,
  className,
  ...rest
}: { sizing?: string; pos: "bottom" } & HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "to-[#111] fixed z-auto select-none from-transparent blur-[1px] backdrop-filter",
        "w-full",
        "-bottom-px bg-gradient-to-b",
        className
      )}
      style={{
        height: sizing,
        maskImage: "linear-gradient(to top, #111 20%, transparent)",
      }}
      {...rest}
    />
  )
}