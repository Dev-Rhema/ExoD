import React, { useState } from "react";

function IFrame({ src, title = "YouTube video player" }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full flex items-center justify-end relative">
      {!loaded && (
        <div className="absolute inset-0 bg-[#e6e6e6] flex items-center justify-center rounded-md">
          <div className="animate-pulse flex items-center justify-center gap-3 p-4 rounded-md">
            <div className="w-12 h-8 bg-(--primary) rounded-sm flex items-center justify-center text-white font-bold">
              ▶
            </div>
          </div>
        </div>
      )}
      <iframe
        className={`rounded-md w-full h-75 max-lg:h-60 transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="lazy"
        onLoad={() => setLoaded(true)}
      ></iframe>
    </div>
  );
}

export default IFrame;
