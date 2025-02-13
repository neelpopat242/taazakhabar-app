"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Card } from "@/ui/card";
import { Separator } from "@/ui/separator";

interface NewsItem {
  time: string;
  title: string;
  category: string;
}

interface LatestNewsItemProps {
  news: NewsItem;
  index: number;
}

export function LatestNewsItem({ news, index }: LatestNewsItemProps) {
  return (
    <motion.div
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
              <span className="text-primary font-medium">{news.category}</span>
            </div>
            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
              {news.title}
            </h3>
          </div>
          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>
      </Card>
    </motion.div>
  );
}
