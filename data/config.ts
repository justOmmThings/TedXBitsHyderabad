// Centralized configuration for the entire app

// =========================
// Type Definitions
// =========================

export interface ImageConfig {
    logo: string;
    sponsorLogos: string[];
    heroBackground: string;
    ticket: string;
}

export interface EventConfig {
    date: string;
    time: string;
    location: string;
    heroTagline: string;
    sponsorSection: {
        title: string;
        description: string;
    };
}

export interface AboutSectionConfig {
    title: string;
    description: string;
}

export interface AboutPageSectionConfig {
    mainHeading: {
        bold: string;
        rest: string;
    };
    aboutTED: {
        heading: string;
        highlight: string;
        text: string;
    };
    aboutTEDx: {
        heading: string;
        highlight: string;
        text: string;
    };
    teamSection: {
        preHeading: string;
        mainHeading: {
            bold: string;
            rest: string;
        };
        teamLabel: string;
        description: string;
        members: TeamMember[];
    };
}

export interface TeamMember {
    name: string;
    role: string;
    photo: string;
    quote: string;
    linkedin: string;
    contactInfo: string;
}

export interface Speaker {
    quote: string;
    name: string;
    designation: string;
    src: string;
}

export interface NavigationLink {
    label: string;
    href: string;
    icon: string;
}

// --- Navigation Configuration ---
export interface NavigationConfig {
    registerButton: {
        text: string;
        link: string;
    };
    animation: {
        scrollThreshold: number;
        menuItemDelay: number;
        ctaDelay: number;
    };
}

export interface UIStrings {
    register: string;
    events: string;
    speakers: string;
    about: string;
    contact: string;
    sponsorsTitle: string;
    sponsorsDescription: string;
    buyTickets: string;
}

export interface Metadata {
    title: string;
}

export interface NextConfig {
    allowedDevOrigins: string[];
    images: {
        unoptimized: boolean;
    };
}

export interface AnimationConfig {
    enableDoubleRow: boolean;
    useGlassyBg: boolean;
    animationDuration: number;
}

export interface ThemeColors {
    background: string;
    foreground: string;
    card: {
        DEFAULT: string;
        foreground: string;
    };
    popover: {
        DEFAULT: string;
        foreground: string;
    };
    primary: {
        DEFAULT: string;
        foreground: string;
    };
    secondary: {
        DEFAULT: string;
        foreground: string;
    };
    muted: {
        DEFAULT: string;
        foreground: string;
    };
    accent: {
        DEFAULT: string;
        foreground: string;
    };
    destructive: {
        DEFAULT: string;
        foreground: string;
    };
    border: string;
    input: string;
    ring: string;
    chart: {
        [key: string]: string;
    };
    sidebar: {
        DEFAULT: string;
        foreground: string;
        primary: string;
        'primary-foreground': string;
        accent: string;
        'accent-foreground': string;
        border: string;
        ring: string;
    };
}

export interface FooterConfig {
    logo: string;
    campusImage: string;
    copyright: string;
    socialLinks: { icon: string; url: string }[];
    leftLinks: { label: string; url: string }[];
    rightLinks: { label: string; url: string }[];
}

export interface HomepageBelowHeaderConfig {
    sectionTitles: { text: string; color?: string }[];
    stats: { value: number; label: string; suffix?: string }[];
}

export interface HomepageAboveFooterConfig {
    ctas: { text: string; button: { label: string; link: string } }[];
}

// --- Gallery Page ---
export interface GallerySlide {
    src: string;
    alt: string;
}

export interface GalleryConfig {
    heading: string;            // e.g. "Gallery"
    highlight?: string;         // optional part of heading to color differently
    description: string;        // lead paragraph under heading
    slides: GallerySlide[];     // carousel slides
}

// =========================
// Config Sections
// =========================

// --- Images ---
export const images: ImageConfig = {
    logo: "data/TedXLogo.webp",
    sponsorLogos: [
        "/sponsors-2020/sponsor1_2024.png",
        "/sponsors-2020/sponsor2_2024.png",
        "/sponsors-2020/sponsor3_2024.png",
        "/sponsors-2020/sponsor4_2024.png",
        "/sponsors-2020/sponsor5_2024.png",
        "/sponsors-2020/sponsor6_2024.png",
        "/sponsors-2020/sponsor7_2024.png",
        "/sponsors-2020/audi.png",
        "/sponsors-2020/sbi.png",
        "/sponsors-2020/skyevents.jpg",
        "/sponsors-2020/2.png",
        "/sponsors-2020/3.png",
        "/sponsors-2020/4.png",
        "/sponsors-2020/5.png",
        "/sponsors-2020/6.png",
    ],
    heroBackground: "data/audience-background.jpeg",
    ticket: "data/serendipity-ticket.png",
};

// --- Event Info ---
export const event: EventConfig = {
    date: "10th December 2024",
    time: "9 am – 6 pm",
    location: "Hyderabad, India",
    heroTagline:
        "Discover the magic of the unexpected connections, and explore the power of ideas unfolding into life’s little miracles!",
    sponsorSection: {
        title: "Our Valued Sponsors",
        description: "We're grateful to our sponsors who make this event possible.",
    },
};

// --- About Us Section ---
export const aboutSection: AboutSectionConfig = {
    title: "About Us",
    description:
        "Welcome to TEDx BITS Hyderabad! This is the About Us page. Here you can share your event's story, mission, and team. (Replace this placeholder with real content about your organization, vision, and what makes your event unique.)",
};

// --- About Us Page Content ---
export const aboutPageSection: AboutPageSectionConfig = {
    mainHeading: {
        bold: "TED",
        rest: " is a nonprofit devoted to ideas worth spreading",
    },
    aboutTED: {
        heading: "About ",
        highlight: "TED",
        text: "TED is a nonprofit devoted to ideas worth spreading. Started in 1984 as a conference where Technology, Entertainment, and Design converged, TED today covers almost every topic imaginable — from science to business to global issues — in more than 100 languages. Meanwhile, independently run TEDx events help share ideas in communities around the world. TED's mission is to discover and spread ideas that spark imagination, embrace possibility, and catalyze impact.",
    },
    aboutTEDx: {
        heading: "About ",
        highlight: "TEDx",
        text: "TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection in a small group. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized and managed by volunteers in their local communities.",
    },
    teamSection: {
        preHeading: "The",
        mainHeading: {
            bold: "TEDx",
            rest: " BITS Hyderabad",
        },
        teamLabel: "TEAM",
        description: "Behind every great TEDx event is a dedicated team of passionate individuals working tirelessly to bring ideas worth spreading to life. Our organizing committee comprises students from BITS Pilani, Hyderabad Campus who share a common vision of fostering intellectual curiosity and meaningful dialogue. From content curation to logistics, design to outreach, each team member plays a crucial role in creating an unforgettable experience that inspires our community and beyond.",
        members: [
            {
                name: "Tushya Jain",
                role: "Licensee",
                photo: "/2025_executives/tushya.jpeg",
                quote: " ",
                linkedin: "https://linkedin.com/in/alice",
                contactInfo: "alice@tedx.com",
            },
            {
                name: "Akshat Kumar",
                role: "Co-Licensee",
                photo: "/2025_executives/akshat.jpeg",
                quote: " ",
                linkedin: "https://linkedin.com/in/bob",
                contactInfo: "bob@tedx.com",
            },
            {
                name: "Madhava Rao",
                role: "Lead Curator",
                photo: "/2025_executives/madhava.jpeg",
                quote: " ",
                linkedin: "https://linkedin.com/in/charlie",
                contactInfo: "charlie@tedx.com",
            },
            {
                name: "Shashwat Jha",
                role: "Speaker Research Head",
                photo: "/2025_executives/shashwat.jpeg",
                quote: " ",
                linkedin: "https://linkedin.com/in/diana",
                contactInfo: "diana@tedx.com",
            },
            {
                name: "Jainam Parekh",
                role: "Guest Relations Head",
                photo: "/2025_executives/jainam.jpg",
                quote: " ",
                linkedin: "https://linkedin.com/in/eve",
                contactInfo: "eve@tedx.com",
            },
            {
                name: "Neha Bhagwat",
                role: "Strategic Initiatives Head",
                photo: "/2025_executives/neha.jpg",
                quote: " ",
                linkedin: "https://linkedin.com/in/frank",
                contactInfo: "frank@tedx.com",
            },
            {
                name: "Shraddhanjali Sahoo",
                role: "Sponsorship Head",
                photo: "/2025_executives/shraddhanjali.jpeg",
                quote: " ",
                linkedin: "https://linkedin.com/in/frank",
                contactInfo: "frank@tedx.com",
            },
            {
                name: "Suhani Sha",
                role: "Events Head",
                photo: "/2025_executives/suhani.jpeg",
                quote: " ",
                linkedin: "https://linkedin.com/in/frank",
                contactInfo: "frank@tedx.com",
            },
            {
                name: "Harini Ramanan",
                role: "Multimedia and Production Lead",
                photo: "/2025_executives/harini.jpeg",
                quote: " ",
                linkedin: "https://linkedin.com/in/frank",
                contactInfo: "frank@tedx.com",
            },
            {
                name: "Ritansh Kulshreshth",
                role: "Design Head",
                photo: "/2025_executives/ritansh.jpg",
                quote: " ",
                linkedin: "https://linkedin.com/in/frank",
                contactInfo: "frank@tedx.com",
            },
            {
                name: "Sarvesh Vaswani",
                role: "Public Relations Head",
                photo: "/2025_executives/sarvesh.jpeg",
                quote: " ",
                linkedin: "https://linkedin.com/in/frank",
                contactInfo: "frank@tedx.com",
            },
            {
                name: "Suprasad Mishra",
                role: "Tech Head",
                photo: "/data/placeholder-user.jpg",
                quote: " ",
                linkedin: "https://linkedin.com/in/frank",
                contactInfo: "frank@tedx.com",
            },
        ],
    },
};

// --- Previous Speakers (Testimonials) ---
export const previousSpeakers: Speaker[] = [
    {
        quote:
            "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
        name: "Sarah Chen",
        designation: "Product Manager at TechFlow",
        src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
        name: "Michael Rodriguez",
        designation: "CTO at InnovateSphere",
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
        name: "Emily Watson",
        designation: "Operations Director at CloudScale",
        src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
        name: "James Kim",
        designation: "Engineering Lead at DataPro",
        src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
        name: "Lisa Thompson",
        designation: "VP of Technology at FutureNet",
        src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

// --- Navigation URLs ---
export const navigation: NavigationLink[] = [
    { label: "Gallery", href: "/gallery", icon: "Image" },
    { label: "Speakers", href: "/speakers", icon: "Users" },
    { label: "Sponsors", href: "/sponsors", icon: "Users" },
    { label: "Executives", href: "/executives", icon: "UserCheck" },
    { label: "About Us", href: "/about", icon: "Mail" },

];

// --- Navigation Configuration ---
export const navigationConfig: NavigationConfig = {
    registerButton: {
        text: "Register",
        link: "/register",
    },
    animation: {
        scrollThreshold: 20,
        menuItemDelay: 75,
        ctaDelay: 200,
    },
};

// --- UI Strings ---
export const ui: UIStrings = {
    register: "Register",
    events: "Events",
    speakers: "Speakers",
    about: "About",
    contact: "Contact",
    sponsorsTitle: "Our Valued Sponsors",
    sponsorsDescription: "We're grateful to our sponsors who make this event possible.",
    buyTickets: "BUY TICKETS",
};

// --- Metadata ---
export const metadata: Metadata = {
    title: "TEDx",
};

// --- Next.js Config ---
export const next: NextConfig = {
    allowedDevOrigins: [
        "https://*.ngrok-free.app",
        "https://*.ngrok.app",
    ],
    images: {
        unoptimized: true,
    },
};

// --- Sponsor Animation Settings ---
export const animation: AnimationConfig = {
    enableDoubleRow: false,
    useGlassyBg: false,
    animationDuration: 400,
};

// --- Theme Colors (for tailwind.config.ts) ---
export const themeColors: ThemeColors = {
    background: 'hsl(var(--background))',
    foreground: 'hsl(var(--foreground))',
    card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
    },
    popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))',
    },
    primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
    },
    secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))',
    },
    muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))',
    },
    accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))',
    },
    destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))',
    },
    border: 'hsl(var(--border))',
    input: 'hsl(var(--input))',
    ring: 'hsl(var(--ring))',
    chart: {
        '1': 'hsl(var(--chart-1))',
        '2': 'hsl(var(--chart-2))',
        '3': 'hsl(var(--chart-3))',
        '4': 'hsl(var(--chart-4))',
        '5': 'hsl(var(--chart-5))',
    },
    sidebar: {
        DEFAULT: 'hsl(var(--sidebar-background))',
        foreground: 'hsl(var(--sidebar-foreground))',
        primary: 'hsl(var(--sidebar-primary))',
        'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
        accent: 'hsl(var(--sidebar-accent))',
        'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
        border: 'hsl(var(--sidebar-border))',
        ring: 'hsl(var(--sidebar-ring))',
    },
};

// --- Footer Config ---
export const footer: FooterConfig = {
    logo: "data/logo-white.png",
    campusImage: "data/bitshydnew.png",
    copyright: "© TEDxBITSHyderabad 2025",
    socialLinks: [
        { icon: "facebook", url: "#" },
        { icon: "instagram", url: "#" },
        { icon: "close", url: "#" },
        { icon: "linkedin", url: "#" },
        { icon: "youtube", url: "#" },
        { icon: "dots", url: "#" },
    ],
    leftLinks: [
        { label: "GALLERY", url: "/events" },
        { label: "ABOUT", url: "/about" },
        { label: "CONTACT US", url: "#" },

    ],
    rightLinks: [
        { label: "SPONSOR", url: "#" },
        { label: "ATTENDEE RULES & REGULATIONS", url: "#" },
    ],
};

// --- Homepage Below Header Section ---
export const homepageBelowHeader: HomepageBelowHeaderConfig = {
    sectionTitles: [
        { text: "A" },
        { text: "DECADE" },
        { text: "OF" },
        { text: "IMPACT", color: "#eb0027" },
    ],
    stats: [
        { value: 28, label: "EVENTS" },
        { value: 15000, label: "ATTENDEES" },
        { value: 100, label: "SOCIAL REACH", suffix: "K+" },
        { value: 100, label: "SPEAKERS", suffix: "+" },
        { value: 12.1, label: "VIEWS", suffix: "M+" },
        { value: 10, label: "YEARS", suffix: "+" },
    ],
};

// --- Homepage Above Footer Section ---
export const homepageAboveFooter: HomepageAboveFooterConfig = {
    ctas: [
        {
            text: "Know someone who belongs on our Stage ?",
            button: { label: "NOMINATE SPEAKER", link: "#" },
        },
        {
            text: "Eager to be a part of TEDxBITSHyderabad ?",
            button: { label: "BECOME A VOLUNTEER", link: "#" },
        },
        {
            text: "Want to support TEDxBITSHyderabad as a sponsor ?",
            button: { label: "PARTNER WITH US", link: "#" },
        },
    ],
};

// --- Gallery Page Config ---
export const gallery: GalleryConfig = {
    heading: "Gallery",
    highlight: "Gallery", // currently entire word highlighted; adjust if you want partial
    description:
        "From electrifying speaker experiences to moving performances and more, take a look at some of the all-time great moments that have molded our annual events and invigorated the incredible city we call home.",
    slides: [
        {
            src: "/data/dsc_2349.jpg",
            alt: "Audience illuminated in warm light at a TEDx style event",
        },
        {
            src: "/data/750_0004.jpg",
            alt: "Silhouettes of people in a large hall with dramatic lighting",
        },
        {
            src: "/data/dsc_4896.jpg",
            alt: "Stage lights shining through atmospheric haze",
        },
    ],
};

// =========================
// Main Config Export
// =========================

export const config = {
    images,
    event,
    aboutSection,
    aboutPageSection,
    previousSpeakers,
    navigation,
    navigationConfig,
    ui,
    metadata,
    next,
    animation,
    themeColors,
    footer,
    homepageBelowHeader,
    homepageAboveFooter,
    gallery,
}; 