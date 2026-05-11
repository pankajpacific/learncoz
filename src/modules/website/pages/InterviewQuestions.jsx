import React, { useState } from 'react';
import { Search, Filter, ChevronDown, Clock, User, BookOpen, Code, Database, Cloud, Shield } from 'lucide-react';

const InterviewQuestions = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const categories = [
    { name: 'All', icon: BookOpen },
    { name: 'JavaScript', icon: Code },
    { name: 'Python', icon: Code },
    { name: 'Java', icon: Code },
    { name: 'Cloud Computing', icon: Cloud },
    { name: 'Database', icon: Database },
    { name: 'Cybersecurity', icon: Shield }
  ];

  const questions = [
    {
      id: 1,
      category: 'JavaScript',
      difficulty: 'Easy',
      question: 'What is the difference between let, const, and var in JavaScript?',
      answer: 'let: Block-scoped, can be reassigned. const: Block-scoped, cannot be reassigned. var: Function-scoped, can be reassigned. let and const were introduced in ES6 to provide better scoping rules compared to var.',
      tags: ['ES6', 'Variables', 'Scoping']
    },
    {
      id: 2,
      category: 'JavaScript',
      difficulty: 'Medium',
      question: 'Explain closures in JavaScript with an example.',
      answer: 'A closure is a function that has access to variables in its outer (enclosing) scope even after the outer function has returned. Example: function outer(x) { return function(y) { return x + y; }; } const addFive = outer(5); addFive(3); // Returns 8',
      tags: ['Functions', 'Scoping', 'Advanced']
    },
    {
      id: 3,
      category: 'Python',
      difficulty: 'Easy',
      question: 'What is the difference between list and tuple in Python?',
      answer: 'List: Mutable, can be modified after creation, uses square brackets []. Tuple: Immutable, cannot be modified after creation, uses parentheses (). Lists are generally used for homogeneous data types, while tuples are used for heterogeneous data types.',
      tags: ['Data Types', 'Collections']
    },
    {
      id: 4,
      category: 'Python',
      difficulty: 'Medium',
      question: 'Explain GIL (Global Interpreter Lock) in Python.',
      answer: 'The GIL is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecode at the same time. This means only one thread can execute Python code at a time, even on multi-core processors.',
      tags: ['Threading', 'Performance', 'Advanced']
    },
    {
      id: 5,
      category: 'Java',
      difficulty: 'Easy',
      question: 'What is the difference between HashMap and Hashtable in Java?',
      answer: 'HashMap: Not synchronized, allows null keys/values, faster. Hashtable: Synchronized, doesn\'t allow null keys/values, slower due to synchronization. HashMap is generally preferred for single-threaded applications.',
      tags: ['Collections', 'Data Structures']
    },
    {
      id: 6,
      category: 'Cloud Computing',
      difficulty: 'Medium',
      question: 'What is the difference between IaaS, PaaS, and SaaS?',
      answer: 'IaaS (Infrastructure as a Service): Provides virtualized computing resources. PaaS (Platform as a Service): Provides platform for developing and deploying applications. SaaS (Software as a Service): Provides ready-to-use software applications.',
      tags: ['Cloud Concepts', 'Service Models']
    },
    {
      id: 7,
      category: 'Database',
      difficulty: 'Medium',
      question: 'What is database normalization and why is it important?',
      answer: 'Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. It involves dividing large tables into smaller, well-structured tables and defining relationships between them.',
      tags: ['Database Design', 'Normalization']
    },
    {
      id: 8,
      category: 'Cybersecurity',
      difficulty: 'Easy',
      question: 'What is the difference between authentication and authorization?',
      answer: 'Authentication: Verifying who a user is (identity verification). Authorization: Determining what an authenticated user is allowed to do (permission verification). Authentication comes before authorization.',
      tags: ['Security Concepts', 'Access Control']
    }
  ];

  const difficultyColors = {
    Easy: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Hard: 'bg-red-100 text-red-800'
  };

  const filteredQuestions = questions.filter(q => {
    const matchesCategory = selectedCategory === 'All' || q.category === selectedCategory;
    const matchesSearch = q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         q.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         q.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleQuestion = (id) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };

  return (
    <div className="bg-gray-50 min-h-screen">

        {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0075eb] via-blue-600 to-indigo-700 py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            LearnCoz <span className="text-[#f5a837]">Interview Question</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Insights, tutorials, and industry updates from tech experts
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                    selectedCategory === category.name
                      ? "bg-[#0075eb] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Icon size={16} />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Questions List */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-gray-600">
              Found <span className="font-semibold text-gray-900">{filteredQuestions.length}</span> questions
            </p>
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <Filter size={16} />
              <span>Filter</span>
            </button>
          </div>

          <div className="space-y-4">
            {filteredQuestions.map((q) => (
              <div key={q.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleQuestion(q.id)}
                  className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${difficultyColors[q.difficulty]}`}>
                          {q.difficulty}
                        </span>
                        <span className="text-sm text-gray-500">{q.category}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {q.question}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {q.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ChevronDown
                      className={`text-gray-400 transition-transform ${
                        expandedQuestion === q.id ? 'rotate-180' : ''
                      }`}
                      size={20}
                    />
                  </div>
                </button>
                
                {expandedQuestion === q.id && (
                  <div className="px-6 pb-4 border-t">
                    <div className="pt-4">
                      <div className="flex items-start gap-2 mb-3">
                        <BookOpen size={16} className="text-blue-600 mt-1" />
                        <span className="text-sm font-medium text-gray-700">Answer:</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {q.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredQuestions.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={24} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No questions found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-[#0075eb] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0066cc] transition-colors duration-200">
              Load More Questions
            </button>
          </div>
        </div>
      </section>

      {/* Study Tips */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Interview Preparation Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={24} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Practice Regularly</h3>
              <p className="text-gray-600 text-sm">
                Dedicate at least 30 minutes daily to practice interview questions
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User size={24} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Mock Interviews</h3>
              <p className="text-gray-600 text-sm">
                Practice with peers or mentors to simulate real interview scenarios
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen size={24} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Study Fundamentals</h3>
              <p className="text-gray-600 text-sm">
                Focus on core concepts rather than just memorizing answers
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InterviewQuestions;
