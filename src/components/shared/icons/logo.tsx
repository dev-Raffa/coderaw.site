import logoBlack from "@/app/assets/images/black-logo.png"
import logoWhite from "@/app/assets/images/white-logo.png"
import Image from "next/image"

interface LogoProps {
  className?: string
  color?: "black" | "white"
}

export function Logo({ className, color = "black" }: LogoProps) {
  return (
    <Image
      src={color === "black" ? logoBlack : logoWhite}
      alt="Logo"
      fill
      className={className}
    />
  )
}

