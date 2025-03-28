import Image from "next/image"

interface LogoProps {
  size?: "small" | "medium" | "large"
  showText?: boolean
  textClassName?: string
}

export default function Logo({ size = "medium", showText = false, textClassName = "text-xl font-bold" }: LogoProps) {
  // Define consistent sizes
  const sizes = {
    small: { width: 24, height: 24 },
    medium: { width: 32, height: 32 },
    large: { width: 48, height: 48 },
  }

  const { width, height } = sizes[size]

  return (
    <div className="flex items-center">
      <div className="relative" style={{ width, height }}>
        <Image src="/images/djade-logo.png" alt="DJade Logo" width={width} height={height} priority />
      </div>
      {showText && <span className={`ml-2 ${textClassName}`}>DJADE</span>}
    </div>
  )
}

