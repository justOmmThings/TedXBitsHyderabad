import { SpeakerCarousel } from "@/components/ui/animated-testimonials";
import { speakersData } from "../speakersPage/speakers";



export function PreviousSpeakers() {
  return <SpeakerCarousel speakers={speakersData} autoplay={false} />;
}
