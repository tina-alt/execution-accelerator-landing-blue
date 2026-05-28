export type Tool = {
  name: string;
  stat: string;
  body: string;
  featured: boolean;
  image?: string;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  tools: Tool[];
};

export const categories: Category[] = [
  {
    id: "youtube",
    name: "YouTube & Video",
    description: "Tools that compound on every video you publish.",
    tools: [
      {
        name: "YouTube Retention Grapher",
        stat: "Surfaces the drop-off second on every video",
        body: "Pulls retention curves for every video on the channel, normalises them, and surfaces the exact second where viewers leave so the next script fixes the leak.",
        featured: true,
        image: "/images/YouTube Retention Grapher.png",
      },
      {
        name: "Video Title Optimizer",
        stat: "3× lift in CTR on tested videos",
        body: "Takes any working title and rewrites it into three tested variants (Safe, Bold, Curiosity) tuned to the channel's top performers.",
        featured: true,
        image: "/images/Video title optimizer.png",
      },
      {
        name: "YT Thumbnail Generator",
        stat: "Cut design time from 90 min → 5 min",
        body: "Generates on-brand thumbnail variants from a single prompt and the channel's existing style library.",
        featured: true,
        image: "/images/ThumbnailGenerator.png",
      },
      {
        name: "YT Channel Auditor",
        stat: "Full channel audit in 4 minutes",
        body: "Audits a channel's last 90 days against benchmarks — pacing, packaging, retention, CTR — and outputs a prioritised fix list.",
        featured: false,
      },
      {
        name: "Video Thumbnail Critic",
        stat: "Predicts CTR before you publish",
        body: "Scores any draft thumbnail against the channel's winners and tells you exactly which element is the weak link.",
        featured: false,
      },
    ],
  },
  {
    id: "content",
    name: "Content & Blog",
    description: "Replace manual publishing work with systems that ship daily.",
    tools: [
      {
        name: "WordPress Blog Updater",
        stat: "20 hrs/week saved",
        body: "Refreshes existing blog posts in the founder's voice, regenerates images, updates schema, and republishes — at scale, across hundreds of URLs.",
        featured: true,
      },
      {
        name: "Content Updates Automated",
        stat: "5+ hrs/week saved",
        body: "Pulls live editorial status from Notion and delivers a single daily dashboard — replacing the founder's manual check-ins with editors.",
        featured: true,
      },
      {
        name: "Blog Post Writer",
        stat: "Drafts that pass human review",
        body: "Long-form drafts in the founder's voice with E-E-A-T signals, image prompts, and on-brand structure — built from a topic and a keyword.",
        featured: true,
      },
      {
        name: "Content Management System",
        stat: "One dashboard, every channel",
        body: "Unifies editorial calendars across blog, YouTube, and email into a single board with status, owner, and ship date.",
        featured: false,
      },
    ],
  },
  {
    id: "sales",
    name: "Sales & Leads",
    description: "Pipeline that runs while you sleep.",
    tools: [
      {
        name: "Lead Finder & Qualifier",
        stat: "Replaces 70 manual hours/week of prospecting",
        body: "Finds, enriches, and scores prospects against an ideal-customer profile — then drops the qualified ones into the CRM ready for outreach.",
        featured: true,
      },
      {
        name: "Lead Caller",
        stat: "Books meetings without a human SDR",
        body: "Voice-AI dials qualified leads, runs the qualifying script, books straight to the calendar, and hands off only the meeting-ready conversations.",
        featured: true,
      },
      {
        name: "Sales Page Builder",
        stat: "50% lift in checkout conversion (cohort 3)",
        body: "Drafts a full sales page from an offer brief — headline, sections, proof, FAQ — wired in the founder's voice and benchmarked against winners.",
        featured: true,
      },
      {
        name: "Automated Email Sequences",
        stat: "Set up once, runs forever",
        body: "Drafts and ships welcome, nurture, and re-activation sequences segmented by behaviour — no more starting from a blank template.",
        featured: false,
      },
      {
        name: "Agentive AI Email Managers",
        stat: "Inbox zero, daily",
        body: "Reads, sorts, drafts replies, and flags only what needs the founder's eyes — every other email gets handled in the background.",
        featured: false,
      },
    ],
  },
  {
    id: "social",
    name: "Social & Marketing",
    description: "Show up everywhere without burning a marketing hire.",
    tools: [
      {
        name: "Facebook Auto Publisher",
        stat: "43% revenue increase, 90 days post-build",
        body: "Generates on-brand posts and creative every day, schedules them, and rotates winners — without a social media manager touching the queue.",
        featured: true,
      },
      {
        name: "FB Image Generator",
        stat: "Endless on-brand creative",
        body: "Spits out hundreds of on-brand image variations from a single prompt, ready for the feed.",
        featured: true,
      },
      {
        name: "Quiz Builder",
        stat: "Single-file lead-magnets that share themselves",
        body: "Generates a self-contained interactive quiz from a topic — multi-result, weighted scoring, Facebook share built in — drops into a single WordPress block.",
        featured: true,
      },
    ],
  },
  {
    id: "internal",
    name: "Internal Apps",
    description: "Custom tools that didn't exist before — built in days.",
    tools: [
      {
        name: "Custom Chatbots",
        stat: "66% reduction in customer-service costs",
        body: "Trained on the business's own documentation, products, and policies — answering 24/7 with hand-off to a human only when it matters.",
        featured: true,
      },
      {
        name: "Scantron Scoring App",
        stat: "Hours of grading → seconds",
        body: "Photograph a stack of paper scantrons, get scored results, item-analysis, and a printable report.",
        featured: true,
      },
      {
        name: "Recipe Downscaler",
        stat: "From restaurant scale to family-size",
        body: "Converts a commercial recipe into ratios that actually work at home — and the other way around.",
        featured: false,
      },
      {
        name: "Vocal Training App",
        stat: "Custom diagnostic + drill library",
        body: "A bespoke vocal-training app for a coach — diagnostic intake, custom drill library, progress tracking, on the coach's brand.",
        featured: false,
      },
    ],
  },
];
