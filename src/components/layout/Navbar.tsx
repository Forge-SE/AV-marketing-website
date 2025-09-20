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
  const [subOpen, setSubOpen] = useState(false)

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

  const showFundChildren = pathname === '/energy-fund'
  const energyFundSections = [
    { name: 'Overview', link: '#overview' },
    { name: 'Investment Strategy', link: '#strategy' },
    { name: 'Why Invest', link: '#why-invest' },
    { name: 'Fund Structure', link: '#fund-structure' },
    { name: 'Investor Benefits', link: '#investor-benefits' },
    { name: 'Partnerships', link: '#partnerships' },
    { name: 'Get in Touch', link: '#cta' },
  ]

  const navItems= [
    {name: "Home", link: "/"},
    {name: "About", link: "#about"},
    {name: "Our Focus", link: "#our-focus"},
    {name: "Our Leadership", link: "/#our-leadership"},
    {name: "Investors & Partners", link: "#investors-and-partners"},
    {name: "The Energy Fund", link: "/energy-fund", children: showFundChildren ? energyFundSections : undefined},
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
          {navItems.map((item, index)=>{
            if (item.children && showFundChildren) {
              return (
                <div key={index} className='relative group'>
                  <Link
                    href={item.link}
                    className={`hover:text-orange-900 ${isActive(item.link) ? 'text-orange-900 font-medium' : ''}`}
                  >
                    {item.name} <span className='ml-1'>▾</span>
                  </Link>
                  <div className='invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-150 absolute right-0 mt-2 w-56 bg-white/95 supports-[backdrop-filter]:bg-white/80 backdrop-blur-md border border-slate-200 rounded-md shadow-lg p-2'>
                    {item.children.map((child, ci) => (
                      <Link
                        key={ci}
                        href={`/energy-fund${child.link}`}
                        className={`block px-3 py-2 rounded hover:bg-slate-100 ${pathname === '/energy-fund' && hash === child.link ? 'text-orange-900 font-medium' : ''}`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            }
            return (
              <Link
                key={index}
                href={item.link}
                onClick={() => setOpen(false)}
                className={`hover:text-orange-900 ${isActive(item.link) ? 'text-orange-900 font-medium underline underline-offset-4 decoration-orange-900/50' : ''}`}
              >
                {item.name}
              </Link>
            )
          })}
          <button className='bg-orange-900 text-white px-4 py-2 rounded-sm text-sm hover:bg-orange-600'>Get Started</button>
        </div>
      </div>
      {open && (
        <div className='sm:hidden mt-3 flex flex-col gap-3 px-2 py-3 bg-white/95 supports-[backdrop-filter]:bg-white/80 backdrop-blur-md border border-slate-200 rounded-md shadow-sm'>
          {navItems.map((item, index)=>{
            if (item.children && showFundChildren) {
              return (
                <div key={index} className='border-b border-slate-200'>
                  <button
                    onClick={() => setSubOpen((v) => !v)}
                    className={`w-full text-left py-2 flex items-center justify-between ${isActive(item.link) ? 'text-orange-900 font-medium' : ''}`}
                  >
                    <span>{item.name}</span>
                    <span className={`transition-transform ${subOpen ? 'rotate-180' : ''}`}>▾</span>
                  </button>
                  {subOpen && (
                    <div className='pl-3 pb-2 flex flex-col gap-1'>
                      {item.children.map((child, ci) => (
                        <Link
                          key={ci}
                          href={`/energy-fund${child.link}`}
                          onClick={() => setOpen(false)}
                          className={`py-2 ${pathname === '/energy-fund' && hash === child.link ? 'text-orange-900 font-medium' : ''}`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            }
            return (
              <Link
                key={index}
                href={item.link}
                onClick={() => setOpen(false)}
                className={`py-2 border-b border-slate-200 ${isActive(item.link) ? 'text-orange-900 font-medium' : ''}`}
              >
                {item.name}
              </Link>
            )
          })}
          <button className='mt-2 bg-orange-900 text-white px-4 py-2 rounded-sm text-sm hover:bg-orange-600 w-full'>Get Started</button>
        </div>
      )}
    </nav>
  )
}

export default Navbar

