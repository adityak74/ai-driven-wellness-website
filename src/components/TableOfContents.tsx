import React from 'react';
import { ChevronRight, BookOpen } from 'lucide-react';

const TableOfContents = () => {
  const chapters = [
    {
      number: "01",
      title: "The AI Healthcare Landscape",
      subtitle: "Step into today's rapidly evolving world of healthcare AI",
      description: "Step into today's rapidly evolving world of healthcare AI, where algorithms are already transforming diagnosis, treatment planning, and patient care. Discover the three distinct waves of healthcare AI development and why the current convergence of technology, data, and medical necessity represents a unique moment in healthcare history."
    },
    {
      number: "02", 
      title: "Under the Hood - How AI Works in Healthcare",
      subtitle: "Demystify the technology driving healthcare's transformation",
      description: "Demystify the technology driving healthcare's transformation through an accessible exploration of machine learning fundamentals. See how deep learning systems are mastering specialized medical tasks and how institutions like Beth Israel Deaconess Medical Center are orchestrating these technologies into comprehensive healthcare solutions."
    },
    {
      number: "03",
      title: "Where Bits Meet Biology",
      subtitle: "Witness the remarkable intersection of digital technology and human biology",
      description: "Witness the remarkable intersection where digital technology meets human biology, creating unprecedented opportunities for understanding and treating disease. Explore the three game-changing developments bridging the digital-biological divide and discover how these innovations are already reshaping patient experiences."
    },
    {
      number: "04",
      title: "The Tools of Tomorrow",
      subtitle: "Take a guided tour through healthcare's new technological arsenal",
      description: "Take a guided tour through healthcare's new technological arsenal—from AI-powered diagnostic assistants to virtual health coaches and predictive analytics systems. Learn how these tools are augmenting clinical capabilities while preserving the irreplaceable human elements of care."
    },
    {
      number: "05",
      title: "Your Health, Your Way",
      subtitle: "Enter the era of truly personalized medicine",
      description: "Enter the era of truly personalized medicine, where treatments are precisely tailored to your genetic makeup, lifestyle, preferences, and environment. Explore the four foundational pillars supporting healthcare's shift from standardized protocols to individualized care journeys."
    },
    {
      number: "06",
      title: "Going Big",
      subtitle: "Follow the challenging path of scaling AI healthcare solutions",
      description: "Follow the challenging path of scaling AI healthcare solutions from promising pilots to system-wide implementations. Discover the four essential keys to successful scaling and learn from Providence Health's real-world experience in bringing AI capabilities to millions of patients."
    },
    {
      number: "07",
      title: "The Power of Prevention",
      subtitle: "Explore how AI is revolutionizing preventive healthcare",
      description: "Explore how AI is revolutionizing preventive healthcare by predicting and stopping diseases before they manifest. Discover the three pillars of prevention—early warning systems, predictive analytics, and proactive intervention—and see how cutting-edge algorithms like ERBGA are detecting complex conditions such as Alzheimer's years before traditional methods. Learn how continuous monitoring and smart analysis are creating a new paradigm where healthcare focuses on maintaining wellness rather than just treating illness."
    },
    {
      number: "08",
      title: "The Best of Both Worlds",
      subtitle: "Experience the powerful synergy of AI and traditional medicine",
      description: "Experience the powerful synergy created when cutting-edge AI technology combines with traditional medical wisdom. See how this integration honors centuries of healing knowledge while enhancing it with computational capabilities, creating a healthcare approach that is simultaneously ancient and futuristic."
    },
    {
      number: "09",
      title: "Tomorrow's Healthcare Today",
      subtitle: "Journey to the frontiers of healthcare innovation",
      description: "Journey to the frontiers of healthcare innovation, where emerging technologies are laying groundwork for the next wave of medical transformation. Learn how Mayo Clinic's Future Lab is turning today's experimental approaches into tomorrow's standard practices—and what this means for your future care."
    },
    {
      number: "10",
      title: "Taking Action",
      subtitle: "Discover your own role in healthcare's transformation",
      description: "Discover your own role in healthcare's transformation through meaningful participation in the evolving medical ecosystem. From contributing to research through the Personal Genome Project to engaging with the participatory medicine movement, find practical ways to help shape a healthcare future that works better for everyone."
    }
  ];

  return (
    <section id="contents" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-600 px-6 py-2 rounded-full font-semibold mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Chapters</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Chapters We've
            <br />
            <span className="text-red-600">Covered</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore the comprehensive roadmap that will transform your understanding 
            of AI-driven wellness and modern healthcare innovation.
          </p>
        </div>

        {/* Chapters */}
        <div className="space-y-6">
          {chapters.map((chapter, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start space-x-6">
                {/* Chapter Number */}
                <div className="bg-red-600 text-white w-16 h-16 rounded-xl flex items-center justify-center font-black text-xl group-hover:bg-red-700 transition-colors flex-shrink-0">
                  {chapter.number}
                </div>
                
                {/* Chapter Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                        {chapter.title}
                      </h3>
                      <p className="text-lg text-red-600 font-medium mb-3">{chapter.subtitle}</p>
                    </div>
                    <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-red-600 transition-colors flex-shrink-0 mt-1" />
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">{chapter.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-12 h-6 bg-red-600 rounded-full opacity-80"></div>
              <div className="w-8 h-4 bg-red-400 rounded-full opacity-60"></div>
              <div className="w-6 h-3 bg-red-300 rounded-full opacity-40"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Begin Your Journey?</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Dive deep into the future of healthcare with comprehensive insights from industry leaders.
            </p>
            <a
              href="https://www.amazon.com/AI-DRIVEN-WELLNESS-Convergence-Traditional-Healthcare/dp/1966212674"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>Get Your Copy</span>
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TableOfContents;