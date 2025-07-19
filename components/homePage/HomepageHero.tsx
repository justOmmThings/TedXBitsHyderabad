import Image from "next/image"
import { config } from "@/data/config"

export function HomepageHero() {
    return (
        <section
            className="w-full min-h-screen bg-center relative flex items-end"
            style={{ backgroundImage: `url('${config.images.heroBackground}')`, backgroundSize: "110% auto" }}
        >
            <div className="absolute inset-0 bg-black/70 z-0"></div>
            {/* Gradient overlay at the bottom to transition to #1f1f1f */}
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[30vh] z-10" style={{ background: "linear-gradient(to bottom, transparent, #1f1f1f)" }} />
            <div className="relative z-10 flex flex-col md:flex-row items-stretch justify-center gap-24 px-4 pb-20 w-full">
                <div className="flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden shadow-xl bg-white flex items-stretch h-full">
                    <Image
                        src={config.images.ticket}
                        alt="Serendipity Ticket"
                        width={750}
                        height={300}
                        className="h-full w-[400px] md:w-[600px] lg:w-[750px] object-contain"
                        priority
                    />
                </div>
                <div className="flex flex-col items-start justify-center text-left max-w-xl h-full py-8 md:py-0">
                    <div className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 whitespace-nowrap">
                        {config.event.date}
                    </div>
                    <div className="text-white text-2xl md:text-4xl font-semibold mb-2">{config.event.time}</div>
                    <div className="text-white text-2xl md:text-4xl font-semibold mb-6">{config.event.location}</div>
                    <div className="text-white text-lg md:text-xl font-normal mb-8 max-w-lg">
                        {config.event.heroTagline}
                    </div>
                    <a
                        href="#tickets"
                        className="bg-transparent border border-[#eb0027] text-[#eb0027] hover:bg-[#eb0027] hover:border-[#eb0027] hover:text-white font-semibold px-8 py-3 rounded-lg text-lg transition-all duration-300 shadow"
                    >
                        {config.ui.buyTickets}
                    </a>
                </div>
            </div>
        </section>
    )
} 