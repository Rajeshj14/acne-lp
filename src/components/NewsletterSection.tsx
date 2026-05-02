"use client";

const features = [
  {
    id: 1,
    title: "Expert Care for Acne Treatment",
    description:
      "Our dermatologists use advanced, personalized treatments to clear acne and prevent future breakouts.",
    side: "left",
  },
  {
    id: 2,
    title: "Correct Diagnosis Before Any Treatment",
    description:
      "Hormonal, bacterial, fungal, and cystic acne all require different treatments. We identify your acne type before prescribing anything so you are not wasting money on the wrong solution.",
    side: "left",
  },
  {
    id: 3,
    title: "Effective Acne Scar Solutions",
    description:
      "We offer specialized treatments like chemical peels, lasers, and dermarolling to reduce acne scars and restore smooth skin.",
    side: "right",
  },
  {
    id: 4,
    title: "Proven Results with Minimal Downtime",
    description:
      "Achieve clear, healthy skin with our safe, clinically-proven treatments, with minimal recovery time.",
    side: "right",
  },
];

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard = ({ title, description }: FeatureCardProps) => (
  <div className="flex-1 flex flex-col justify-center py-4 sm:py-5 md:py-6 group cursor-pointer transition-all duration-300 hover:translate-x-1">
    
    <h3 className="lp-subtitle mb-2 sm:mb-3 text-[#122017] text-lg sm:text-xl md:text-2xl transition-colors duration-300 group-hover:text-[#b72c78]">
      {title}
    </h3>

    <div className="border-b border-[#122017]/15 mb-3 sm:mb-4 w-full transition-colors duration-300 group-hover:border-[#b72c78]" />

    <p className="lp-body text-[#4f6d57] text-sm sm:text-base">
      {description}
    </p>
  </div>
);

export const NewsletterSection = () => {
  return (
    <section
      className="w-full py-8 sm:py-14 md:py-16 px-4 sm:px-6 md:px-16"
      style={{ background: "#f7fbf8" }}
    >
      {/* Heading */}
      <div className="text-center mb-10 sm:mb-12 md:mb-14">
        <h2 className="lp-title max-w-5xl mx-auto text-[#122017] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Why Kakinada Chooses{" "}
          <span
            className="italic inline-block"
            style={{ color: "#b72c78" }}
          >
            Sudha Skin Clinic
          </span>{" "}
          For their acne treatments
        </h2>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto max-sm:gap-2 gap-8 md:gap-0">
        
        {/* LEFT */}
        <div className="flex flex-col order-1 md:order-1 max-sm:mr-0 sm:mr-8">
          {features
            .filter((f) => f.side === "left")
            .map((f) => (
              <FeatureCard key={f.id} {...f} />
            ))}
        </div>

        {/* CENTER IMAGES */}
        <div className="relative order-2 md:order-2 max-sm:m-0 mt-8 mb-8" style={{ minHeight: "320px" }}>
          
          <div
            className="absolute overflow-hidden rounded-sm shadow-md"
            style={{
              top: "0px",
              left: "0px",
              width: "58%",
              height: "55%",
              zIndex: 1,
            }}
          >
            <img
              src="images13.jpg"
              alt="Dermatology consultation"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="absolute overflow-hidden rounded-sm shadow-lg"
            style={{
              top: "33%",
              left: "30%",
              width: "70%",
              height: "60%",
              zIndex: 2,
            }}
          >
            <img
              src="images12.jpg"
              alt="Acne skin treatment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col order-3 md:order-3 max-sm:ml-0 sm:ml-8">
          {features
            .filter((f) => f.side === "right")
            .map((f) => (
              <FeatureCard key={f.id} {...f} />
            ))}
        </div>
      </div>
    </section>
  );
};