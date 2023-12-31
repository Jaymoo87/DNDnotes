"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Error = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center sapce-y-4">
      <Image src={"/public/errorImage.png"} height={"300"} width={"300"} alt="Error" className="dark:hidden" />
      <Image src={"/public/errorImage.png"} height={"300"} width={"300"} alt="Error" className="hidden dark:block" />
      <h2 className="text-xl font-medium">Something Has Gone Wrong!</h2>
      <Button asChild>
        <Link href={"/documents"}>Clear The Fog</Link>
      </Button>
    </div>
  );
};
