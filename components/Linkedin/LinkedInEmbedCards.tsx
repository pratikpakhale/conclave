import React from "react";

type LinkedInEmbedCardsProps = {
  postLink: string;
};

const LinkedInEmbedCards: React.FC<LinkedInEmbedCardsProps> = ({
  postLink,
}) => {
  const embedUrl = `https://www.linkedin.com/embed/feed/update/${postLink}`;
  const externalUrl = `https://www.linkedin.com/feed/update/${postLink}`;

  return (
    <div className="embla__slide w-[504px] h-[500px] flex flex-col items-center justify-between">
      {" "}
      {/* Fixed height */}
      <iframe
        src={embedUrl}
        height="400px"
        width="100%"
        frameBorder="0"
        allowFullScreen={true}
        title="Embedded LinkedIn Post"
        className="border rounded-lg"
      ></iframe>
      {/* "Read More" button */}
      <a
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 bg-[#0072b1] text-white px-4 py-2 rounded-lg"
      >
        Read More
      </a>
    </div>
  );
};

export default LinkedInEmbedCards;
