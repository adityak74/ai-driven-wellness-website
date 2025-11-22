import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';

const Authors = () => {
  const authors = [
    {
      name: "Arjun Jaggi",
      title: "AI & Innovation Catalyst",
      experience: "14+ Years",
      image: "/Arjun-Jaggi.jpeg",
      bio: "Arjun Jaggi is a technology professional with over 14 years of experience working with industry leaders like IBM, Systran, and HCLTech. As an AI & Innovation Catalyst, keynote speaker, and advisory board member, he has made significant contributions to AI and innovation, earning multiple patents and publishing numerous research papers. His expertise spans AI/ML, Gen-AI, Cybersecurity, and Analytics. In this book, he shares his vision for how AI is revolutionizing healthcare by enhancing diagnostics, streamlining clinical workflows, and advancing personalized medicine.",
      expertise: ["AI/ML", "Gen-AI", "Cybersecurity", "Analytics", "Healthcare Innovation"],
      icon: <Award className="w-6 h-6" />
    },
    {
      name: "Aditya Karnam Gururaj Rao", 
      title: "Software Engineer & AI Researcher",
      experience: "12+ Years",
      image: "/Aditya-Karnam-Gururaj-Rao.png",
      bio: "Aditya Karnam Gururaj Rao is a software engineer and researcher specializing in AI and machine learning. With groundbreaking work in community detection algorithms and genetic research, he has shaped technological advancements across fintech, adtech, and healthcare. Currently a Software Engineer III at Zefr, Aditya's expertise includes developing real-time fraud detection systems and pioneering research in bias reduction. His passion for AI-driven healthcare transformation inspires this book, where he explores how emerging technologies are redefining wellness and patient care.",
      expertise: ["Machine Learning", "Community Detection", "Fraud Detection", "Bias Reduction", "Healthcare AI"],
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      name: "Sonam Naidu",
      title: "Senior Software Engineer",
      experience: "15+ Years",
      image: "/Sonam-Naidu.jpeg",
      bio: "Sonam Naidu is a Senior Software Engineer with over 15 years of experience in software development, specializing in Python, Java, and SQL. Passionate about technology and innovation, she has made significant contributions to AI-driven healthcare solutions, developing tools that enhance patient care and streamline medical processes. In her book, Sonam explores how AI is revolutionizing healthcare, offering practical insights and real-world applications to bridge the gap between theory and practice. Her unique perspective makes this work a valuable resource for healthcare professionals and technology enthusiasts alike.",
      expertise: ["Python", "Java", "SQL", "Healthcare Solutions", "Medical Process Optimization"],
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <section id="authors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-600 px-6 py-2 rounded-full font-semibold mb-6">
            <Users className="w-4 h-4" />
            <span>Meet the Authors</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Leading Experts in
            <br />
            <span className="text-red-600">Healthcare Innovation</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Three distinguished professionals with decades of combined expertise in AI, 
            software engineering, and healthcare transformation.
          </p>
        </div>

        {/* Authors Grid */}
        <div className="space-y-8 mb-16">
          {authors.map((author, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start space-x-6">
                {/* Author Image */}
                <div className="flex-shrink-0">
                  <img
                    src={author.image}
                    alt={author.name}
                    className="w-24 h-24 rounded-xl object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{author.name}</h3>
                    <p className="text-red-600 font-semibold mb-2 text-lg">{author.title}</p>
                    <div className="inline-flex items-center bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium">
                      {author.experience} Experience
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">{author.bio}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-lg">Key Expertise:</h4>
                    <div className="flex flex-wrap gap-3">
                      {author.expertise.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm border border-gray-200 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Combined Expertise Highlight */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div>
                <div className="text-4xl font-black mb-2">58+</div>
                <div className="text-red-200">Years Combined Experience</div>
              </div>
              
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">
                  A Unique Convergence of Expertise
                </h3>
                <p className="text-red-100 leading-relaxed">
                  Our authors bring together decades of experience across AI technology, software engineering, 
                  healthcare innovation, and research—creating a truly comprehensive perspective on 
                  the future of AI-driven wellness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authors;