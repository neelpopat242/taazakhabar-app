"use client";

import { Button } from "@/ui/button";
import { motion } from "framer-motion";
import { Award, ArrowRight } from "lucide-react";

export function FeaturedStory() {
  return (
    <section className="py-16 border-b">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-primary">
              <Award className="w-5 h-5" />
              <span className="font-semibold">Featured Story</span>
            </div>
            <h2 className="text-4xl font-bold leading-tight">
              Artificial Intelligence Revolutionizes Modern Journalism
            </h2>
            <p className="text-lg text-muted-foreground">
              How AI-powered tools are transforming the way news is gathered,
              analyzed, and delivered to readers around the globe.
            </p>
            <Button className="group">
              Read Full Story
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070"
              alt="AI Journalism"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
