import React from "react";
import Image from "next/image";

interface Sponsor {
  name: string;
  logo: string;
  url?: string;
}

const SponsorsSection: React.FC = () => {
  const sponsors: Sponsor[] = [
    {
      name: "Sigma Software",
      logo: "/assets/sponsors/sigma.svg",
      url: "https://sigma.software",
    },
  ];

  return (
    <section className="py-16 bg-primary-50 border-y border-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-primary mb-4">
            Sponsors
          </h2>
          <p className="text-xl text-dark-secondary max-w-3xl mx-auto leading-relaxed">
            Events like ours don&apos;t happen alone. We&apos;re grateful to our
            sponsors for stepping up to support our meetups and help grow
            Tirana&apos;s JavaScript community.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center p-8 group transition-all duration-300"
            >
              {sponsor.url ? (
                <a
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                  aria-label={sponsor.name}
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={296}
                    height={80}
                    className="object-contain h-20 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </a>
              ) : (
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={296}
                  height={80}
                  className="object-contain h-20 w-auto opacity-70"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
