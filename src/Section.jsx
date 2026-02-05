import React from "react";

function Section({ children, className, title }) {
  return (
    <>
      <section
        className={`px-10 py-20 mt-10 ${className} max-lg:p-6 max-lg:mt-6 max-md:px-4 xl:px-30 xl:py-10`}
      >
        <h1 className="mb-6 font-[upton] text-7xl max-lg:text-5xl max-md:text-4xl max-md:mb-4">
          {title}
        </h1>
        <div>{children}</div>
      </section>
    </>
  );
}

export default Section;
