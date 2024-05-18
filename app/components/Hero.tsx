import Image from "next/image"
export default function Hero() {
    return (
        <div className="bg-tulip-green hero h-auto rounded-lg p-5">
            <div className="hero-content flex-col">
                <Image src="/tulip-logo.png" alt="The Wooden Tulip Logo" width={200} height={200} className="max-w-sm rounded-lg"></Image>
                <div>
                    <h1 className="text-5xl font-bold">Signup For Events At The Wooden Tulip!</h1>
                </div>
            </div>
        </div>
    )
}
