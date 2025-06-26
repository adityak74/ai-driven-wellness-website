import React from 'react';
import { ShoppingCart, Star, Truck, Shield, Clock } from 'lucide-react';

const Purchase = () => {
  const features = [
    {
      icon: <Truck className="w-5 h-5" />,
      title: "Fast Delivery",
      description: "Free shipping on Amazon Prime orders"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Secure Purchase",
      description: "Protected by Amazon's guarantee"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Instant Access",
      description: "Digital version available immediately"
    }
  ];

  return (
    <section id="purchase" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-600 px-6 py-2 rounded-full font-semibold mb-6">
              <ShoppingCart className="w-4 h-4" />
              <span>Get Your Copy</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Transform Your Understanding of
              <br />
              <span className="text-red-600">Healthcare Today</span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Don't miss this opportunity to gain insights from 58 years of combined expertise 
              in AI-driven healthcare innovation. Your journey to understanding the future of 
              wellness starts with a single click.
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-red-600 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Reviews */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="flex items-center space-x-2 mb-3">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" className="text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold text-gray-900">5.0</span>
                <span className="text-gray-600">• Early Reader Reviews</span>
              </div>
              <blockquote className="text-gray-700 italic">
                "A groundbreaking synthesis of AI and healthcare that every medical professional 
                and health enthusiast should read. The authors' combined expertise shines through 
                every chapter."
              </blockquote>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.amazon.com/AI-DRIVEN-WELLNESS-Convergence-Traditional-Healthcare/dp/1966212674"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <ShoppingCart size={20} />
                <span>Buy on Amazon</span>
              </a>
              
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-red-600 hover:text-red-600 transition-all duration-300">
                Preview Sample
              </button>
            </div>
          </div>

          {/* Book Showcase */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/WhatsApp Image 2025-02-28 at 11.22.35 AM.jpeg"
                alt="AI-Driven Wellness Book"
                className="w-full max-w-lg mx-auto shadow-2xl rounded-lg transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating Price Tag */}
              <div className="absolute -top-4 -right-4 bg-red-600 text-white px-6 py-3 rounded-full font-bold shadow-lg">
                <div className="text-sm">Available Now</div>
                <div className="text-lg">on Amazon</div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white text-red-600 px-4 py-2 rounded-full font-semibold shadow-lg border-2 border-red-600">
                58 Years Expertise
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-red-100 rounded-full blur-3xl opacity-30 -z-10"></div>
            
            {/* Floating Capsules */}
            <div className="absolute top-10 -left-10 w-20 h-10 bg-red-200 rounded-full opacity-40 animate-float"></div>
            <div className="absolute bottom-20 -right-10 w-16 h-8 bg-red-300 rounded-full opacity-50 animate-float-delayed"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;