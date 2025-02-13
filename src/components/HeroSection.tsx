"use client";

import { motion } from "framer-motion";
import { Button } from "@/ui/button";

export function HeroSection() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden border-b">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070')] bg-cover bg-center"
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            The Taaza Khabar
          </h1>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Experience news reimagined through the power of AI. Get real-time
            updates, intelligent insights, and personalized news delivery.
          </p>
          <Button size="lg" className="mr-4">
            Start Reading
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
