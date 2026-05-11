// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    Calendar,
    Users,
    Award,
    TrendingUp,
    Cloud,
    Code,
    Database,
    Clock,
    ChevronRight,
    Star
} from 'lucide-react';

import ProgramData from '../components/ProgramData.jsx';

const Home = () => {
    const paths = [
        {
            title: 'Data Science',
            description: 'From Python fundamentals to advanced Machine Learning and Neural Networks.',
            icon: <Database size={32} className="text-indigo-600" />,
            stats: ['42 specialized courses', '12 industry projects'],
            color: 'from-blue-500 to-indigo-600'
        },
        {
            title: 'Cloud Computing',
            description: 'Master AWS, Azure, and Google Cloud with production-ready architectures.',
            icon: <Cloud size={32} className="text-indigo-600" />,
            stats: ['AWS Certified Architect Prep', 'Cloud Security Professional'],
            color: 'from-cyan-500 to-blue-600'
        },
        {
            title: 'DevOps',
            description: 'Master CI/CD, Docker, Kubernetes, and Infrastructure as Code automation.',
            icon: <Code size={32} className="text-indigo-600" />,
            stats: ['Kubernetes Certification', 'Ansible & Terraform Labs'],
            color: 'from-purple-500 to-indigo-600'
        }
    ];

    const workshops = [
        {
            date: 'OCT 24',
            title: 'ARCHITECTURAL DESIGN',
            subtitle: 'Scalable Kubernetes Masterclass',
            instructor: 'Marcus Chen, Cloud Lead',
            status: 'Waiting List',
            statusColor: 'bg-yellow-100 text-yellow-800'
        },
        {
            date: 'OCT 27',
            title: 'DATA ENGINEERING',
            subtitle: 'Real-time Pipelines with Apache Kafka',
            instructor: 'Sarah Jenkins, Data Architect',
            status: 'Register Now',
            statusColor: 'bg-green-100 text-green-800'
        }
    ];

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <div className="px-4 md:px-8">
                    <div className="max-w-7xl mx-auto flex flex-wrap items-center w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Text Content */}
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl md:text-5xl lg:text-3xl font-bold text-gray-900 mb-6">
                                Master the Skills that{' '}
                                <span className="bg-[#f5a837] to-purple-600 bg-clip-text text-transparent">
                                    Shape the Future
                                </span>{' '}
                                of Technology
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 mb-8">
                                Access elite training in DevOps, Cloud Computing, and Data Science.
                                Learn from industry veterans and earn recognized certifications.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link to="/browse-courses" className="cursor-pointer bg-[#0075eb] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0066cc] transition-colors duration-200 flex items-center justify-center gap-2">
                                    Browse Courses <ArrowRight size={18} />
                                </Link>
                                <button className="cursor-pointer border-2 border-[#0075eb] text-[#0075eb] px-6 py-3 rounded-lg font-semibold hover:bg-[#f3f8f6] transition-colors duration-200">
                                    View Certifications
                                </button>
                            </div>
                        </div>

                        {/* Right Side - Hero Image */}
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src="./src/assets/images/hero_image.webp"
                                alt="Hero section illustration"
                                className="w-full h-auto max-h-96 lg:max-h-full rounded-lg object-contain"
                            />
                        </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <ProgramData />

            {/* Testimonials Section */}
            <section className="bg-white">
                <div className="px-4 md:px-8">
                    <div className="max-w-7xl mx-auto flex flex-wrap items-center w-full">
                    <div className="mx-auto max-w-screen-sm">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                            What our student says..
                        </h2>
                    </div>

                    <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
                        {/* Testimonial 1 */}
                        <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r">
                            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Speechless with how easy this was to integrate
                                </h3>
                                <p className="my-4">
                                    One of the best decisions I've made for my Digital Marketing Training was finding LearnCoz. I don't know about Digital Marketing and now I can confidently say I learned a lot. Thank You LearnCoz!
                                </p>
                                
                            </blockquote>
                            <figcaption className="flex justify-center items-center space-x-3">

                                <div className="space-y-0.5 font-medium text-left">
                                    <div>Soniya</div>
                                </div>
                            </figcaption>
                        </figure>

                        {/* Testimonial 2 */}
                        <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12">
                            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Solid foundation for any project
                                </h3>
                                <p className="my-4">
                                    
                            It was a great experience learning Python. Trainer taught almost all the concepts along with the assignments which is useful. He is knowledgeable with real time experience and approachable anytime
                        
                                </p>
                                
                            </blockquote>
                            <figcaption className="flex justify-center items-center space-x-3">

                                <div className="space-y-0.5 font-medium text-left">
                                    <div>Naveen</div>
                                    
                                </div>
                            </figcaption>
                        </figure>

                        {/* Testimonial 3 */}
                        <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r">
                            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Mindblowing workflow and variants
                                </h3>
                                <p className="my-4">
                                    
                            I have completed devops training and huge thanks to trainer who has put in immense time and effort to teach devops. He has covered each and every topic in greater depth with my questions and doubts.
                                                        </p>
                                
                            </blockquote>
                            <figcaption className="flex justify-center items-center space-x-3">

                                <div className="space-y-0.5 font-medium text-left">
                                    <div>Anjana</div>
                                    
                                </div>
                            </figcaption>
                        </figure>

                        {/* Testimonial 4 */}
                        <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12">
                            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Efficient Collaborating
                                </h3>
                                <p className="my-4">
                                    "This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind.
                                </p>
                                <p className="my-4">
                                    You have many examples that can be used to create a fast prototype for your team."
                                </p>
                            </blockquote>
                            <figcaption className="flex justify-center items-center space-x-3">

                                <div className="space-y-0.5 font-medium text-left">
                                    <div>Pankaj</div>
                                    
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <div className="px-4 md:px-8 mb-4">
                <div className="max-w-7xl mx-auto flex flex-wrap items-center w-full" style={{ background: 'linear-gradient(to right, #ecfaff, #f5fbff)' }}>
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left side - Text content */}
                        <div className="text-center lg:text-left pl-5">
                            <div className="free-course-title mb-6">
                                <h2>LearnCoz SkillUp</h2>
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                                    Level Up Your Skillset with Free, Industry-Focused Courses.
                                </h3>
                            </div>
                            <div className="free-course-button">
                                 <Link to="/browse-courses" className="cursor-pointer bg-[#0075eb] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0066cc] transition-colors duration-200 flex items-center justify-center gap-2">
                                    Explore 500+ Free Courses
                                </Link>
                             
                            </div>
                        </div>

                        {/* Right side - Image */}
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src="./src/assets/images/new_home_skillup_US.avif"
                                alt="Skills and training programs"
                                className="w-full max-w-lg h-auto rounded-lg shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;