import React from "react";

import Image from "next/image";

export const Heros = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] ">
          <Image src="/scribe.png" fill className="object-contain md:rounded-l-full" alt="Scribe"></Image>
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
          {" "}
          <Image src="/plotting.png" fill className="object-contain md:rounded-r-full mx-2" alt="Plotting"></Image>
        </div>
      </div>
    </div>
  );
};

export default Heros;
