import React, { useEffect } from "react";
import "./SocialMediaIntegration.css";

const data_permalink =
  "https://www.instagram.com/drexelone/?utm_source=ig_embed&amp;utm_campaign=loading";

const SocialMediaIntegration = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.instagram.com/embed.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="instagram_container">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={data_permalink}
        data-instgrm-version="14"
      >
        <a href={data_permalink} target="_blank">
          <div>Check us out on Instagram</div>
        </a>
        <p>
          <a href={data_permalink} target="_blank">
            Graduate Association (GSA)
          </a>
          (@
          <a href={data_permalink} target="_blank">
            drexelgsa
          </a>
          ) • Instagram photos and videos
        </p>
      </blockquote>
    </div>
  );
};

export default SocialMediaIntegration;
