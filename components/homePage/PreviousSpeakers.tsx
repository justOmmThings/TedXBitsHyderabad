import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { config } from "@/data/config";

export function PreviousSpeakers() {
  return <AnimatedTestimonials testimonials={config.previousSpeakers} autoplay={true} />;
}
