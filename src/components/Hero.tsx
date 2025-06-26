import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-red-600 via-red-700 to-red-800 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-16 bg-white rounded-full opacity-20"></div>
        <div className="absolute top-40 right-20 w-24 h-12 bg-white rounded-full opacity-15"></div>
        <div className="absolute bottom-32 left-1/4 w-28 h-14 bg-white rounded-full opacity-25"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-10 bg-white rounded-full opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-red-200">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-sm font-medium">Groundbreaking Healthcare Innovation</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
                AI-DRIVEN
                <br />
                <span className="text-red-200">WELLNESS</span>
              </h1>
              
              <p className="text-xl md:text-2xl font-light text-red-100 leading-relaxed">
                The Convergence of AI, Traditional Medicine, and Modern Healthcare
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <p className="text-lg font-semibold mb-2">A New Vision for American Wellness</p>
                <p className="text-red-100">
                  58 years of combined expertise distilled into actionable insights for the future of healthcare
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.amazon.com/AI-DRIVEN-WELLNESS-Convergence-Traditional-Healthcare/dp/1966212674"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-red-50 transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <span>Buy on Amazon</span>
                <ArrowRight size={20} />
              </a>
              
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Book Cover */}
          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <img
                src="/WhatsApp Image 2025-02-28 at 11.22.35 AM.jpeg"
                alt="AI-Driven Wellness Book Cover"
                className="w-full max-w-md mx-auto shadow-2xl rounded-lg"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white text-red-600 px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse">
                New Release
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-red-800 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                58 Years Experience
              </div>
            </div>

            {/* Background Capsule */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-white/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;