import React from 'react';
import { CheckCircle, Brain, Heart, Zap, Shield } from 'lucide-react';

const About = () => {
  const benefits = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Cutting-Edge AI Insights",
      description: "Explore how AI is revolutionizing wellness through precision medicine and enhanced diagnostics"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Practical Applications", 
      description: "Real-world case studies showcasing AI's potential to optimize health outcomes"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Personalized Healthcare",
      description: "Discover how AI enables truly personalized care and treatment approaches"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Expert Perspectives",
      description: "Decades of professional experience and cutting-edge research combined"
    }
  ];

  const promises = [
    "Unveil How AI is Revolutionizing Healthcare Diagnostics",
    "Explore Precision Medicine and Personalized Care", 
    "Provide Real-World Case Studies and Applications",
    "Bridge the Gap Between Theory and Practice",
    "Inspire Healthcare Innovation and Transformation"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-600 px-6 py-2 rounded-full font-semibold mb-6">
            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
            <span>About the Book</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            <span className="text-red-600">AI-Driven Wellness:</span> The Convergence of AI, Traditional Medicine, and Modern Healthcare
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            <strong>A New Vision for American Wellness</strong> is an insightful exploration into the transformative power of artificial intelligence in the healthcare industry. Written by industry experts Arjun Jaggi, Aditya Karnam Gururaj Rao, and Sonam Naidu, this groundbreaking book delves into how AI is revolutionizing wellness through precision medicine, enhanced diagnostics, and personalized care.
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            What Makes This Book Essential
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-red-600 mb-4">
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Promises Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">This Book Will:</h3>
              <div className="space-y-4">
                {promises.map((promise, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{promise}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl">
              <div className="text-center">
                <div className="w-24 h-12 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <div className="w-16 h-8 bg-red-600 rounded-full opacity-80"></div>
                </div>
                <blockquote className="text-lg font-medium text-gray-800 mb-4">
                  "Combining decades of professional experience and cutting-edge research, the authors present practical applications and real-world case studies that showcase AI's potential to optimize health outcomes."
                </blockquote>
                <p className="text-red-600 font-semibold">
                  Ready to transform healthcare with AI?
                </p>
                <p className="text-gray-600 mt-2">
                  Your journey into the future of wellness begins here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;