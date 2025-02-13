"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/ui/button";

const categories = [
  "World",
  "Technology",
  "Business",
  "Science",
  "Health",
  "Sports",
];

export function Categories() {
  return (
    <section className="py-16 border-y">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Explore Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Button
                variant="outline"
                className="w-full h-24 flex flex-col items-center justify-center space-y-2 hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <span className="text-lg font-semibold">{category}</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
