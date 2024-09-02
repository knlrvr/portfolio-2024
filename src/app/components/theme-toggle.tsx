"use client"

import * as React from "react"
import { LuMoon, LuSunDim } from 'react-icons/lu'
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <>
        <Button variant='ghost' className="h-fit w-fit hover:bg-transparent p-0 mt-1.5">
          <LuSunDim onClick={() => setTheme('dark')}
            className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <LuMoon onClick={() => setTheme('light')}
            className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
</>
  )
}
