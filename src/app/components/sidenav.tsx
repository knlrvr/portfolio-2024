'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Coffee, Rss, MessageCircle, Rocket, Sun, Moon, MoveRight } from 'lucide-react'
import AuthorCard from './authorcard'
import { Switch } from './ui/switch'
import { useTheme } from 'next-themes'
import { Reveal } from '../utils/reveal'

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Blog', href: '/blog', icon: Rss },
  { name: 'Guestbook', href: '/guestbook', icon: MessageCircle },
  { name: 'Tech', href: '/tech', icon: Rocket },
]

export default function Sidenav() {
  const pathname = usePathname()

  const { theme, setTheme } = useTheme();

  // default to system for theme 
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;


  return (
    <>
      {/* Sidebar for md and larger screens */}
      <aside className="fixed hidden sm:flex flex-col w-56 h-screen bg-background p-4">
        
        <Reveal>
            <AuthorCard />
        </Reveal>
        <nav className="mt-6">
          <ul className="space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.name}>
                <Reveal>
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-3 p-2 rounded-lg hover:bg-neutral-200 hover:bg-opacity-100 dark:hover:bg-[#222] dark:hover:bg-opacity-90 ${
                      (pathname === item.href || (item.name === 'Blog' && pathname.includes('blog'))) 
                        ? 'bg-neutral-200 dark:bg-[#222] dark:bg-opacity-90' 
                        : ''
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    <div className={`${(pathname === item.href || (item.name === 'Blog' && pathname.includes('blog'))) ? 'absolute right-4 text-neutral-500' : 'hidden'}`}>
                      <MoveRight className="w-3 h-3" />
                    </div>
                  </Link>
                </Reveal>
              </li>
            ))}
            <Reveal>
                <li className="pt-4">
                    <p className="text-neutral-500">Theme</p>
                    <div className="flex items-center mt-4 space-x-2 text-xs text-neutral-500">
                    <Switch
                        checked={theme === "dark"}
                        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                        aria-label="Toggle dark mode"
                    />
                    {theme === 'dark' ? (
                        <p>Dark Mode</p>
                    ) : (
                        <p>Light Mode</p>
                    )}
                    </div>
                </li>
            </Reveal>
          </ul>
        </nav>
      </aside>

      {/* Bottom navigation for screens smaller than sm */}
      
      <nav className="sm:hidden fixed z-[999] left-8 right-8 bottom-6 rounded-full backdrop-blur-sm bg-opacity-50 bg-white dark:bg-[#111] border border-neutral-200 dark:border-[#222] dark:backdrop-blur dark:bg-opacity-80">
        <ul className="flex items-center justify-around p-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex flex-col items-center py-2 px-4 rounded-full ${
                  pathname === item.href ? 'bg-neutral-200 dark:bg-[#222] dark:bg-opacity-9' : 'text-neutral-600 dark:text-neutral-400'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="text-xs mt-1 sr-only">{item.name}</span>
              </Link>
            </li>
          ))}

          <li className="mt-1.5 mr-1.5 ml-4">
                <Switch
                    checked={theme === "dark"}
                    onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                    aria-label="Toggle dark mode"
                />
          </li>
        </ul>
      </nav>
    </>
  )
}