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
      const cardWidth = 528 + 32;
      const totalCards = cards.length;
      const totalScroll = cardWidth * (totalCards - 1);

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
      text: "A beautiful website is easy. A website that’s clear, user-friendly, and built to convert? That's what we deliver. We design sites that don’t just look nice they work for your clients",
    },
    {
      step: "Step 3",
      title: "SEO & Marketing",
      text: "A beautiful website is easy. A website that’s clear, user-friendly, and built to convert? That's what we deliver. We design sites that don’t just look nice they work for your clients",
    },
    {
      step: "Step 4",
      title: "Website Maintenance",
      text: "A beautiful website is easy. A website that’s clear, user-friendly, and built to convert? That's what we deliver. We design sites that don’t just look nice they work for your clients",
    },
    {
      step: "Step 5",
      title: "Analytics & Optimization",
      text: "A beautiful website is easy. A website that’s clear, user-friendly, and built to convert? That's what we deliver. We design sites that don’t just look nice they work for your clients",
    },
  ];

  return (
    <section className="bg-[#F3F3F3]">
       <div className="text-black flex justify-center pt-[100px] ">
        <div className="flex flex-col justify-center items-center w-[794px]">
<h1 className="text-[54px] text-center">Skip the Stress, Scale Faster. <br />Here’s How We Help.</h1>
          <p className="text-center text-[18px] w-[675px]">Take on more projects, skip the stress, and scale faster with a team that’s always got your back.</p>
        </div>
          
       </div>
     
      <section
        ref={sectionRef}
        className="relative overflow-hidden h-screen flex items-center"
      >
        {/* Fixed Arrow */}
        <div
          className="absolute left-0 top-0 h-full flex items-center justify-center px-4"
          style={{ width: "120px", backgroundColor: "#F3F3F3", zIndex: 10 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width=""
            height="100"
            viewBox="0 0 79 67"
            fill="none"
          >
            <path
              d="M0 33.3119C0 31.8776 1.16666 30.7136 2.60416 30.7136H70.2L43.4875 4.50177C43.2324 4.26531 43.0275 3.98022 42.8848 3.66336C42.7421 3.3465 42.6645 3.00431 42.6566 2.65701C42.6488 2.30972 42.7108 1.96438 42.839 1.64141C42.9672 1.31844 43.159 1.0244 43.4031 0.776691C43.6472 0.528977 43.9386 0.332615 44.2601 0.199216C44.5816 0.0658174 44.9266 -0.00190978 45.2747 4.09721e-05C45.6229 0.00199173 45.9671 0.0735804 46.2871 0.210573C46.607 0.347566 46.8962 0.547181 47.1375 0.797615L78.3625 31.4349L78.4188 31.4889C78.6888 31.7627 78.8946 32.0928 79.0214 32.4555C79.1482 32.8181 79.1928 33.2043 79.1521 33.5863C79.0859 34.2111 78.795 34.7908 78.3333 35.218L47.1375 65.8241C46.8962 66.0745 46.607 66.2741 46.2871 66.4111C45.9671 66.5481 45.6229 66.6197 45.2747 66.6217C44.9266 66.6236 44.5816 66.5559 44.2601 66.4225C43.9386 66.2891 43.6472 66.0927 43.4031 65.845C43.159 65.5973 42.9672 65.3033 42.839 64.9803C42.7108 64.6573 42.6488 64.312 42.6566 63.9647C42.6645 63.6174 42.7421 63.2752 42.8848 62.9583C43.0275 62.6415 43.2324 62.3564 43.4875 62.1199L70.2 35.9081H2.60416C1.16666 35.9081 0 34.7482 0 33.3119Z"
              fill="#0830EA"
              fillOpacity="0.8"
            />
          </svg>
        </div>

        {/* Cards */}
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
    </section>
  );
}
