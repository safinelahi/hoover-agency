import { useState } from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Can you redesign my existing website?",
      answer:
        "Yes — but we don’t stop at a face lift. We rebuild with performance, user experience, and brand impact in mind. Whether it's a refresh or a full transformation, your new site will be strategic, fast, and built to grow with you.",
    },
    {
      question: "How do you handle client communication?",
      answer:
        "We use streamlined communication processes tailored to your needs, ensuring transparency and responsiveness.",
    },
    {
      question: "What truly makes your agency different?",
      answer:
        "We combine strategy, speed, and white-label expertise with processes designed to scale seamlessly with your team.",
    },
    {
      question: "Do you build completely custom websites or use templates?",
      answer:
        "We offer fully custom builds as well as optimized templates based on project scope and goals.",
    },
    {
      question: "How long does it take to complete a custom website?",
      answer:
        "Timelines vary by scope, but most custom websites are completed within 4–8 weeks.",
    },
    {
      question: "Will my website be mobile-friendly and SEO-ready?",
      answer:
        "Absolutely — all of our builds prioritize SEO structure, speed, and mobile responsiveness.",
    },
    {
      question: "What happens if something breaks or I need changes later?",
      answer:
        "We offer continued support, maintenance, and update options based on your needs.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0); // First FAQ open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto py-20 px-6">
      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-24">
        We've gathered answers to some <br /> of the most common questions <br /> we get.
      </h2>

      {/* FAQ List */}
      <div className="space-y-8 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-6 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <p className="text-lg md:text-xl font-semibold">
                {faq.question}
              </p>
              <span className="text-3xl font-light">
                {openIndex === index ? "➖" : "➕"}
              </span>
            </div>

            {openIndex === index && (
              <p className="mt-4 text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
