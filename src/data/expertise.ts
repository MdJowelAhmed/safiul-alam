import type { Service } from "@/types";

export const expertiseList: Service[] = [
  {
    id: "meta-ads",
    title: "Meta Ads",
    description:
      "Facebook and Instagram advertising campaigns built for measurable customer acquisition. From prospecting to retargeting, I build and scale campaigns that convert.",
    icon: "BarChart2",
    capabilities: ["Campaign Strategy", "Audience Research", "Creative Testing", "Scaling & Optimisation"],
    featured: true,
  },
  {
    id: "google-ads",
    title: "Google Ads",
    description:
      "Search, Shopping, Display and YouTube campaigns targeting high-intent audiences. Built for real business results, not just clicks.",
    icon: "Search",
    capabilities: ["Search Campaigns", "Shopping Campaigns", "YouTube Ads", "Performance Max"],
  },
  {
    id: "tiktok-ads",
    title: "TikTok Ads",
    description:
      "High-ROI performance campaigns on TikTok for eCommerce and consumer brands. Creative-first strategy with data-driven optimisation.",
    icon: "Play",
    capabilities: ["In-Feed Ads", "Spark Ads", "Creative Strategy", "Audience Targeting"],
  },
  {
    id: "linkedin-ads",
    title: "LinkedIn Ads",
    description:
      "B2B lead generation and brand positioning through LinkedIn's professional targeting. Ideal for high-value services and enterprise outreach.",
    icon: "Briefcase",
    capabilities: ["Lead Gen Forms", "Sponsored Content", "Account Targeting", "B2B Campaigns"],
  },
  {
    id: "analytics-tracking",
    title: "Analytics & Conversion Tracking",
    description:
      "Accurate measurement is the foundation of every successful campaign. I set up GTM, GA4, Pixel, CAPI and server-side tracking so your data is clean and decisions are informed.",
    icon: "LineChart",
    capabilities: ["Google Tag Manager", "GA4 Setup", "Meta Pixel + CAPI", "Server-Side Tracking"],
  },
  {
    id: "content-strategy",
    title: "Content Strategy",
    description:
      "Messaging and creative frameworks that align with your audience's intent and move them through the funnel from awareness to conversion.",
    icon: "FileText",
    capabilities: ["Funnel Messaging", "Ad Copywriting", "Creative Briefs", "Content Calendar"],
  },
  {
    id: "ai-strategy",
    title: "AI Strategy & Business Innovation",
    description:
      "Integrating AI into marketing workflows to automate repetitive tasks, improve personalisation, and unlock growth opportunities faster.",
    icon: "Cpu",
    capabilities: ["AI Workflow Integration", "Prompt Engineering", "Automation Design", "AI-Assisted Reporting"],
  },
  {
    id: "funnel-optimisation",
    title: "Funnel Optimisation",
    description:
      "Identifying and fixing drop-off points across the full customer journey — from ad click to purchase — to improve conversion rates and reduce wasted spend.",
    icon: "Filter",
    capabilities: ["Landing Page Analysis", "CRO Strategy", "A/B Testing", "User Journey Mapping"],
  },
  {
    id: "crm-automation",
    title: "CRM & Marketing Automation",
    description:
      "End-to-end marketing automation using GoHighLevel, Make.com, Kit and Zapier to nurture leads and convert them into customers automatically.",
    icon: "Zap",
    capabilities: ["GoHighLevel", "Make.com", "Kit", "Email & SMS Sequences"],
  },
];
