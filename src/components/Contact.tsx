import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-600 px-6 py-2 rounded-full font-semibold mb-6">
            <MessageSquare className="w-4 h-4" />
            <span>Media Inquiries</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Media Inquiries &
            <br />
            <span className="text-red-600">Speaking Engagements</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect with our authors for interviews, speaking opportunities, 
            or to discuss the future of AI-driven healthcare.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-red-600 text-white p-3 rounded-xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-xl">Email Us</h4>
                  <p className="text-gray-600 mb-2">media@ai-driven-wellness.com</p>
                  <p className="text-sm text-gray-500">Response within 24 hours</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our team of experts is available for media interviews, conference presentations, 
                and collaborative discussions about the future of healthcare innovation.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-red-600 text-white p-3 rounded-xl">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-xl">Media Kit</h4>
                  <p className="text-gray-600 mb-2">Download author bios, book images, and press materials</p>
                  <button className="text-red-600 font-medium hover:text-red-700 transition-colors">
                    Download Media Kit →
                  </button>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Access high-resolution images, author biographies, and promotional materials 
                for your media coverage.
              </p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
            <h4 className="font-bold text-gray-900 mb-3 text-2xl">Stay Updated</h4>
            <p className="text-gray-600 mb-6">
              Get the latest insights on AI-driven healthcare innovation
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-3 sm:space-y-0 sm:space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;