import React from "react";
import Image from "next/image";

interface Partner {
  name: string;
  logo: string;
  url?: string;
  imgWidth?: number;
  imgHeight?: number;
}

const CommunityPartnerSection: React.FC = () => {
  const partners: Partner[] = [
    {
      name: "ZürichJS",
      logo: "/assets/partners/zurichjs.svg",
      url: "https://zurichjs.com",
    },
    {
      name: "WTS",
      logo: "/assets/partners/wts.svg",
      url: "https://wts.sh/",
      imgWidth: 217,
      imgHeight: 108,
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
              className={`flex items-center justify-center p-8 group transition-all duration-300 ${index === partners.length - 1 && partners.length % 2 !== 0 ? "md:col-span-2" : ""}`}
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
                    width={partner.imgWidth || 200}
                    height={partner.imgHeight || 80}
                    className="object-contain h-16 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    style={partner.imgHeight && partner.imgHeight !== 80 ? { height: partner.imgHeight * 0.75 } : undefined}
                  />
                </a>
              ) : (
                <div className="flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={partner.imgWidth || 200}
                    height={partner.imgHeight || 80}
                    className="object-contain h-16 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    style={partner.imgHeight && partner.imgHeight !== 80 ? { height: partner.imgHeight * 0.75 } : undefined}
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
