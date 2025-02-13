"use client";

import { BreakingNews } from "@/components/BreakingNews";
import { Categories } from "@/components/Categories";
import { FeaturedStory } from "@/components/FeaturedStory";
import { HeroSection } from "@/components/HeroSection";
import { LatestNews } from "@/components/LatestNews";
import { TopStories } from "@/components/TopStories";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Taaza Khabar | AI-Powered Real-Time News and Insights</title>
        <meta
          name="description"
          content="Experience news reimagined with The Taaza Khabar. Stay updated with real-time AI-driven news, intelligent insights, and personalized content across various categories."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="The Taaza Khabar | AI-Powered Real-Time News and Insights"
        />
        <meta
          property="og:description"
          content="Stay updated with AI-driven news, intelligent insights, and personalized content across various categories."
        />
        <meta
          property="og:image"
          content="https://www.thetaazakhabar.com/path-to-your-image.jpg"
        />
        <meta property="og:url" content="https://www.thetaazakhabar.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="The Taaza Khabar | AI-Powered Real-Time News and Insights"
        />
        <meta
          name="twitter:description"
          content="Stay updated with AI-driven news and personalized content across various categories."
        />
        <meta
          name="twitter:image"
          content="https://www.thetaazakhabar.com/path-to-your-image.jpg"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.thetaazakhabar.com/" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <div className="min-h-screen bg-background">
        <HeroSection />
        <BreakingNews />
        <FeaturedStory />
        <TopStories />
        <Categories />
        <LatestNews />
      </div>
    </>
  );
}
