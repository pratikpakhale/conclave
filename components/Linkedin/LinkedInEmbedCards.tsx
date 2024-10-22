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
    <div className="embla__slide">
      <div className="slide_number_main flex w-[504px] h-[500px] flex-col relative p-10 border bg-white rounded-12px gap-10">
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
          className="mt-4 bg-color1 text-center text-text-col px-4 py-2 rounded-lg"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default LinkedInEmbedCards;
