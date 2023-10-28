"use client";

import Image from "next/image";
import React from "react";

import { useUser } from "@clerk/clerk-react";

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const DocumentsPage = () => {
  const { user } = useUser();

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image src="/emptyChest.png" height={"900"} width={"900"} className="rounded-t-lg" alt="Empty Chest" />
      <h2 className="text-lg font-medium">Welcome to {user?.firstName}&apos;s DnD Notes</h2>
      <Button>
        <PlusCircle className="h-4 w-4 mr-2" />
        Record Your Memories
      </Button>
    </div>
  );
};

export default DocumentsPage;
