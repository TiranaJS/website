import React from "react";
import Image from "next/image";

interface Partner {
  name: string;
  logo: string;
  url?: string;
}

const CommunityPartnerSection: React.FC = () => {
  const partners: Partner[] = [
    {
      name: "ZürichJS",
      logo: "/assets/partners/zurichjs.svg",
      url: "https://zurichjs.com",
    },
    {
      name: "JetBrains",
      logo: "/assets/partners/jetbrains.svg",
      url: "https://www.jetbrains.com",
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-primary mb-4">
            Community Partners
          </h2>
          <p className="text-xl text-dark-secondary max-w-3xl mx-auto leading-relaxed">
            We&apos;re grateful to our partners who support our mission to build
            a vibrant JavaScript community in Tirana.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-8 group transition-all duration-300"
            >
              {partner.url ? (
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={80}
                    className="object-contain h-16 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </a>
              ) : (
                <div className="flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={80}
                    className="object-contain h-16 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityPartnerSection;
