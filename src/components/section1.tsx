"use client";
import { ImageInfo, useRandomUrl } from "@/hooks/img-switcher";
import { ChevronRight, Leaf, ArrowRight, Star, Heart } from "lucide-react";
import { PlantInfoCard } from "@/components/plants-card";
import Image from "next/image";

const DATA: ImageInfo[] = [
  {
    url: "https://images.pexels.com/photos/1634502/pexels-photo-1634502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Orchid Nursery",
    descritpion:
      "Sydney's premier plant destination, specializing in rare orchids and exotic botanicals.",
  },
  {
    url: "https://images.pexels.com/photos/1931143/pexels-photo-1931143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Orchid Nursery 101",
    descritpion:
      "Sydney's premier plant destination, specializing in rare orchids and exotic botanicals.",
  },
];

export function Section1() {
  const info = useRandomUrl(DATA, 4600);
  return (
    <section className="min-h-screen relative bg-gradient-to-br from-white via-teal-50 to-teal-50 text-teal-950 overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.15),transparent_70%)] opacity-70" />
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl" />
      <div className="absolute top-20 -right-48 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-8 md:py-12 lg:py-16 relative z-10 border">
        {/* Hero Section - Improved layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 lg:gap-2 items-center">
          {/* Left content area */}
          <div className="space-y-4 md:space-y-5">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">
              <Leaf className="h-3 w-3 mr-1.5" />
              Premium Plant Collection
            </div>

            <h1 className="text-6xl sm:text-5xl md:text-7xl font-bold tracking-tight text-teal-800">
              Atomic
              <br />
              <span className="bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
                Nursery.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-teal-700 lg:max-w-lg md:max-w-sm leading-relaxed">
              Embrace the Joy of Plant Parenthood: Transforming spaces into
              vibrant sanctuaries with our expertly cultivated botanical
              treasures.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-3">
              <button className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold px-5 py-2.5 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 group text-sm">
                Contact us
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="bg-white/80 border border-teal-200 backdrop-blur-sm text-teal-700 font-medium px-5 py-2.5 rounded-full flex items-center justify-center hover:bg-white transition duration-300 text-sm">
                Explore
                <ArrowRight className="h-3.5 w-3.5 ml-2" />
              </button>
            </div>
          </div>

          {/* Right card - Redesigned and better sized */}

          <div className="mt-6 lg:mt-0">
            <div className="overflow-hidden group">
              <div className="relative aspect-video w-full max-h-[300px]">
                {info && (
                  <Image
                    src={info.url}
                    alt={info.name}
                    className="w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-105"
                  />
                )}
                {/* Gradient overlay to blend edges */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">Atomic Nursery</h3>
                    <div className="flex items-center space-x-0.5 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-3 w-3 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                      <span className="text-xs ml-1">5.0</span>
                    </div>
                  </div>

                  <p className="text-sm text-white/90 mb-3 line-clamp-2">
                    Sydney's premier plant destination, specializing in rare
                    orchids and exotic botanicals.
                  </p>

                  <div className="flex items-center gap-2">
                    <button className="bg-white text-teal-800 px-3 py-1.5 rounded-lg font-medium text-xs flex items-center gap-1.5 hover:bg-teal-50 transition-colors">
                      Explore Collection
                      <ArrowRight className="h-3 w-3" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm p-1.5 rounded-lg hover:bg-white/30 transition-colors">
                      <Heart className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Cards - Enhanced with larger images */}
        <PlantInfoCard />
      </div>
    </section>
  );
}
