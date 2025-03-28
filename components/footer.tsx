import Link from "next/link"
import { Gem, Twitter, Github, Linkedin, Mail } from "lucide-react"

interface FooterProps {
  language: "en" | "zh"
}

export default function Footer({ language }: FooterProps) {
  const content = {
    en: {
      description: "DJade is a decentralized platform for tokenizing jade assets on the blockchain.",
      links: {
        platform: "Platform",
        about: "About",
        howItWorks: "How It Works",
        tokenomics: "Tokenomics",
        roadmap: "Roadmap",
        resources: "Resources",
        documentation: "Documentation",
        whitepaper: "Whitepaper",
        faq: "FAQ",
        blog: "Blog",
        legal: "Legal",
        terms: "Terms of Service",
        privacy: "Privacy Policy",
        contact: "Contact Us",
      },
      copyright: "© 2025 DJade. All rights reserved.",
    },
    zh: {
      description: "DJade 是一个在区块链上代币化玉石资产的去中心化平台。",
      links: {
        platform: "平台",
        about: "关于我们",
        howItWorks: "运作方式",
        tokenomics: "代币经济",
        roadmap: "路线图",
        resources: "资源",
        documentation: "文档",
        whitepaper: "白皮书",
        faq: "常见问题",
        blog: "博客",
        legal: "法律",
        terms: "服务条款",
        privacy: "隐私政策",
        contact: "联系我们",
      },
      copyright: "© 2025 DJade. 保留所有权利。",
    },
  }

  const currentContent = language === "en" ? content.en : content.zh

  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Gem className="h-8 w-8 text-emerald-600 mr-2" />
              <span className="text-xl font-bold">DJade</span>
            </Link>
            <p className="text-muted-foreground mb-4">{currentContent.description}</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">{currentContent.links.platform}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  {currentContent.links.about}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  {currentContent.links.howItWorks}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  {currentContent.links.tokenomics}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  {currentContent.links.roadmap}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">{currentContent.links.resources}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  {currentContent.links.documentation}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  {currentContent.links.whitepaper}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  {currentContent.links.faq}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  {currentContent.links.blog}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">{currentContent.links.legal}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  {currentContent.links.terms}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  {currentContent.links.privacy}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  {currentContent.links.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>{currentContent.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

