"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Gem, Menu, X } from "lucide-react"
import { ModeToggle } from "./mode-toggle"

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

  const navItems = {
    en: [
      { name: "Home", href: "#" },
      { name: "About", href: "#" },
      { name: "Gallery", href: "#" },
      { name: "How It Works", href: "#" },
      { name: "Benefits", href: "#" },
      { name: "Contact", href: "#" },
    ],
    zh: [
      { name: "首页", href: "#" },
      { name: "关于", href: "#" },
      { name: "画廊", href: "#" },
      { name: "运作方式", href: "#" },
      { name: "优势", href: "#" },
      { name: "联系我们", href: "#" },
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
              <Gem className={`h-8 w-8 mr-2 ${scrolled ? "text-emerald-600" : "text-white"}`} />
              <span className={`text-xl font-bold ${scrolled ? "text-foreground" : "text-white"}`}>DJade</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {currentNavItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`hover:text-emerald-500 transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => setLanguage(language === "en" ? "zh" : "en")}
              className={scrolled ? "text-foreground" : "text-white hover:text-white hover:bg-white/20"}
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
              className={scrolled ? "text-foreground" : "text-white hover:text-white hover:bg-white/20"}
            >
              {language === "en" ? "中文" : "English"}
            </Button>
            <ModeToggle />
            <Button
              variant="ghost"
              onClick={toggleMenu}
              size="icon"
              className={scrolled ? "" : "text-white hover:bg-white/20"}
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
                <Link
                  key={index}
                  href={item.href}
                  className="text-foreground hover:text-emerald-500 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
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

