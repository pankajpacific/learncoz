import React, { useState } from 'react';
import { Award, Users, Clock, DollarSign, CheckCircle, Star, Play, BookOpen, Target, ArrowRight } from 'lucide-react';

const BecomeInstructor = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    expertise: '',
    experience: '',
    linkedin: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        expertise: '',
        experience: '',
        linkedin: '',
        message: ''
      });
    }, 3000);
  };

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Earnings",
      description: "Earn up to 70% revenue share on your courses"
    },
    {
      icon: Users,
      title: "Global Audience",
      description: "Teach thousands of students worldwide"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Create and teach courses at your own pace"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Build your personal brand as an expert"
    }
  ];

  const requirements = [
    "Minimum 5 years of industry experience",
    "Strong communication and teaching skills",
    "Passion for sharing knowledge",
    "Ability to create engaging course content",
    "Commitment to student success"
  ];

  const instructors = [
    {
      name: "Dr. Sarah Johnson",
      expertise: "Data Science & ML",
      students: "15,000+",
      rating: 4.9,
      courses: 12
    },
    {
      name: "Michael Chen",
      expertise: "Cloud Computing",
      students: "12,000+",
      rating: 4.8,
      courses: 8
    },
    {
      name: "Emily Davis",
      expertise: "Web Development",
      students: "18,000+",
      rating: 4.9,
      courses: 15
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0075eb] via-blue-600 to-indigo-700 py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Become an <span className="text-[#f5a837]">Instructor</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Share your expertise, inspire thousands of learners, and build your teaching career with LearnCoz
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#0075eb] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Start Teaching Today
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0075eb] transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Teach with LearnCoz?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our community of expert instructors and enjoy the benefits of teaching on our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our successful instructors about their experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users size={32} className="text-gray-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{instructor.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{instructor.expertise}</p>
                
                <div className="flex items-center justify-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Users size={14} className="text-blue-600" />
                    <span className="text-gray-600">{instructor.students}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-500 fill-current" />
                    <span className="text-gray-600">{instructor.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen size={14} className="text-blue-600" />
                    <span className="text-gray-600">{instructor.courses}</span>
                  </div>
                </div>
                
                <blockquote className="text-gray-600 text-sm italic">
                  "Teaching on LearnCoz has been an incredible journey. The platform support and engaged students make it a rewarding experience."
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Instructor Requirements
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're looking for passionate experts who can deliver exceptional learning experiences
              </p>
              
              <div className="space-y-4">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{req}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="text-center">
                <Play className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-gray-600 mb-6">
                  Join our community of expert instructors and make a difference in thousands of lives
                </p>
                <button className="bg-[#0075eb] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0066cc] transition-colors duration-200">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Apply to Become an Instructor
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you within 48 hours
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <CheckCircle size={48} className="text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-900 mb-2">
                  Application Submitted Successfully!
                </h3>
                <p className="text-green-700">
                  Thank you for your interest in becoming an instructor. We'll review your application and contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-2">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      id="linkedin"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="https://linkedin.com/in/johndoe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="expertise" className="block text-sm font-medium text-gray-700 mb-2">
                    Area of Expertise *
                  </label>
                  <input
                    type="text"
                    id="expertise"
                    name="expertise"
                    value={formData.expertise}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Data Science, Web Development, Cloud Computing"
                  />
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select experience</option>
                    <option value="0-2">0-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Why do you want to teach with LearnCoz? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    placeholder="Tell us about your teaching philosophy and why you'd be a great fit..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0075eb] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#0066cc] transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Target size={20} />
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about becoming an instructor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">How much can I earn?</h3>
              <p className="text-gray-600">
                Instructors earn up to 70% revenue share based on course performance and experience level.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">How long does the approval process take?</h3>
              <p className="text-gray-600">
                Typically 3-5 business days after submitting your application and course materials.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Do I need teaching experience?</h3>
              <p className="text-gray-600">
                While teaching experience is helpful, we provide training and support to help you succeed.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">What kind of support do you provide?</h3>
              <p className="text-gray-600">
                We offer marketing support, technical assistance, and a community of fellow instructors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeInstructor;
