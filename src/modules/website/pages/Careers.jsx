import React from 'react';
import { MapPin, Clock, DollarSign, Users, Briefcase, Heart, Award, Target, ArrowRight } from 'lucide-react';

const Careers = () => {
  const openPositions = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "5+ years",
      salary: "₹15-25 LPA",
      description: "We're looking for an experienced full-stack developer to join our engineering team and help build the future of online education."
      // skills: ["React", "Node.js", "MongoDB", "AWS"],
    },
    {
      id: 2,
      title: "Data Science Instructor",
      department: "Education",
      location: "Mumbai",
      type: "Full-time",
      experience: "3+ years",
      salary: "₹12-20 LPA",
      description: "Join our team of expert instructors and help shape the next generation of data scientists through innovative teaching methods."
      // skills: ["Python", "Machine Learning", "Statistics", "Teaching"],
    },
    {
      id: 3,
      title: "Cloud Computing Trainer",
      department: "Education",
      location: "Bangalore",
      type: "Full-time",
      experience: "4+ years",
      salary: "₹10-18 LPA",
      description: "Teach cutting-edge cloud technologies to aspiring professionals and help them advance their careers."
      // skills: ["AWS", "Azure", "DevOps", "Training"],
    },
    {
      id: 4,
      title: "Marketing Manager",
      department: "Marketing",
      location: "Hybrid",
      type: "Full-time",
      experience: "3+ years",
      salary: "₹8-15 LPA",
      description: "Lead our marketing initiatives and help us reach more learners with our world-class education programs."
      // skills: ["Digital Marketing", "Content Strategy", "Analytics", "Team Leadership"],
    },
    {
      id: 5,
      title: "Customer Success Manager",
      department: "Support",
      location: "Remote",
      type: "Full-time",
      experience: "2+ years",
      salary: "₹6-12 LPA",
      description: "Ensure our students have the best learning experience and help them achieve their career goals."
      // skills: ["Customer Support", "Communication", "Problem Solving", "EdTech"],
    },
    {
      id: 6,
      title: "UI/UX Designer",
      department: "Design",
      location: "Pune",
      type: "Full-time",
      experience: "3+ years",
      salary: "₹8-14 LPA",
      description: "Create beautiful and intuitive learning experiences that make education accessible and engaging."
      // skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs"
    },
    {
      icon: Target,
      title: "Career Growth",
      description: "Professional development opportunities, skill-building workshops, and clear career paths"
    },
    {
      icon: Users,
      title: "Work-Life Balance",
      description: "Flexible work hours, remote options, and generous paid time off"
    },
    {
      icon: Award,
      title: "Recognition & Rewards",
      description: "Performance bonuses, stock options, and employee recognition programs"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0075eb] via-blue-600 to-indigo-700 py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our <span className="text-[#f5a837]">Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Help us transform lives through education and build the future of learning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#0075eb] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              View Open Positions
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0075eb] transition-colors duration-200">
              Learn About Our Culture
            </button>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work at LearnCoz?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join a team that's passionate about education and making a real difference in people's lives
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

      {/* Open Positions */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find your next opportunity with us
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {openPositions.map((position) => (
              <div key={position.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="flex items-center gap-1 text-gray-600">
                        <Briefcase size={14} />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1 text-gray-600">
                        <MapPin size={14} />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1 text-gray-600">
                        <Clock size={14} />
                        {position.type}
                      </span>
                      <span className="flex items-center gap-1 text-gray-600">
                        <DollarSign size={14} />
                        {position.salary}
                      </span>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                    {position.experience}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{position.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {position.skills?.map((skill) => (
                      <span key={skill} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-1 text-[#0075eb] font-medium hover:gap-2 transition-all">
                    Apply Now
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {openPositions.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase size={24} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No open positions right now</h3>
              <p className="text-gray-600 mb-4">
                Check back later or send us your resume for future opportunities
              </p>
              <button className="bg-[#0075eb] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0066cc] transition-colors duration-200">
                Send Resume
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Culture & Values
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At LearnCoz, we believe in creating an environment where everyone can thrive, learn, and make an impact.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Passion for Learning</h4>
                    <p className="text-gray-600">We're lifelong learners committed to continuous improvement</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Collaboration</h4>
                    <p className="text-gray-600">We work together to achieve common goals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Impact-Driven</h4>
                    <p className="text-gray-600">We focus on creating meaningful change in education</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <img
                src="https://picsum.photos/seed/team/600/400.jpg"
                alt="LearnCoz Team"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  Join 50+ talented professionals
                </p>
                <p className="text-gray-600">
                  Working together to transform education
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join us in our mission to make quality education accessible to everyone
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#0075eb] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0066cc] transition-colors duration-200">
              Apply Now
            </button>
            <button className="border-2 border-[#0075eb] text-[#0075eb] px-6 py-3 rounded-lg font-semibold hover:bg-[#0075eb] hover:text-white transition-colors duration-200">
              Follow Us on LinkedIn
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
