"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function JadeGallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const jadeItems = [
    {
      id: 1,
      name: "Imperial Jade Jewelry Set",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jade_showcase_2.jfif-ZSrlFhRuKTGfZxtxqWKFeOGOrdtIia.jpeg",
      price: "0.25 ETH",
      tokenId: "DJD-001",
    },
    {
      id: 2,
      name: "Emerald Jade Pendant",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jade_showcase_3.jfif-e6Rh8oCarOJTswZKh6vzThRxjZkcUn.jpeg",
      price: "0.18 ETH",
      tokenId: "DJD-002",
    },
    {
      id: 3,
      name: "Carved Jade Collection",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jade_showcase_4.jfif-PguD2oTohSSRAGW0AJU541ZFEp6uN3.jpeg",
      price: "0.32 ETH",
      tokenId: "DJD-003",
    },
    {
      id: 4,
      name: "Elegant Jade Accessories",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jade_showcase_1.jfif-zI36uuew2Hv4E7VYaZpIARNVFhpbUA.jpeg",
      price: "0.22 ETH",
      tokenId: "DJD-004",
    },
  ]

  const visibleItems = () => {
    const items = []
    for (let i = 0; i < itemsPerPage; i++) {
      const index = (activeIndex + i) % jadeItems.length
      items.push(jadeItems[index])
    }
    return items
  }

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % jadeItems.length)
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + jadeItems.length) % jadeItems.length)
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {visibleItems().map((item) => (
          <Card
            key={item.id}
            className="bg-white/10 border-none overflow-hidden group hover:transform hover:scale-105 transition-all duration-300"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                unoptimized
              />
            </div>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-white">{item.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-sm opacity-80 text-white">Token ID: {item.tokenId}</span>
                <span className="font-bold text-white">{item.price}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white hover:bg-white/40 rounded-full"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ArrowLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white hover:bg-white/40 rounded-full"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ArrowRight className="h-6 w-6" />
      </Button>
    </div>
  )
}

