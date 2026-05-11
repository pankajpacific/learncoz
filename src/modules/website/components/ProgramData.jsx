import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Sample data structure matching the image content
const programsData = {
  "Most Popular": [
    {
      title: "PMP® Certification Training",
      duration: "4 Weeks",
      startDate: "9th May '26"
    },
    {
      title: "Professional Certificate Program in Generative AI Machine Learning and...",
      duration: "11 Months",
      startDate: "19th May '26"
    },
    {
      title: "Advanced Executive Program in Cybersecurity",
      duration: "8 Months",
      startDate: "20th May '26"
    },
    {
      title: "ITIL Foundation (Version 5)",
      duration: "2 Weeks",
      startDate: "16th May '26"
    }
  ],
  "AI & ML": [
    {
      title: "Generative AI Specialization",
      duration: "6 Months",
      startDate: "12th Jun '26"
    },
    {
      title: "Machine Learning Engineer Bootcamp",
      duration: "9 Months",
      startDate: "25th May '26"
    }
  ],
  "Cyber Security": [
    {
      title: "Advanced Executive Program in Cybersecurity",
      duration: "8 Months",
      startDate: "20th May '26"
    }
  ],
  "Project Management": [
    {
      title: "PMP® Certification Training",
      duration: "4 Weeks",
      startDate: "9th May '26"
    },
    {
      title: "Agile Project Management Professional",
      duration: "3 Months",
      startDate: "2nd Jun '26"
    }
  ],
  "Data Science": [
    {
      title: "Data Science & Business Analytics",
      duration: "10 Months",
      startDate: "15th Jun '26"
    }
  ],
  "Cloud Computing": [
    {
      title: "Cloud Computing & DevOps",
      duration: "7 Months",
      startDate: "10th Jun '26"
    }
  ]
};

const ProgramData = () => {
  const [activeTab, setActiveTab] = useState("Most Popular");
  const tabs = Object.keys(programsData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8 py-16 md:py-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-left mb-12">
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Explore Our Top Programs
          </h1>
        </div>

        {/* Vertical Tabs Section */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Vertical Tab Bar */}
          <div className="md:w-1/4 lg:w-1/5">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 sticky top-8">
              
              <div className="divide-y divide-gray-100">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`w-full text-left px-6 py-4 transition-all duration-200 ease-in-out flex items-center gap-3 group ${
                      activeTab === tab
                        ? "bg-indigo-50 text-indigo-700 border-l-4 border-indigo-600 border-b-0"
                        : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full transition-all ${
                        activeTab === tab ? "bg-indigo-600 scale-125" : "bg-gray-300 group-hover:bg-indigo-400"
                      }`}
                    ></span>
                    <span className="font-medium">{tab}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Program Cards Grid */}
          <div className="md:w-3/4 lg:w-4/5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {programsData[activeTab]?.map((program, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col"
                >
                  <div className="p-2 flex-1">
                    {/* Image Section */}
                    <div className="mb-4">
                      <img
                        src="https://picsum.photos/seed/program-${idx}/400/200.jpg"
                        alt={program.title}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                      {program.title}
                    </h3>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-sm">{program.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        <span className="text-sm">Cohort Starts: {program.startDate}</span>
                      </div>
                    </div>
                    <Link to="/course-details" className="mt-auto w-full bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white py-2.5 px-3 rounded-lg font-semibold transition-all duration-200 ease-in-out focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      View Program
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            {/* Empty state in case no programs for a tab (should not happen with current data) */}
            {programsData[activeTab]?.length === 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <p className="text-gray-500 text-lg">No programs available in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramData;