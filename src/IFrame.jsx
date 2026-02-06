import React from "react";
import Section from "./Section";

function IFrame({ src }) {
  return (
    <div className="w-full flex items-center justify-end">
      <iframe
        className="rounded-md w-full h-[300px] max-lg:h-[240px]"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default IFrame;
