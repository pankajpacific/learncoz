import React from 'react';
import { Users, Award, BookOpen, Target, Clock, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0075eb] via-blue-600 to-indigo-700 py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-[#f5a837]">LearnCoz</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Best Way to Learn Latest Technologies with Real-time Professionals
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who are we?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                LearnCoz, in its name itself there is a 'Learn' that depicts the one-to-go solution for the constrained technology trainings. At LearnCoz, you are entitled to a varying learning platform that provides students to learn as per their requirements.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                LearnCoz is a place where you get to meet the flexible learning demands of working professionals, based on extensive classroom training experience. We, at LearnCoz, go to great lengths to ensure that students are placed in jobs that are a good fit for their abilities and will help them develop in their professions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every person, whether in their own life, their community, or the world, has the ability to effect change. Education's transforming impact is what allows that potential to be realised.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users size={40} className="text-blue-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  To provide accessible, high-quality education that transforms lives and careers through innovative learning experiences.
                </p>
              </div>
            </div>
          </div>

          {/* What We Do Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              What we do?
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-4xl mx-auto leading-relaxed">
              We provide a diverse set of online courses to both major corporations and individual students. On our user-friendly and dynamic platform, you can access over 200 online courses.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen size={32} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">200+ Courses</h3>
                <p className="text-gray-600 text-sm">Comprehensive course catalog</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={32} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Expert Instructors</h3>
                <p className="text-gray-600 text-sm">10+ years industry experience</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target size={32} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">100% Placement</h3>
                <p className="text-gray-600 text-sm">Job placement assistance</p>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-xl">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock size={32} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Flexible Learning</h3>
                <p className="text-gray-600 text-sm">Learn anytime, anywhere</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Industry-Relevant Skills</h4>
                  <p className="text-gray-600">Cloud computing, Android development, Big Data analytics, Software testing and more</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Lifetime Support</h4>
                  <p className="text-gray-600">Lifetime assistance and access to course materials</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Career Development</h4>
                  <p className="text-gray-600">Mock interviews and resume building assistance</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Practical Workshops</h4>
                  <p className="text-gray-600">Hands-on learning with real-world projects</p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Commitment Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Our Commitment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users size={32} className="text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Student Success</h3>
                <p className="text-gray-600">We're incredibly dedicated to our students' success and growth</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Award size={32} className="text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Quality Education</h3>
                <p className="text-gray-600">Comprehensive knowledge with no shortcuts or sugarcoating</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Target size={32} className="text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock online help and regular reminders</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin size={32} className="text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">512/2, Kalyan Road, Bhiwandi, Thane(Mumbai), Maharashtra, India 421302</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone size={32} className="text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+91-9389551374</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail size={32} className="text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">contact@learncoz.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;