"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import Logo from "./logo"

interface NavbarProps {
  language: "en" | "zh"
  setLanguage: (language: "en" | "zh") => void
  scrolled?: boolean
}

export default function Navbar({ language, setLanguage, scrolled = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  const navItems = {
    en: [
      { name: "Home", href: "#home", id: "home" },
      { name: "About", href: "#about-djade", id: "about-djade" },
      { name: "Gallery", href: "#explore-jade", id: "explore-jade" },
      { name: "How It Works", href: "#how-djade-works", id: "how-djade-works" },
      { name: "Benefits", href: "#benefits-of-djade", id: "benefits-of-djade" },
      { name: "Contact", href: "#contact", id: "contact" },
    ],
    zh: [
      { name: "首页", href: "#home", id: "home" },
      { name: "关于", href: "#about-djade", id: "about-djade" },
      { name: "画廊", href: "#explore-jade", id: "explore-jade" },
      { name: "运作方式", href: "#how-djade-works", id: "how-djade-works" },
      { name: "优势", href: "#benefits-of-djade", id: "benefits-of-djade" },
      { name: "联系我们", href: "#contact", id: "contact" },
    ],
  }

  const currentNavItems = language === "en" ? navItems.en : navItems.zh

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Logo size="medium" showText={true} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {currentNavItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleScroll(e, item.id)}
                className={`hover:text-emerald-500 transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => setLanguage(language === "en" ? "zh" : "en")}
              className={
                scrolled ? "text-foreground hover:text-foreground" : "text-white hover:text-white hover:bg-white/20"
              }
            >
              {language === "en" ? "中文" : "English"}
            </Button>
            <ModeToggle />
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              {language === "en" ? "Connect Wallet" : "连接钱包"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <Button
              variant="ghost"
              onClick={() => setLanguage(language === "en" ? "zh" : "en")}
              className={
                scrolled ? "text-foreground hover:text-foreground" : "text-white hover:text-white hover:bg-white/20"
              }
            >
              {language === "en" ? "中文" : "English"}
            </Button>
            <ModeToggle />
            <Button
              variant="ghost"
              onClick={toggleMenu}
              size="icon"
              className={scrolled ? "text-foreground" : "text-white hover:bg-white/20"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {currentNavItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.id)}
                  className="text-foreground hover:text-emerald-500 transition-colors py-2"
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full">
                {language === "en" ? "Connect Wallet" : "连接钱包"}
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

