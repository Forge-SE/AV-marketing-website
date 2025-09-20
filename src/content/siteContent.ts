

export type NavItem = {
  name: string;
  link: string;
  children?: { name: string; link: string }[];
};

export const siteContent = {
  meta: {
    title: "Afrovivo Energy",
    description: "Powering Africa's future through innovative energy solutions.",
  },
  nav: {
    items: [
      { name: "Home", link: "/" },
      {
        name: "About",
        link: "/#about",
        children: [
          { name: "Who We Are", link: "#who-we-are" },
          { name: "Mission & Vision", link: "#mission-and-vision" },
          { name: "Why Afrovivo", link: "#why-afrovivo" },
          { name: "Our Leadership", link: "#our-leadership" },
        ],
      },
      { name: "Our Focus", link: "#our-focus" },
      { name: "Investors & Partners", link: "#investors-and-partners" },
      { name: "The Energy Fund", link: "/energy-fund" },
    ] as NavItem[],
    cta: "Get Started",
  },
  home: {
    hero: {
      title: "Powering Africa's future. Driving global energy investments",
      sub: "Afrovivo International Ltd is a next-generation energy investment and infrastructure company, building the bridge between global capital and Africa’s fast-growing oil, gas, and renewable energy markets.",
      primaryCta: "Explore our strategy",
      secondaryCta: "Partner With Us",
    },
    about: {
      banner: {
        pre: "Creating",
        emphasis: "sustainable energy value",
        post: "beyond investments",
      },
      whoWeAre: {
        heading: "Who We Are",
        body:
          "Afrovivo International Ltd is a registered limited liability company headquartered in Ghana with a mission to unlock Africa’s energy potential. We specialize in oil and gas infrastructure projects, joint ventures, and strategic acquisitions that fuel growth across West Africa",
        imageAlt: "Afrovivo Team",
      },
      vision: {
        heading: "Our Vision",
        body:
          "To become Africa’s leading energy investment house — mobilizing capital, accelerating infrastructure, and creating sustainable value for investors, governments, and communities",
      },
      mission: {
        heading: "Our Mission",
        body:
          "To provide innovative investment solutions that drive energy security, economic transformation, and long-term prosperity in Africa",
      },
    },
    focus: {
      heading: "Our Focus",
    },
    why: {
      heading: "Why Afrovivo ?",
      items: [
        {
          title: "Deep Market Expertise",
          description:
            "We understand Africa’s regulatory, financial, and operational landscapes",
        },
        {
          title: "Global Standards",
          description:
            "We structure deals with institutional-grade rigor and governance",
        },
        {
          title: "Strategic Partnerships",
          description:
            "We build joint ventures that bring global players into African markets.",
        },
        {
          title: "Long-term Value Creation",
          description:
            "Our focus is not only short-term returns, but sustainable impact.",
        },
      ],
    },
    leadership: {
      heading: "Our Leadership",
      lead: `Afrovivo’s leadership team combines expertise in energy, finance, and global markets. Our C-Suite and advisors include seasoned professionals with experience in capital markets, oil & gas operations, and strategic development across Africa and beyond.`,
      team: [
        { name: "John Doe", role: "CEO", image: "/person.jpg" },
        { name: "Jane Smith", role: "CTO", image: "/person.jpg" },
        { name: "Mike Johnson", role: "CFO", image: "/person.jpg" },
        { name: "Emily Davis", role: "COO", image: "/person.jpg" },
      ],
      teamCta: "Meet Our Team",
    },
    investors: {
      heading: "Investors & Partners",
      sub: "We work with",
      items: [
        { title: "Government & Regulatory Agencies" },
        { title: "Development Finance Institutions (DFIs)" },
        { title: "Private Equity Funds" },
        { title: "Sovereign Wealth Funds" },
        { title: "Family Offices & HNWIs" },
        { title: "Institutional Investors" },
      ],
      cta: "Explore partnership opportunities",
    },
  },
  energyFund: {
    meta: {
      title: "Energy Fund | Afrovivo Energy",
      description:
        "Afrovivo Energy Fund: Overview, investment strategy, governance, benefits, and partnership opportunities across Africa's energy value chain.",
    },
    hero: {
      title: "Afrovivo Energy Fund",
      sub: "Connecting global capital to Africa's high-potential energy assets.",
    },
    sections: {
      overview: {
        title: "Overview",
        body:
          "The Afrovivo Energy Fund is our flagship investment vehicle focused on Africa's oil, gas, and energy infrastructure. The Fund connects global investors with high-potential energy assets across West Africa and beyond, creating a platform for sustainable growth, energy security, and attractive returns.",
      },
      strategy: {
        title: "Investment Strategy",
        bullets: [
          "Upstream – Strategic stakes in exploration and production projects with proven reserves.",
          "Midstream – Investments in storage, distribution, and transportation infrastructure (depots, pipelines, terminals).",
          "Downstream – Retail distribution, mobile fuel delivery, and regional supply chain networks.",
          "Energy Transition – Selective investments in renewables and clean energy initiatives aligned with Africa’s long-term transition goals.",
        ],
      },
      whyInvest: {
        title: "Why Invest with Afrovivo?",
        bullets: [
          "High-Growth Market – Africa is one of the fastest-growing energy markets in the world.",
          "Institutional-Grade Governance – International compliance, due diligence, and reporting standards.",
          "Experienced Leadership – Expertise in energy, finance, and investment banking.",
          "Diversification – Exposure across oil, gas, and renewables within a single African-focused platform.",
          "Impact-Driven – We invest in energy access, infrastructure development, and sustainable communities.",
        ],
      },
      fundStructure: {
        title: "Fund Structure",
        items: [
          { label: "Fund Type", value: "Private Equity / Infrastructure Fund" },
          { label: "Geographic Focus", value: "West Africa, expanding pan-Africa" },
          { label: "Instruments", value: "Equity, Debt, Joint Ventures, Hybrid Structures" },
          {
            label: "Target Investors",
            value:
              "Institutional investors, family offices, DFIs, sovereign wealth funds",
          },
        ],
      },
      investorBenefits: {
        title: "Investor Benefits",
        bullets: [
          "Access to exclusive African energy opportunities not typically available in global markets",
          "Long-term stable cash flows from infrastructure assets",
          "Competitive risk-adjusted returns with strong growth potential",
          "Transparent reporting and active risk management",
        ],
      },
      partnerships: {
        title: "Partnership Opportunities",
        bullets: [
          "International Oil Companies (IOCs)",
          "Local Energy Operators",
          "Governments & Regulators",
          "Development Partners & DFIs",
        ],
        closing: "Together, we deliver projects that reshape Africa’s energy future.",
      },
      cta: {
        title: "Join us in building Africa’s energy legacy.",
        partner: "📩 Partner With the Fund",
        deck: "📑 Request Investor Deck",
      },
    },
  },
  services: {
    items: [
      {
        id: "infrastructure",
        title: "Energy Infrastructure & Investments",
        description: "Large-scale oil and gas infrastructure development",
        details:
          "We invest in and develop comprehensive energy infrastructure including storage facilities, pipelines, and distribution networks. Our approach focuses on creating sustainable, scalable solutions that serve Africa's growing energy needs while generating strong returns for investors.",
        image: "/infra.png",
        features: [
          "Storage facility development",
          "Pipeline infrastructure",
          "Distribution networks",
          "Facility management",
          "Strategic partnerships",
        ],
      },
      {
        id: "acquisitions",
        title: "Strategic Acquisitions & Joint Ventures",
        description: "Partnering for high-value energy assets",
        details:
          "Afrovivo partners with operators, governments, and institutional investors to acquire and grow high-value energy assets. We leverage our deep market knowledge and strategic relationships to identify and execute transformative deals across the African energy sector.",
        image: "/team.jpg",
        features: [
          "Asset acquisition strategies",
          "Government partnerships",
          "Institutional investor relations",
          "Due diligence processes",
          "Value creation programs",
        ],
      },
      {
        id: "capital",
        title: "Capital Solutions",
        description: "Tailored financing for energy projects",
        details:
          "Through our Energy Fund, we provide comprehensive financing solutions for energy projects across Africa. Our flexible approach combines equity, debt, and joint financing structures to meet the unique needs of each project and maximize value for all stakeholders.",
        image: "/hero-section-c.jpg",
        features: [
          "Equity financing",
          "Debt structuring",
          "Joint financing models",
          "Risk management",
          "Portfolio optimization",
        ],
      },
      {
        id: "renewables",
        title: "Transition & Renewables",
        description: "Exploring sustainable energy opportunities",
        details:
          "While oil and gas remain our anchor, we actively explore renewable opportunities that align with Africa's long-term energy transition. We focus on projects that complement our existing portfolio while building capabilities for the energy future.",
        image: "/hero-section-b.jpg",
        features: [
          "Renewable project assessment",
          "Transition planning",
          "Hybrid energy solutions",
          "Technology partnerships",
          "Sustainable development",
        ],
      },
    ],
  },
} as const;

export type SiteContent = typeof siteContent;
