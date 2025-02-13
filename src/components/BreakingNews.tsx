"use client";

import { Siren } from "lucide-react";

export function BreakingNews() {
  return (
    <div className="bg-primary text-primary-foreground py-3 overflow-hidden">
      <div className="container mx-auto px-4 flex items-center">
        <Siren className="w-5 h-5 mr-3 animate-pulse" />
        <div className="animate-marquee whitespace-nowrap">
          Breaking News: Major technological breakthrough in renewable energy •
          Global summit addresses climate change • New AI discoveries reshape
          scientific research
        </div>
      </div>
    </div>
  );
}
