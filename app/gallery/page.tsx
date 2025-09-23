import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import DotGrid from "@/components/ui/dot-grid";

export default function GalleryPage() {
    return (
        <div className="relative flex flex-col min-h-[100dvh] bg-black text-white overflow-hidden">
            {/* Background grid spanning entire page including footer */}
            <div className="pointer-events-none absolute inset-0 z-0 opacity-100">
                <DotGrid
                    dotSize={14}
                    gap={24}
                    baseColor="#4a4a4a"
                    activeColor="#eb0027"
                    proximity={170}
                    shockRadius={300}
                    shockStrength={6}
                    className="[mask-image:radial-gradient(circle_at_center,white,transparent_98%)]"
                />
            </div>
            {/* Content */}
            <div className="relative z-10 flex-1 pt-28 md:pt-32 pb-32">
                <Gallery />
            </div>
            <div className="relative z-10">
                <Footer />
            </div>
        </div>
    );
} 