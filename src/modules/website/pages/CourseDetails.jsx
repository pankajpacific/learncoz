import React, { useState } from 'react';
import { 
  Clock, 
  Users, 
  Star, 
  Calendar, 
  Download, 
  Play, 
  Award, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight,
  BookOpen,
  Target,
  TrendingUp,
  Shield,
  DollarSign
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseDetails = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Mock course data based on the extracted content
  const courseData = {
    courseName: "Digital Marketing Certification",
    rating: 5.0,
    totalLearner: "3578+",
    courseDuration: "40",
    totalReview: "3578+",
    skillLevel: "Beginner to Advanced",
    onlineCoursePrice: 45000,
    oneToOnePrice: 55000,
    aboutCourse: "Learncoz certification is globally accepted by major tech companies. Our students are working in top tech companies around the world. Certification will be issued to candidates after successful completion of both theoretical and practical sessions."
  };

  const syllabus = [
    {
      heading: "Introduction to Digital Marketing",
      topics: ["Marketing Fundamentals", "Digital Landscape", "Market Research", "Consumer Behavior"]
    },
    {
      heading: "Search Engine Optimization (SEO)",
      topics: ["On-Page SEO", "Off-Page SEO", "Technical SEO", "Local SEO", "Analytics"]
    },
    {
      heading: "Social Media Marketing",
      topics: ["Facebook Marketing", "Instagram Marketing", "LinkedIn Marketing", "Twitter Marketing", "Content Strategy"]
    },
    {
      heading: "Content Marketing & Copywriting",
      topics: ["Blog Writing", "Email Marketing", "Copywriting Techniques", "Content Strategy"]
    },
    {
      heading: "Paid Advertising (PPC)",
      topics: ["Google Ads", "Facebook Ads", "Campaign Management", "ROI Optimization"]
    },
    {
      heading: "Analytics & Reporting",
      topics: ["Google Analytics", "Social Media Analytics", "ROI Analysis", "Performance Tracking"]
    }
  ];

  const upcomingBatches = [
    {
      startDate: "15th June 2024",
      timing: "Weekend Batch",
      seats: "15 seats left"
    },
    {
      startDate: "22nd June 2024", 
      timing: "Weekday Batch",
      seats: "8 seats left"
    },
    {
      startDate: "5th July 2024",
      timing: "Evening Batch",
      seats: "12 seats left"
    }
  ];

  const faqs = [
    {
      question: "Who are the instructors?",
      answer: "Our instructors are industry professionals with 8+ years of experience in digital marketing. They are certified experts working with top companies and bring real-world insights to the classroom."
    },
    {
      question: "What if I miss a class?",
      answer: "All sessions are recorded and available for 24/7 access. You can catch up with recorded sessions and get support from instructors via email or discussion forums."
    },
    {
      question: "What are the modes of training for this course?",
      answer: "We offer flexible learning modes: Live online classes, Self-paced learning, and One-on-one mentoring sessions. Choose what works best for your schedule."
    },
    {
      question: "Can I attend a demo session?",
      answer: "Yes! We offer free demo sessions where you can experience our teaching style and course content before enrolling. Contact our advisors to schedule a demo."
    },
    {
      question: "What are the payment modes?",
      answer: "We accept multiple payment options: Credit/Debit cards, Net Banking, UPI, EMI options, and Wallet payments. All transactions are secure and encrypted."
    },
    {
      question: "What if I have more queries?",
      answer: "Our support team is available 24/7 via phone, email, and live chat. You can also schedule a call with our course advisors for detailed guidance."
    }
  ];

  const programFeatures = [
    {
      icon: Users,
      title: "IT Professionals as Trainers",
      description: "Learning a technology with a professional who is well expertise in that solve 70% of your needs."
    },
    {
      icon: Target,
      title: "Fully Hands-on Training",
      description: "To make yourself ready for real time industry challenge, we are offering hands on practical training along with theory."
    },
    {
      icon: DollarSign,
      title: "Affordable Fees",
      description: "For helping the community during pandemic, we reduced our fees & offering instalments scheme for those who needs."
    },
    {
      icon: Star,
      title: "3578+ old students to believe",
      description: "We satisfied 3578+ students from the day we started LearnCoz. Take a look at our old student's video reviews and it says All."
    },
    {
      icon: Shield,
      title: "Counselling by Experts",
      description: "If you are in dilemma to choose a course, We are having experts in counselling team to help you with perfect projection of your career."
    },
    {
      icon: BookOpen,
      title: "Course Materials",
      description: "After completion of each session, We share course material for your reference. This material is designed our industry expert trainers."
    }
  ];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0075eb] via-blue-600 to-indigo-700 py-20 px-4 md:px-8">
        <div className="px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center w-full">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {courseData.courseName}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Master digital marketing skills with industry-recognized certification
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-8">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3" fill="currentColor" />
                  <div className="text-2xl font-bold text-white">{courseData.rating}</div>
                  <div className="text-blue-100">Rating</div>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Users className="w-8 h-8 text-blue-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">{courseData.totalLearner}</div>
                  <div className="text-blue-100">Total Learners</div>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Clock className="w-8 h-8 text-green-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">{courseData.courseDuration} Hours</div>
                  <div className="text-blue-100">Course Duration</div>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Award className="w-8 h-8 text-purple-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">{courseData.totalReview}</div>
                  <div className="text-blue-100">Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Info and Navigation Tabs */}
      <section className="py-8 px-4 md:px-8 bg-white">
        <div className="px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center w-full">
            <div className="w-full">
              {/* Tab Navigation */}
              <div className="border-b border-gray-200 mb-8">
                <nav className="flex space-x-8">
                  {['about', 'syllabus', 'features', 'faq'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-4 px-2 font-medium text-sm capitalize transition-colors border-b-2 ${
                        activeTab === tab
                          ? 'text-[#0075eb] border-[#0075eb]'
                          : 'text-gray-500 border-transparent hover:text-gray-700'
                      }`}
                    >
                      {tab === 'about' && 'About Course'}
                      {tab === 'syllabus' && 'Syllabus'}
                      {tab === 'features' && 'Program Features'}
                      {tab === 'faq' && 'FAQ'}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="py-8">
                {/* About Course Tab */}
                {activeTab === 'about' && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">About Course</h3>
                      <div className="prose prose-lg text-gray-700">
                        <p className="mb-4">{courseData.aboutCourse}</p>
                        
                        <div className="bg-blue-50 rounded-xl p-6">
                          <h4 className="font-bold text-gray-900 mb-3">Course Highlights</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                              <CheckCircle className="text-green-500" size={16} />
                              <span>ONLINE CLASSROOM TRAINING</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="text-blue-500" size={16} />
                              <span>Attend our Instructor Led Online Virtual Training</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Enrollment Options</h3>
                      <div className="space-y-4">
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-lg font-bold text-gray-900">ONLINE TRAINING</h4>
                            <div className="text-right">
                              <p className="text-3xl font-bold text-[#0075eb]">₹{courseData.onlineCoursePrice.toLocaleString()}</p>
                              <p className="text-sm text-gray-600">Per participant</p>
                            </div>
                          </div>
                          <Link 
                            to="/enroll/online"
                            className="w-full bg-[#0075eb] hover:bg-[#0066cc] text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                          >
                            Enroll Now
                            <ArrowRight size={20} />
                          </Link>
                        </div>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-lg font-bold text-gray-900">ONE TO ONE SESSION</h4>
                            <div className="text-right">
                              <p className="text-3xl font-bold text-green-600">₹{courseData.oneToOnePrice.toLocaleString()}</p>
                              <p className="text-sm text-gray-600">Per session</p>
                            </div>
                          </div>
                          <Link 
                            to="/enroll/one-to-one"
                            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                          >
                            Enroll Now
                            <ArrowRight size={20} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Syllabus Tab */}
                {activeTab === 'syllabus' && (
                  <div className="space-y-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">Syllabus</h3>
                      <button className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-600 px-4 py-2 rounded-lg transition-colors">
                        <Download size={16} />
                        Download Syllabus
                      </button>
                    </div>
                    
                    <div className="space-y-6">
                      {syllabus.map((item, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                          <h4 className="text-xl font-bold text-gray-900 mb-4">{item.heading}</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {item.topics.map((topic, topicIndex) => (
                              <div key={topicIndex} className="flex items-center gap-2">
                                <CheckCircle className="text-green-500" size={16} />
                                <span className="text-gray-700">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-blue-50 rounded-xl p-6 mt-8">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Are you Looking for Customized Syllabus?</h4>
                      <p className="text-gray-700 mb-4">
                        We are also providing customized syllabus to students according to their needs and projects requirements for consultation.
                      </p>
                      <Link 
                        to="/custom-syllabus"
                        className="inline-flex items-center gap-2 bg-[#0075eb] hover:bg-[#0066cc] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                      >
                        Get Custom Syllabus
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                )}

                {/* Program Features Tab */}
                {activeTab === 'features' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {programFeatures.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <Icon className="text-blue-600" size={24} />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* FAQ Tab */}
                {activeTab === 'faq' && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                    
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <h4 className="font-semibold text-gray-900">{faq.question}</h4>
                          <ArrowRight 
                            className={`transition-transform duration-200 ${
                              expandedFaq === index ? 'rotate-90' : ''
                            }`} 
                            size={20} 
                          />
                        </button>
                        
                        {expandedFaq === index && (
                          <div className="px-6 pb-4 border-t border-gray-100">
                            <p className="text-gray-600 leading-relaxed pt-4">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Batches */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center w-full">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Upcoming <span className="text-[#0075eb]">Batches</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the batch that fits your schedule
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingBatches.map((batch, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-gray-900">{batch.startDate}</h3>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm font-medium">
                      {batch.seats}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={16} />
                      <span>{batch.timing}</span>
                    </div>
                    <button className="w-full bg-[#0075eb] hover:bg-[#0066cc] text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
                      Enroll Now
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 px-4 md:px-8">
        <div className="px-4 md:px-8">
          <div className="max-w-4xl mx-auto flex flex-wrap items-center w-full">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Start Your <span className="text-[#0075eb]">Digital Marketing</span> Journey?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Get industry-recognized certification and advance your career
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#0075eb] hover:bg-[#0066cc] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 flex items-center gap-3">
                  <Phone size={20} />
                  Get in Touch
                </button>
                <button className="border-2 border-[#0075eb] text-[#0075eb] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#f3f8f6] transition-colors duration-200 flex items-center gap-3">
                  <Mail size={20} />
                  Request Information
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-gray-900 text-white py-16 px-4 md:px-8">
        <div className="px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-6">FIND US</h3>
                <div className="space-y-3">
                  <p className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>512/2, Kalyan Road, Bhiwandi, Thane(Mumbai), Maharashtra, India 421302</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone size={16} />
                    <span>+91-9389551374</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail size={16} />
                    <span>contact@learncoz.com</span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">COMPANY</h3>
                <div className="space-y-3">
                  <Link to="/about" className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors">
                    <span>About Us</span>
                  </Link>
                  <Link to="/contact" className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors">
                    <span>Contact Us</span>
                  </Link>
                  <Link to="/blog" className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors">
                    <span>Blog</span>
                  </Link>
                  <Link to="/terms" className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors">
                    <span>Terms and Conditions</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 px-4 md:px-8">
        <div className="px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center w-full">
            <div className="text-center">
              <p className="mb-4">
                Copyright @2024 | Designed With by{' '}
                <a 
                  href="http://happiestech.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Happiest Tech-A Digital IT Hub
                </a>
              </p>
              <div className="flex flex-wrap gap-6 justify-center">
                <Link to="/careers" className="text-white hover:text-blue-300 transition-colors">
                  Careers
                </Link>
                <Link to="/become-instructor" className="text-white hover:text-blue-300 transition-colors">
                  Become an instructor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CourseDetails;
