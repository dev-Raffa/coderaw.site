import iconBlack from "@/app/assets/images/black-icon.png"
import iconWhite from "@/app/assets/images/white-icon.png"
import Image from "next/image"

interface IconProps {
  className?: string
  color?: "black" | "white"
}

export function Icon({ className, color= "black" }: IconProps) {
  return (
    <Image
      src={color === "white" ? iconWhite : iconBlack}
      alt="Logo"
      width="100"
      height="100"
      className={className}
    />
  )
}