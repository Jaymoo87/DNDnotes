"use client";
import React from "react";
import { useCoverImage } from "@/hooks/use-cover-image";
import { useMutation } from "convex/react";
import { useParams } from "next/navigation";

import Image from "next/image";
import { ImageIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useEdgeStore } from "@/lib/edgestore";
import { cn } from "@/lib/utils";

interface CoverImageProps {
  url?: string;
  preview?: boolean;
}

const Cover = ({ url, preview }: CoverImageProps) => {
  const params = useParams();
  const { edgestore } = useEdgeStore();
  const coverImage = useCoverImage();
  const removeCoverImage = useMutation(api.documents.removeCoverImage);

  const onRemove = async () => {
    if (url) {
      await edgestore.publicFiles.delete({
        url: url,
      });
    }
    removeCoverImage({
      id: params.docuementId as Id<"documents">,
    });
  };

  return (
    <div className={cn("relative w-full h-[35vh] group", !url && "h-[12vh]", url && "bg-muted")}>
      {!!url && <Image src={url} fill alt="Cover" className="object-cover" />}
      {url && !preview && (
        <div className="opacity-0 group-hover:opacity-100 absolute bottom-5 right-5 flex items-center gap-x-2">
          <Button onClick={coverImage.onOpen} className="text-muted-foreground text-xs" variant={"outline"} size={"sm"}>
            <ImageIcon className="h-4 w-4 mr-2" />
            Change Cover Image
          </Button>
          <Button onClick={onRemove} className="text-muted-foreground text-xs" variant={"outline"} size={"sm"}>
            <X className="h-4 w-4 mr-2" />
            Remove Image
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cover;