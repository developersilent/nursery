import { ArrowRight, Leaf } from "lucide-react";
import Image from "next/image";

export function PlantInfoCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-2 gap-4 space-y-20 mt-16">
      {/* Card 1 - Redesigned with larger image */}
      <div className="md:col-span-7 overflow-hidden group">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-video w-full max-h-[300px]">
            <Image
              src="https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Person caring for plants"
              className="w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-105"
            />
          </div>
          <div className="order-2 md:order-1 p-6 flex flex-col justify-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium mb-3">
              <Leaf className="h-3 w-3 mr-1" />
              Expert Guide
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-teal-800 mb-3">
              Fostering healthy growth in plants
            </h3>

            <p className="text-sm text-teal-700 mb-4">
              Discover our scientifically-backed techniques for nurturing
              vibrant, resilient plants that thrive in any environment.
            </p>

            <button className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-sm font-medium group w-fit">
              Read guide
              <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
