"use client";
import ExpandableSection from "@/components/ui/ExpandableSection";
import { useState } from "react";

export default function PricingList({ list }: { list: any }) {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <>
      <h3
        className="cursor-pointer text-lg font-semibold font-montserrat text-primary hover:text-accent transition-colors duration-300 border-b border-primary/20 pb-2 mb-4"
        onClick={() => setExpanded(!expanded)}
      >
        {list.title}
      </h3>
      <ExpandableSection isExpanded={expanded}>
        <div dangerouslySetInnerHTML={{ __html: list.description }} />
      </ExpandableSection>
    </>
  );
}
