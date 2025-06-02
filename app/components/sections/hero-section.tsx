"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../button";

const projects = [
  {
    name: "bumpdate",
    description: "Blind-dating PWA",
    image:
      "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Arthneeti",
    description: "Financial Services Platform",
    image:
      "https://images.pexels.com/photos/7821715/pexels-photo-7821715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Infind",
    description: "Business Discovery Tool",
    image:
      "https://images.pexels.com/photos/6804073/pexels-photo-6804073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      id="home"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-90">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Building Digital Products <br className="hidden md:block" />
              That <span className="text-emerald-400">Work.</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0">
              Retor Tech helps startups and SMEs ship full-stack apps, faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/917861838177"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg">Chat on WhatsApp</Button>
              </a>
              <Link href="#services">
                <Button variant="outline" size="lg">
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative h-[500px] w-full">
              {projects.map((project, index) => (
                <div
                  key={project.name}
                  className={`absolute inset-0 transition-all duration-1000 transform rounded-xl shadow-2xl overflow-hidden
                    ${
                      index === currentIndex
                        ? "opacity-100 translate-y-0 rotate-0"
                        : "opacity-0 translate-y-8 rotate-2"
                    }`}
                  style={{
                    zIndex: index === currentIndex ? 20 : 10 - index,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    <p className="text-white/80">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="flex space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all
                ${index === currentIndex ? "bg-white w-6" : "bg-white/50"}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
