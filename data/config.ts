// Centralized configuration for the entire app

export const config = {
    // Image Paths
    images: {
        logo: "data/logos/tedxlogo.jpeg",
        sponsorLogos: [
            "data/logos/microsoft.png",
            "data/logos/twitch.png",
            "data/logos/twitter.png",
            "data/logos/facebook.png",
            "data/logos/youtube.png",
            "data/logos/mcdonalds.png",
            "data/logos/maps.png",
            "data/logos/adobe.png",
            "data/logos/google-play.png",
            "data/logos/amd.png",
            "data/logos/electronics-arts.png",
            "data/logos/logo.png",
            "data/logos/netflix.png",
            "data/logos/player.png",
            "data/logos/prime.png",
            "data/logos/spotify.png",
            "data/logos/telegram.png",
        ],
        heroBackground: "data/audience-background.jpeg",
        ticket: "data/serendipity-ticket.png",
    },

    // Event Info
    event: {
        date: "10th December 2024",
        time: "9 am – 6 pm",
        location: "Hyderabad, India",
        heroTagline:
            "Discover the magic of the unexpected connections, and explore the power of ideas unfolding into life’s little miracles!",
        sponsorSection: {
            title: "Our Valued Sponsors",
            description: "We're grateful to our sponsors who make this event possible.",
        },
    },

    // About Us Section
    aboutSection: {
        title: "About Us",
        description: "Welcome to TEDx BITS Hyderabad! This is the About Us page. Here you can share your event's story, mission, and team. (Replace this placeholder with real content about your organization, vision, and what makes your event unique.)",
    },

    // About Us Page Content
    aboutPageSection: {
        mainHeading: {
            bold: "TED",
            rest: " is a nonprofit organization devoted to ideas worth spreading",
        },
        aboutTED: {
            heading: "About ",
            highlight: "TED",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget aliquam massa nisl quis neque. Integer euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget aliquam massa nisl quis neque. Integer euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget aliquam massa nisl quis neque.",
        },
        aboutTEDx: {
            heading: "About ",
            highlight: "TEDx",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget aliquam massa nisl quis neque. Integer euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget aliquam massa nisl quis neque. Integer euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget aliquam massa nisl quis neque.",
        },
        teamSection: {
            preHeading: "The",
            mainHeading: {
                bold: "TEDx",
                rest: " BITS Hyderabad",
            },
            teamLabel: "TEAM",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget aliquam massa nisl quis neque. Integer euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget aliquam massa nisl quis neque. Integer euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget aliquam massa nisl quis neque.",
            members: [
                {
                    name: "Alice Johnson",
                    role: "Curator",
                    photo: "/data/placeholder-user.jpg",
                    quote: "Ideas are the currency of the future.",
                    linkedin: "https://linkedin.com/in/alice",
                    contactInfo: "alice@tedx.com",
                },
                {
                    name: "Bob Williams",
                    role: "Speaker Curator",
                    photo: "/data/placeholder-user.jpg",
                    quote: "Every voice has a story worth sharing.",
                    linkedin: "https://linkedin.com/in/bob",
                    contactInfo: "bob@tedx.com",
                },
                {
                    name: "Charlie Brown",
                    role: "Logistics Head",
                    photo: "/data/placeholder-user.jpg",
                    quote: "Seamless execution, impactful ideas.",
                    linkedin: "https://linkedin.com/in/charlie",
                    contactInfo: "charlie@tedx.com",
                },
                {
                    name: "Diana Miller",
                    role: "Marketing Lead",
                    photo: "/data/placeholder-user.jpg",
                    quote: "Spreading ideas, one story at a time.",
                    linkedin: "https://linkedin.com/in/diana",
                    contactInfo: "diana@tedx.com",
                },
                {
                    name: "Eve Davis",
                    role: "Volunteer Coordinator",
                    photo: "/data/placeholder-user.jpg",
                    quote: "The power of community drives us.",
                    linkedin: "https://linkedin.com/in/eve",
                    contactInfo: "eve@tedx.com",
                },
                {
                    name: "Frank White",
                    role: "Design Lead",
                    photo: "/data/placeholder-user.jpg",
                    quote: "Visualizing ideas, inspiring minds.",
                    linkedin: "https://linkedin.com/in/frank",
                    contactInfo: "frank@tedx.com",
                },
            ],
        },
    },

    // Navigation URLs
    navigation: [
        { label: "Events", href: "/events" },
        { label: "Speakers", href: "/speakers" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Register", href: "/register" },
    ],

    // UI Strings
    ui: {
        register: "Register",
        events: "Events",
        speakers: "Speakers",
        about: "About",
        contact: "Contact",
        sponsorsTitle: "Our Valued Sponsors",
        sponsorsDescription: "We're grateful to our sponsors who make this event possible.",
        buyTickets: "BUY TICKETS",
    },

    // Metadata
    metadata: {
        title: "TEDx",

    },

    // Next.js Config
    next: {
        allowedDevOrigins: [
            "https://*.ngrok-free.app",
            "https://*.ngrok.app",
        ],
        images: {
            unoptimized: true,
        },
    },

    // Sponsor Animation Settings
    animation: {
        enableDoubleRow: false,
        useGlassyBg: false,
        animationDuration: 400,
    },

    // Theme Colors (for tailwind.config.ts)
    themeColors: {
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
    },
}; 