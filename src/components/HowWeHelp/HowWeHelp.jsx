import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HowWeHelp() {
  const sectionRef = useRef(null);
  const innerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const container = innerRef.current;
      const cards = container.children;
      const cardWidth = 528 + 32; // 528px card + 32px gap
      const totalCards = cards.length;
      const totalScroll = cardWidth * (totalCards - 1); // scroll distance

      gsap.to(container, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${totalScroll}`,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cardsData = [
    {
      step: "Step 1",
      title: "Web Design",
      text: "A beautiful website is easy. A website that’s clear, user-friendly, and built to convert? That's what we deliver. We design sites that don’t just look nice they work for your clients.",
    },
    {
      step: "Step 2",
      title: "Web Development",
      text: "We turn designs into functional, fast, and responsive websites using the latest technologies.",
    },
    {
      step: "Step 3",
      title: "SEO & Marketing",
      text: "We help your website get found by the right audience and convert visitors into customers.",
    },
    {
      step: "Step 4",
      title: "Website Maintenance",
      text: "Ongoing support to keep your website secure, updated, and running smoothly.",
    },
    {
      step: "Step 5",
      title: "Analytics & Optimization",
      text: "We track user behavior and improve website performance to maximize conversions.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F3F3F3] text-white h-screen flex items-center"
    >
      {/* Fixed Left Arrow with Background "mask" */}
      <div
        className="absolute left-0 top-0 h-full flex items-center justify-center"
        style={{ width: "80px", backgroundColor: "#F3F3F3", zIndex: 10 }}
      >
        <div className="text-4xl cursor-pointer">➤</div>
      </div>

      {/* Horizontal Cards */}
      <div ref={innerRef} className="flex gap-8 pl-32">
        {cardsData.map((card, i) => (
          <div
            key={i}
            className="flex-shrink-0"
            style={{
              width: "528px",
              padding: "56px 24px",
              flexDirection: "column",
              display: "flex",
              alignItems: "flex-start",
              gap: "40px",
              borderRadius: "10px",
              background: "#0830EA",
            }}
          >
            <div className="border border-gray-700 rounded inline-flex items-center gap-2 py-1 px-3">
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <span className="text-gray-400 text-sm">{card.step}</span>
            </div>
            <h4 className="text-3xl font-semibold leading-snug">{card.title}</h4>
            <p className="text-gray-400 text-base">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
