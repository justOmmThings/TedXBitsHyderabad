import { SpeakerCarousel } from "@/components/ui/animated-testimonials";

const speakers = [
 
  {
    name: "SUNDAR PICHAI",
    title: "CEO of Alphabet Inc.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&crop=face",
    description:
      "Visionary leader transforming how the world accesses and uses information through innovative technology solutions.",
  },
  {
    name: "KIRAN MAZUMDAR",
    title: "Biotech Pioneer & Chairperson",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=800&fit=crop&crop=face",
    description:
      "Revolutionary biotechnology entrepreneur who built India's first biotech unicorn and champions innovation in healthcare.",
  },
  {
    name: "RATAN TATA",
    title: "Chairman Emeritus, Tata Sons",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&crop=face",
    description:
      "Legendary industrialist and philanthropist who transformed the Tata Group into a global powerhouse while maintaining ethical leadership.",
  },
  {
    name: "DEEPIKA PADUKONE",
    title: "Actor & Mental Health Advocate",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=800&fit=crop&crop=face",
    description:
      "Acclaimed actress using her platform to break stigmas around mental health and champion important social causes.",
  },
  {
    name: "AZIM PREMJI",
    title: "Tech Mogul & Philanthropist",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=crop&crop=face",
    description:
      "Technology pioneer who built Wipro into a global IT giant and dedicated his wealth to transforming education in India.",
  },
];

const bigSpeakers = [...speakers];

export function PreviousSpeakers() {
  return <SpeakerCarousel speakers={bigSpeakers} autoplay={false} />;
}
