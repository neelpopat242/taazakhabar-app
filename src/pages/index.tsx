"use client";

import { BreakingNews } from "@/components/BreakingNews";
import { Categories } from "@/components/Categories";
import { FeaturedStory } from "@/components/FeaturedStory";
import { HeroSection } from "@/components/HeroSection";
import { LatestNews } from "@/components/LatestNews";
import { TopStories } from "@/components/TopStories";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <BreakingNews />
      <FeaturedStory />
      <TopStories />
      <Categories />
      <LatestNews />
    </div>
  );
}
