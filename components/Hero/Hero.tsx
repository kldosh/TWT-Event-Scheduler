import Image from "next/image"
import React, {ReactNode} from "react";
export default function Hero() {
    return (
        <HeroContainer>
            <div className="hero-content flex-col">
                <Image src="/tulip-logo.png"
                       alt="The Wooden Tulip Logo"
                       width={200}
                       height={200}
                       className="">
                </Image>
                <h1 className="text-5xl font-bold">Sign up for Events at The Wooden Tulip!</h1>
            </div>
        </HeroContainer>
    )
}

function HeroContainer({ children }: { children: ReactNode }) {
    return (
        <div className="flex justify-center">
            <div className="bg-tulip-green hero max-w-7xl h-auto rounded-2xl m-8 py-5">
                {children}
            </div>
        </div>
    )
}