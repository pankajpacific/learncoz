import React, { useState } from 'react';
import { Search, Filter, BookOpen, Clock, Users, Star, ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProgramData from '../components/ProgramData.jsx';

const RelatedCourses = () => {
    const relatedCourses = [
        {
            id: 1,
            title: "Full Stack Web Development",
            category: "Development",
            duration: "6 Months",
            level: "Beginner to Advanced",
            rating: 4.8,
            students: 15420,
            price: "₹45,000",
            image: "https://picsum.photos/seed/fullstack/400/250.jpg",
            instructor: "John Smith",
            description: "Master modern web development with React, Node.js, and MongoDB"
        },
        {
            id: 2,
            title: "Data Science Fundamentals",
            category: "Data Science",
            duration: "4 Months",
            level: "Beginner",
            rating: 4.9,
            students: 23150,
            price: "₹35,000",
            image: "https://picsum.photos/seed/datascience/400/250.jpg",
            instructor: "Dr. Sarah Johnson",
            description: "Learn data analysis, visualization, and machine learning basics"
        },
        {
            id: 3,
            title: "Cloud Architecture",
            category: "Cloud Computing",
            duration: "3 Months",
            level: "Intermediate",
            rating: 4.7,
            students: 8930,
            price: "₹40,000",
            image: "https://picsum.photos/seed/cloudarch/400/250.jpg",
            instructor: "Michael Chen",
            description: "Design and implement scalable cloud solutions with AWS and Azure"
        },
        {
            id: 4,
            title: "Mobile App Development",
            category: "Development",
            duration: "5 Months",
            level: "Intermediate",
            rating: 4.6,
            students: 12780,
            price: "₹42,000",
            image: "https://picsum.photos/seed/mobiledev/400/250.jpg",
            instructor: "Emily Davis",
            description: "Build native iOS and Android apps with React Native"
        }
    ];

    return (
        <section className="py-16 px-4 md:px-8 bg-gray-50">
            <div className="px-4 md:px-8">
                <div className="max-w-7xl mx-auto flex flex-wrap items-center w-full">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Related <span className="text-[#0075eb]">Courses</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Explore more courses that complement your learning journey
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedCourses.map((course) => (
                            <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                {/* Course Image */}
                                <div className="relative">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                                        {course.category}
                                    </div>
                                    <div className="absolute top-3 right-3 bg-[#0075eb] text-white px-2 py-1 rounded-full text-xs font-medium">
                                        {course.level}
                                    </div>
                                </div>

                                {/* Course Content */}
                                <div className="p-5">
                                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 text-lg">
                                        {course.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                        {course.description}
                                    </p>

                                    {/* Course Meta */}
                                    <div className="space-y-3 mb-4">
                                        <div className="flex items-center justify-between text-sm">
                                            <div className="flex items-center gap-1">
                                                <Star className="text-yellow-500 fill-current" size={14} />
                                                <span className="font-medium text-gray-700">{course.rating}</span>
                                            </div>
                                            <span className="text-gray-500">{course.students.toLocaleString()} students</span>
                                        </div>

                                        <div className="flex items-center gap-4 text-sm text-gray-600">
                                            <div className="flex items-center gap-1">
                                                <Clock size={14} />
                                                <span>{course.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Users size={14} />
                                                <span>{course.instructor}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Price and CTA */}
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-2xl font-bold text-gray-900">{course.price}</p>
                                            <p className="text-xs text-gray-500">One-time payment</p>
                                        </div>
                                        <Link to="/course-details" className="bg-[#0075eb] hover:bg-[#0066cc] text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2">
                                            View Course
                                            <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View All Courses Button */}
                    <div className="text-center mt-12">
                        <button className="bg-[#0075eb] hover:bg-[#0066cc] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 flex items-center gap-3 mx-auto">
                            <BookOpen size={20} />
                            View All Courses
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const BrowseCourses = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedLevel, setSelectedLevel] = useState('All');
    const [selectedDuration, setSelectedDuration] = useState('All');

    const categories = ['All', 'Development', 'Data Science', 'AI & ML', 'Cloud Computing', 'Cyber Security', 'Project Management'];
    const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
    const durations = ['All', '0-3 Months', '3-6 Months', '6-12 Months', '12+ Months'];

    return (
        <div className="min-h-screen bg-gray-50">

            {/* ProgramData Component */}
            <ProgramData />

            {/* Related Courses Component */}
            <RelatedCourses />
        </div>
    );
};

export default BrowseCourses;
