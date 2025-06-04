"use client";

import Navbar from "../../app/components/navbar";
import HeroSection from "../../app/components/sections/hero-section";
import Services from "../../app/components/services";
import Testimonials from "../../app/components/testimonials";
import About from "../../app/components/about";
import Footer from "../../app/components/footer";
import Head from "next/head";
import metadata from "../../app/metadata.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:type" content={metadata.openGraph.type} />
        {/* Add other meta tags as needed */}
        <link rel="canonical" href={metadata.openGraph.url} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <Services />
        <Testimonials />
        <About />
        <Footer />
      </div>
    </>
  );
}
