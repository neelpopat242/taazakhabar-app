"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/ui/button";
import { Card } from "@/ui/card";
import { Separator } from "@/ui/separator";

const latestNews = [
  {
    time: "10 minutes ago",
    title: "SpaceX Successfully Launches New Satellite Constellation",
    category: "Space",
  },
  {
    time: "1 hour ago",
    title: "Global Markets React to New Economic Policies",
    category: "Finance",
  },
  {
    time: "2 hours ago",
    title: "Breakthrough in Renewable Energy Storage Technology",
    category: "Technology",
  },
];

export function LatestNews() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Latest Updates</h2>
          <Button variant="ghost" className="group">
            See All News
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {latestNews.map((news, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:bg-muted/50 transition-colors group cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{news.time}</span>
                      <Separator orientation="vertical" className="h-4" />
                      <span className="text-primary font-medium">
                        {news.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {news.title}
                    </h3>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
