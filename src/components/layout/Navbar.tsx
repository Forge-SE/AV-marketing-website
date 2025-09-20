'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Navbar = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const [hash, setHash] = useState<string>("")
  const [scrolled, setScrolled] = useState(false)

  // Track URL hash for in-page navigation highlighting (e.g., #about)
  useEffect(() => {
    const updateHash = () => setHash(window.location.hash || "")
    updateHash()
    window.addEventListener('hashchange', updateHash)
    return () => window.removeEventListener('hashchange', updateHash)
  }, [])

  // Close mobile menu on route/hash change
  useEffect(() => {
    if (open) setOpen(false)
  }, [pathname, hash])

  // Toggle translucent background + blur when user scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems= [
    {name: "Home", link: "/"},
    {name: "About", link: "#about"},
    {name: "Our Focus", link: "#our-focus"},
    {name: "Our Leadership", link: "/#our-leadership"},
    {name: "Investors & Partners", link: "#investors-and-partners"},
    {name: "The Energy Fund", link: "/energy-fund"},
  ]

  const isActive = (link: string) => {
    if (link.startsWith('#')) {
      // Only highlight hash links on the homepage
      return pathname === '/' && hash === link
    }
    // Exact path match for top-level routes
    return pathname === link
  }
  return (
    <nav
      className={`w-full sticky top-0 z-50 px-4 md:py-2 sm:p-5 transition-colors duration-300 border-b
        ${scrolled ? 'bg-white/70 supports-[backdrop-filter]:bg-white/60 backdrop-blur-md border-slate-200/60 shadow-sm' : 'bg-transparent border-transparent'}
      `}
    >
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <Link href="/" className='inline-flex'>
          <Image src="/logo.png" alt="Afrovivo Logo" width={100} height={50} className='ml-2 sm:ml-4'/>
        </Link>
        <button
          aria-label='Toggle menu'
          className='sm:hidden inline-flex items-center justify-center p-2 rounded border border-slate-300'
          onClick={() => setOpen(!open)}
        >
          <span className='i-[menu]'>☰</span>
        </button>
        <div className='hidden sm:flex items-center gap-4'>
          {navItems.map((item, index)=>(
            <Link
              key={index}
              href={item.link}
              onClick={() => setOpen(false)}
              className={`hover:text-orange-900 ${isActive(item.link) ? 'text-orange-900 font-medium underline underline-offset-4 decoration-orange-900/50' : ''}`}
            >
              {item.name}
            </Link>
          ))}
          <button className='bg-orange-900 text-white px-4 py-2 rounded-sm text-sm hover:bg-orange-600'>Get Started</button>
        </div>
      </div>
      {open && (
        <div className='sm:hidden mt-3 flex flex-col gap-3 px-2 py-3 bg-white/95 supports-[backdrop-filter]:bg-white/80 backdrop-blur-md border border-slate-200 rounded-md shadow-sm'>
          {navItems.map((item, index)=>(
            <Link
              key={index}
              href={item.link}
              onClick={() => setOpen(false)}
              className={`py-2 border-b border-slate-200 ${isActive(item.link) ? 'text-orange-900 font-medium' : ''}`}
            >
              {item.name}
            </Link>
          ))}
          <button className='mt-2 bg-orange-900 text-white px-4 py-2 rounded-sm text-sm hover:bg-orange-600 w-full'>Get Started</button>
        </div>
      )}
    </nav>
  )
}

export default Navbar

