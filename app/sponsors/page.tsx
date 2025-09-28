"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import DotGrid from "@/components/ui/dot-grid"

interface SponsorTier {
    title: string
    subtitle: string
    sponsors: { name: string; logo: string }[]
    tierColor: string
    bgGradient: string
}

const sponsorTiers: SponsorTier[] = [
    {
        title: "Diamond Sponsors",
        subtitle: "Our Premier Partners",
        tierColor: "text-red-300",
        bgGradient: "from-red-500/10 to-blue-500/10",
        sponsors: [
            { name: "Microsoft", logo: "/data/logos/microsoft.png" },
            { name: "Adobe", logo: "/data/logos/adobe.png" }
        ]
    },
    {
        title: "Gold Sponsors",
        subtitle: "Our Elite Partners",
        tierColor: "text-yellow-400",
        bgGradient: "from-yellow-500/10 to-amber-500/10",
        sponsors: [
            { name: "Netflix", logo: "/data/logos/netflix.png" },
            { name: "Apple", logo: "/data/logos/apple.png" },
            { name: "Nike", logo: "/data/logos/nike.png" },
            { name: "AMD", logo: "/data/logos/amd.png" }
        ]
    },
    {
        title: "Silver Sponsors",
        subtitle: "Our Valued Partners",
        tierColor: "text-gray-300",
        bgGradient: "from-gray-500/10 to-slate-500/10",
        sponsors: [
            { name: "Facebook", logo: "/data/logos/facebook.png" },
            { name: "Twitter", logo: "/data/logos/twitter.png" },
            { name: "YouTube", logo: "/data/logos/youtube.png" },
            { name: "Spotify", logo: "/data/logos/spotify.png" },
            { name: "Twitch", logo: "/data/logos/twitch.png" },
            { name: "Telegram", logo: "/data/logos/telegram.png" }
        ]
    },
    {
        title: "Bronze Sponsors",
        subtitle: "Our Supporting Partners",
        tierColor: "text-orange-400",
        bgGradient: "from-orange-500/10 to-amber-600/10",
        sponsors: [
            { name: "McDonald's", logo: "/data/logos/mcdonalds.png" },
            { name: "Google Play", logo: "/data/logos/google-play.png" },
            { name: "App Store", logo: "/data/logos/app-store.png" },
            { name: "Prime", logo: "/data/logos/prime.png" },
            { name: "Electronics Arts", logo: "/data/logos/electronics-arts.png" },
            { name: "Maps", logo: "/data/logos/maps.png" }
        ]
    }
]

// List of logos that are completely black and should be inverted to white
const blackLogos = ['Twitter', 'Apple', 'Nike']

const SponsorCard = ({ sponsor, index }: { sponsor: { name: string; logo: string }, index: number }) => {
    const shouldInvert = blackLogos.includes(sponsor.name)

    return (
        <motion.div
            className="p-8 transition-all duration-300 group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{
                scale: 1.05
            }}
            whileTap={{ scale: 0.98 }}
        >
            <div className="relative w-full h-40 mb-4 flex items-center justify-center">
                <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className={`object-contain group-hover:brightness-110 group-hover:scale-105 transition-all duration-500 ${shouldInvert ? 'filter brightness-0 invert' : ''
                        }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <h3 className="text-white font-semibold text-center group-hover:text-white/90 transition-colors">
                {sponsor.name}
            </h3>
        </motion.div>
    )
}

const SponsorTierSection = ({ tier, index }: { tier: SponsorTier, index: number }) => (
    <motion.section
        className="py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
    >
        <div className="container mx-auto px-4 md:px-6">
            <div className="p-8 mb-12">
                <motion.h2
                    className={cn("text-4xl md:text-5xl font-bold text-center mb-4", tier.tierColor)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                >
                    {tier.title}
                </motion.h2>
                <motion.p
                    className="text-white/70 text-center text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                >
                    {tier.subtitle}
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                    <SponsorCard
                        key={sponsor.name}
                        sponsor={sponsor}
                        index={sponsorIndex}
                    />
                ))}
            </div>
        </div>
    </motion.section>
)

export default function SponsorsPage() {
    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white overflow-hidden relative">
            {/* Dot Grid Background */}
            <div className="absolute inset-0 opacity-20">
                <DotGrid
                    dotSize={8}
                    gap={25}
                    baseColor="#eb0027"
                    activeColor="#ffffff"
                    proximity={80}
                    speedTrigger={50}
                    shockRadius={150}
                    shockStrength={3}
                    className="w-full h-full"
                />
            </div>

            {/* Hero Section */}
            <motion.section
                className="relative py-24 md:py-32 lg:py-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-black/50" />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
                            Our Sponsors
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                            Meet the incredible organizations that make TEDxBITS Hyderabad possible.
                            Their support drives innovation and spreads ideas worth sharing.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Sponsor Tiers */}
            {sponsorTiers.map((tier, index) => (
                <SponsorTierSection key={tier.title} tier={tier} index={index} />
            ))}


        </div>
    )
}