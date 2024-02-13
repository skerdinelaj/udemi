import { ReactNode } from "react"

interface PropsHeader {
    img : {
        src: string,
        alt: string
    },
    children: ReactNode
}

export default function Header({img, children}: PropsHeader) {
  return (
    <div>
        <img {...img} />
        {children}
    </div>
  )
}
