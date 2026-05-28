import React from "react";

interface Sponsor {
  label: string;
  url: string;
}

interface TextWithSponsorLinkProps {
  text: string;
  sponsor?: Sponsor;
  linkClassName?: string;
}

const TextWithSponsorLink: React.FC<TextWithSponsorLinkProps> = ({
  text,
  sponsor,
  linkClassName = "text-primary-600 font-semibold hover:text-primary-700 underline underline-offset-2 transition-colors",
}) => {
  if (!sponsor || !text.includes(sponsor.label)) {
    return <>{text}</>;
  }

  const parts = text.split(sponsor.label);

  return (
    <>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index < parts.length - 1 && (
            <a
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
            >
              {sponsor.label}
            </a>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default TextWithSponsorLink;
