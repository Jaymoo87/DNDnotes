"use export client";

import React from "react";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Plan your next move, never forget the moves you make. <br /> Take your <span className="underline">Notes</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium p-20">
        The realm requires the memories of canon players... <br /> NPCs may malfunction
      </h3>
      <Button>
        Open A Scroll <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};

export default Heading;
