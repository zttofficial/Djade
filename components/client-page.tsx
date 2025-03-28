"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, BarChart3, Globe, ArrowRight, ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import JadeGallery from "@/components/jade-gallery"
import Image from "next/image"
import { ThemeProvider } from "@/components/theme-provider"
import Logo from "./logo"

export default function ClientPage() {
  const [language, setLanguage] = useState<"en" | "zh">("en")
  const [scrolled, setScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const content = {
    en: {
      hero: {
        title: "DJade: Decentralized Jade Asset Platform",
        subtitle: "Tokenizing jade assets on the blockchain for transparent, secure, and accessible investment",
        cta: "Learn More",
        watchVideo: "Watch Video",
      },
      about: {
        title: "About DJade",
        description:
          "DJade is a pioneering decentralized platform that tokenizes physical jade assets on the blockchain. Following the successful models of DGold and DSilver, DJade brings the cultural and investment value of jade to the decentralized finance ecosystem.",
        features: [
          {
            icon: <Logo size="small" />,
            title: "Asset Tokenization",
            description:
              "Each DJade token represents ownership of physical jade stored in secure facilities, professionally appraised and certified.",
          },
          {
            icon: <Shield className="h-8 w-8 text-primary" />,
            title: "Security & Transparency",
            description:
              "Blockchain technology ensures transparent ownership records and secure transactions, with all jade assets fully audited and insured.",
          },
          {
            icon: <BarChart3 className="h-8 w-8 text-primary" />,
            title: "Investment Potential",
            description:
              "Access the jade market with fractional ownership, diversify your portfolio with a historically valuable asset class.",
          },
          {
            icon: <Globe className="h-8 w-8 text-primary" />,
            title: "Global Accessibility",
            description:
              "Trade DJade tokens 24/7 on decentralized exchanges, eliminating traditional barriers to jade investment.",
          },
        ],
      },
      gallery: {
        title: "Explore Our Jade Collection",
        subtitle: "Each token is backed by authentic, high-quality jade pieces",
        viewAll: "View All Pieces",
      },
      howItWorks: {
        title: "How DJade Works",
        steps: [
          {
            number: "01",
            title: "Jade Acquisition & Verification",
            description: "High-quality jade is sourced, authenticated, and appraised by expert gemologists.",
          },
          {
            number: "02",
            title: "Secure Storage",
            description: "Physical jade is stored in secure, insured vaults with regular third-party audits.",
          },
          {
            number: "03",
            title: "Tokenization",
            description: "Jade value is tokenized on the blockchain, with each token backed by physical jade.",
          },
          {
            number: "04",
            title: "Trading & Ownership",
            description: "Users can buy, sell, and trade DJade tokens on decentralized exchanges.",
          },
        ],
      },
      benefits: {
        title: "Benefits of DJade",
        items: [
          "Access to jade investment without physical storage concerns",
          "Fractional ownership enabling smaller investment amounts",
          "Transparent pricing and ownership records",
          "Liquidity for a traditionally illiquid asset",
          "Cultural and historical value preservation",
          "Portfolio diversification with a unique asset class",
        ],
      },
      cta: {
        title: "Join the DJade Ecosystem",
        description: "Be part of the future of decentralized jade investment",
        button: "Get Started",
      },
    },
    zh: {
      hero: {
        title: "DJade: 去中心化玉石资产平台",
        subtitle: "在区块链上代币化玉石资产，实现透明、安全和便捷的投资",
        cta: "了解更多",
        watchVideo: "观看视频",
      },
      about: {
        title: "关于 DJade",
        description:
          "DJade 是一个开创性的去中心化平台，将实物玉石资产在区块链上进行代币化。继 DGold 和 DSilver 成功模式之后，DJade 将玉石的文化和投资价值带入去中心化金融生态系统。",
        features: [
          {
            icon: <Logo size="small" />,
            title: "资产代币化",
            description: "每个 DJade 代币代表存储在安全设施中的实物玉石的所有权，经过专业评估和认证。",
          },
          {
            icon: <Shield className="h-8 w-8 text-primary" />,
            title: "安全与透明",
            description: "区块链技术确保所有权记录透明和交易安全，所有玉石资产均经过完全审计和投保。",
          },
          {
            icon: <BarChart3 className="h-8 w-8 text-primary" />,
            title: "投资潜力",
            description: "通过部分所有权进入玉石市场，用历史悠久的资产类别多样化您的投资组合。",
          },
          {
            icon: <Globe className="h-8 w-8 text-primary" />,
            title: "全球可及性",
            description: "在去中心化交易所全天候交易 DJade 代币，消除传统玉石投资的障碍。",
          },
        ],
      },
      gallery: {
        title: "探索我们的玉石收藏",
        subtitle: "每个代币都由真实、高品质的玉石支持",
        viewAll: "查看所有玉石",
      },
      howItWorks: {
        title: "DJade 如何运作",
        steps: [
          {
            number: "01",
            title: "玉石采购与验证",
            description: "由专业宝石学家采购、认证和评估高质量玉石。",
          },
          {
            number: "02",
            title: "安全存储",
            description: "实物玉石存储在安全、有保险的保险库中，定期进行第三方审计。",
          },
          {
            number: "03",
            title: "代币化",
            description: "玉石价值在区块链上代币化，每个代币由实物玉石支持。",
          },
          {
            number: "04",
            title: "交易与所有权",
            description: "用户可以在去中心化交易所买卖和交易 DJade 代币。",
          },
        ],
      },
      benefits: {
        title: "DJade 的优势",
        items: [
          "无需担心实物存储问题即可进行玉石投资",
          "部分所有权使较小金额投资成为可能",
          "透明的定价和所有权记录",
          "为传统非流动性资产提供流动性",
          "文化和历史价值的保存",
          "通过独特的资产类别实现投资组合多样化",
        ],
      },
      cta: {
        title: "加入 DJade 生态系统",
        description: "成为去中心化玉石投资未来的一部分",
        button: "立即开始",
      },
    },
  }

  const currentContent = language === "en" ? content.en : content.zh

  // If not mounted yet, show a simple loading state
  if (!isMounted) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-emerald-800">
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <main className="min-h-screen">
        <Navbar language={language} setLanguage={setLanguage} scrolled={scrolled} />

        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jade_showcase_2.jfif-ZSrlFhRuKTGfZxtxqWKFeOGOrdtIia.jpeg"
              alt="Beautiful jade necklace"
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>
          <div className="container mx-auto px-4 text-center relative z-20 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">{currentContent.hero.title}</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fadeIn animation-delay-200">
              {currentContent.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn animation-delay-400">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white dark:text-white">
                <span className="text-white">{currentContent.hero.cta}</span>{" "}
                <ArrowRight className="ml-2 h-5 w-5 text-white" />
              </Button>
              <Button size="lg" className="bg-white hover:bg-gray-100 transition-all duration-300">
                <span className="text-emerald-800 font-medium">{currentContent.hero.watchVideo}</span>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
            <ChevronRight className="h-10 w-10 text-white rotate-90" />
          </div>
        </section>

        {/* Rest of the component remains the same */}
        {/* About Section */}
        <section id="about-djade" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{currentContent.about.title}</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto mb-12"></div>
            <p className="text-lg text-center max-w-4xl mx-auto mb-16">{currentContent.about.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentContent.about.features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="pt-6">
                    <div className="mb-4 text-emerald-500">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="explore-jade" className="py-20 bg-gradient-to-r from-emerald-900 to-emerald-700 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{currentContent.gallery.title}</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12">{currentContent.gallery.subtitle}</p>

            <JadeGallery />

            <div className="text-center mt-12">
              <Button className="bg-white hover:bg-gray-100 transition-all duration-300">
                <span className="text-emerald-800 font-medium">{currentContent.gallery.viewAll}</span>
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-djade-works" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{currentContent.howItWorks.title}</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto mb-16"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentContent.howItWorks.steps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="text-8xl font-bold text-emerald-500/10 absolute -top-10 left-0 group-hover:text-emerald-500/20 transition-colors duration-300">
                    {step.number}
                  </div>
                  <div className="pt-10 border-t-2 border-emerald-500 group-hover:border-emerald-600 transition-colors duration-300">
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section with Image */}
        <section id="benefits-of-djade" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jade_showcase_1.jfif-zI36uuew2Hv4E7VYaZpIARNVFhpbUA.jpeg"
                  alt="Jade investment benefits"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{currentContent.benefits.title}</h2>
                <div className="w-20 h-1 bg-emerald-500 mb-8"></div>

                <ul className="space-y-4">
                  {currentContent.benefits.items.map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="bg-emerald-500 rounded-full p-1 mr-3 mt-1 group-hover:bg-emerald-600 transition-colors duration-300">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="contact"
          className="py-20 bg-gradient-to-r from-emerald-800 to-emerald-600 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jade_showcase_4.jfif-PguD2oTohSSRAGW0AJU541ZFEp6uN3.jpeg"
              alt="Jade collection"
              fill
              className="object-cover object-center"
              unoptimized
            />
          </div>
          <div className="container mx-auto px-4 text-center relative z-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{currentContent.cta.title}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">{currentContent.cta.description}</p>
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-emerald-800 font-medium">{currentContent.cta.button}</span>
            </Button>
          </div>
        </section>

        <Footer language={language} />
      </main>
    </ThemeProvider>
  )
}

