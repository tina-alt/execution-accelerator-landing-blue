"use client";

import Image from "next/image";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { FadeIn } from "@/components/motion/FadeIn";

const testimonials = [
  {
    quote:
      "My business was stuck in the hundred thousands range for too long, and I was burning myself out creating new content from scratch for every platform. The most impactful piece of advice I got in the Mastermind was a simple, repeatable strategy to leverage Instagram by repurposing my core long-form content. It wasn't a vague idea - it was a clear execution plan. After implementing it, the climb wasn't slow. It was a surge. Within the year, my business crossed the million-dollar mark, all built on a smarter, more efficient content model that came directly from this group.",
    name: "Ryan Masters",
    title: "Entrepreneur. Adventurer. Book nerd. Founder of Show Her Off",
    photo: "/images/Adam Mishan.png",
  },
  {
    quote:
      "I had no interest in joining something that just added more noise. This was different - every week ended with clarity, accountability, and a next step I could act on. What made me trust the process was how actionable everything was. The group was full of experienced operators, and the support always led back to implementation.",
    name: "Aysegul Sanford",
    title: "Food Blogger, YouTuber. Founder of Fool Proof Living",
    photo: "/images/Anika Gandhi.png",
  },
  {
    quote:
      "I've increased my productivity, automated my social posts, and finally found tools I'll keep using. It's been awesome.",
    name: "Melanie Mendelson",
    title: "Owner of MelanieCooks and a full-time Internet Marketer for over 15 years",
    photo: "/images/Arica Angelo.jpg",
  },
  {
    quote:
      "For me, a mastermind is all about the quality of the people in the room. Antonio's process ensures a high bar of entry, which means the discussions are always high-level and the feedback is actionable and strategic - coming from peers operating at or above your level. That value is simply unmatched.",
    name: "Sammy Sarzoza",
    title: "Content Consultant & Content Creator Coach, Founder of Steal Hollywood",
    photo: "/images/Aditya Choksi.png",
  },
  {
    quote:
      "As a quarter-finalist in screenwriting, I knew the value of my Hollywood-level knowledge - I just didn't know how to sell it to YouTube creators. The mastermind helped me craft the positioning, Hollywood systems adapted for YouTube creators, which immediately differentiated my high-ticket $3,000 program.",
    name: "Waeez",
    title: "Founder of Eden Solutions & Onegen.ai",
    photo: "/images/Ben Wieder.jpg",
  },
  {
    quote:
      "The way I've leveled up has been by learning from people more experienced than me - and that's exactly what this mastermind delivers. In here, members drop insights and tools that took them months to figure out - and they hand them over freely. Just one tool I picked up from this group, Cassidy, is saving me tons of time. I've automated work I used to do manually, which means I'm finally working on the growth side of the business instead of stuck in the nitty-gritty.",
    name: "Randy Lau",
    title: "CEO of Made With Lau",
    photo: "/images/Chase McLaughlin.jpg",
  },
  {
    quote:
      "My YouTube views were stuck and I wasn't sure if doubling my video output would even help. The Mastermind clarified that YouTube is the key driver for my membership. Now, with a clear strategy on improving my videos and targeting the right growth metrics, I have a confident path to doubling my membership numbers in 2026. Thanks to Antonio and the mastermind group.",
    name: "Sharla Kostelyk",
    title: "Mom of 7 and founder of Freezer Meals 101",
    photo: "/images/Anke Corbin.jpg",
  },
  {
    quote:
      "We already had a successful brand, but the Building A Membership Program Mastermind was crucial for us. It gave us the actionable framework needed to build and scale a high-value paid community - turning audience connection into a reliable, consistent revenue stream.",
    name: "Sammy Sarzoza",
    title: "Content Consultant & Content Creator Coach, Founder of Steal Hollywood",
    photo: "/images/Bobby Kania.jpg",
  },
  {
    quote:
      "The Mastermind itself cuts through the noise and shows me what's actually worth shipping.",
    name: "Seth Williams",
    title: "Founder, REtipster + Stride CRM",
    photo: "/images/Seth Williams.jpg",
  },
  {
    quote:
      "The Mastermind has been hands-down one of the most valuable things I've had the good fortune to be part of, and it's often the information for other people that saves me. I can't overstate how helpful it is just to hear other people go through their hot seats - they bring up business issues that, left to my own silo, I wouldn't even have considered. For example: hearing a peer discuss their email segmentation problem prepared me to implement a better list strategy weeks before the same issue became a crisis for me. It's a forum for proactive problem-solving.",
    name: "Charles Cornell",
    title: "Founder of Better Piano",
    photo: "/images/Brian Dempsey.jpg",
  },
  {
    quote:
      "I've trained with world-class athletes. Just breathing the same air as people like that raises your standard. That's what this group is for me.",
    name: "Jim Harshaw",
    title: "All American wrestler, speaker, podcaster, exec coach. Founder of Reveal Your Path",
    photo: "/images/Jim Harshaw.jpg",
  },
  {
    quote:
      "My biggest win in the Mastermind was building the machine that runs without me. I was stuck doing all the selling, but after the clarity council I installed a cleaner, tighter, more efficient sales process. The result: my closer took a sales call for me for the first time in my life, and we closed new paid community members and coaching clients without me being on the call. If your goal is to stop being the bottleneck and truly systemize your business, this is the place.",
    name: "Arnaud Mathieu",
    title: "Founder of Entrepreneur Dad",
    photo: "/images/Judi Fox.jpg",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-[var(--paper)] py-24 sm:py-32"
    >
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
        <Stagger className="grid md:grid-cols-2 gap-8" stagger={0.08}>
          {testimonials.map((t) => (
            <StaggerItem
              key={`${t.name}-${t.quote.substring(0, 20)}`}
              className="bg-[var(--white-warm)] border border-[var(--border)] p-6 rounded-[4px] flex flex-col"
            >
              <blockquote className="mb-6 flex-1">
                <p className="text-[15px] leading-[1.75] text-[var(--ink-2)] font-light">
                  "{t.quote}"
                </p>
              </blockquote>
              <div className="flex items-center gap-4 border-t border-[var(--border)] pt-4">
                <div className="w-12 h-12 shrink-0 flex-shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={(t as any).photo || `/images/${t.name}.jpg`}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <div className="font-sans font-500 text-[16px] text-[var(--ink)]">
                    {t.name}
                  </div>
                  <div className="text-[12px] text-[var(--ink-3)] leading-snug mt-1">
                    {t.title}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
