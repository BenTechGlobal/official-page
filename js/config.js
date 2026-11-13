/**
 * CodingHamme - Central Configuration
 * Edit this file to update brand details, links, affiliates, community links, etc.
 * No other files need to be changed for most content updates.
 */

const CONFIG = {
  brand: {
    name: "CodingHamme",
    parent: "BenTech Digital Solutions",
    slogan: "Learn. Practise. Build. Secure. Grow.",
    tagline: "Empowering Digital Skills. Building Technology Careers.",
    email: "CodingHamme@gmail.com",
    phone: "09078920214",
    phoneTel: "+2349078920214",
    whatsapp: "https://wa.me/2349078920214",
    // Engineer WhatsApp for gadget repairs (replace with real number)
    engineerWhatsapp: "https://wa.me/2349078920214",
  },

  // Social media – replace placeholders with real URLs when available
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    youtube: "#",
    tiktok: "#",
    twitter: "#",
  },

  // Community links
  community: {
    whatsappGroup: "https://wa.me/2349078920214",
    whatsappChannel: "https://wa.me/2349078920214",
    facebookGroup: "#",
  },

  // Google Forms – replace with real form URLs
  forms: {
    trainingRegistration: "#",
    courseEnrolment: "#",
    consultancyEnquiry: "#",
    serviceRequest: "#",
    examPrepRegistration: "#",
  },

  // External practice exam platform (already exists)
  practiceExamPlatform: "#", // Replace with actual URL when available

  // Affiliate / Partner brands
  affiliates: [
    {
      name: "EkidamsOutfits",
      description: "Fashion & Lifestyle",
      url: "#", // Replace with real website
      logoText: "EO",
    },
    {
      name: "Ayetoro Automobile Services",
      description: "Auto Care & Services",
      url: "#",
      logoText: "AA",
    },
    {
      name: "BenTech Digital",
      description: "Digital Solutions",
      url: "#",
      logoText: "BT",
    },
    {
      name: "Tech Mentors Hub",
      description: "Career Guidance",
      url: "#",
      logoText: "TM",
    },
    {
      name: "SecureNet Labs",
      description: "Cybersecurity Training",
      url: "#",
      logoText: "SN",
    },
  ],

  // Sample courses for dynamic rendering
  courses: {
    cybersecurity: [
      "Network Security",
      "Ethical Hacking",
      "Penetration Testing",
      "Security Operations",
      "Digital Forensics",
      "Governance, Risk & Compliance (GRC)",
      "Cloud Security",
      "Information Security Fundamentals",
    ],
    programming: [
      "HTML & CSS",
      "JavaScript",
      "Python",
      "Java",
      "Software Engineering",
      "Web Development",
      "Mobile Application Development",
    ],
    emerging: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Cloud Computing",
      "Internet of Things (IoT)",
    ],
  },

  // Blog posts (sample – replace with real content later)
  blogPosts: [
    {
      title: "Getting Started with Ethical Hacking in 2025",
      category: "Cybersecurity",
      date: "2025-09-12",
      excerpt: "A practical introduction to ethical hacking tools, mindset, and career pathways for beginners.",
      image: "cybersecurity",
    },
    {
      title: "Why Python Remains the Best First Language",
      category: "Programming",
      date: "2025-08-28",
      excerpt: "Discover why Python continues to dominate beginner-friendly programming and real-world applications.",
      image: "programming",
    },
    {
      title: "CompTIA Security+ vs OSCP: Which Path is Right for You?",
      category: "Certifications",
      date: "2025-08-15",
      excerpt: "A clear comparison of two popular cybersecurity certifications and who each is best suited for.",
      image: "certification",
    },
    {
      title: "Building Your First Portfolio as a Junior Developer",
      category: "Career",
      date: "2025-07-30",
      excerpt: "Practical steps to create a standout portfolio that attracts employers and freelance clients.",
      image: "career",
    },
  ],
};

// Make available globally
window.CONFIG = CONFIG;
