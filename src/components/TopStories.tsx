"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/ui/button";
import { Card } from "@/ui/card";

const stories = [
  {
    category: "Technology",
    title: "The Future of Quantum Computing",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070",
  },
  {
    category: "World",
    title: "Global Climate Summit Reaches Historic Agreement",
    image:
      "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=2070",
  },
  {
    category: "Business",
    title: "Emerging Markets Show Strong Economic Growth",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
  },
];

export function TopStories() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Top Stories</h2>
          <Button variant="ghost" className="group">
            View All
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-primary mb-2">
                    {story.category}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {story.title}
                  </h3>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>5 hours ago</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
