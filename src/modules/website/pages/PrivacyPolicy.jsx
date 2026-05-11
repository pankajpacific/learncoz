import React from 'react';
import { Shield, Eye, Lock, Database, Users, Cookie, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0075eb] via-blue-600 to-indigo-700 py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Privacy <span className="text-[#f5a837]">Policy</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                Last updated: May 8, 2024
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Shield size={24} className="text-blue-600" />
                    1. Introduction
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    LearnCoz ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our online learning services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Database size={24} className="text-blue-600" />
                    2. Information We Collect
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p><strong>2.1 Personal Information:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Name, email address, phone number</li>
                      <li>Billing information and payment details</li>
                      <li>Professional information and work experience</li>
                      <li>Communication preferences</li>
                    </ul>
                    
                    <p><strong>2.2 Usage Information:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Course progress and completion data</li>
                      <li>Learning patterns and preferences</li>
                      <li>Interaction with our platform features</li>
                      <li>Time spent on courses and materials</li>
                    </ul>
                    
                    <p><strong>2.3 Technical Information:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>IP address and device information</li>
                      <li>Browser type and operating system</li>
                      <li>Cookies and similar tracking technologies</li>
                      <li>Access times and referring URLs</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Eye size={24} className="text-blue-600" />
                    3. How We Use Your Information
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>We use your information to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide and maintain our learning services</li>
                      <li>Process payments and manage your account</li>
                      <li>Personalize your learning experience</li>
                      <li>Communicate with you about courses and updates</li>
                      <li>Analyze and improve our services</li>
                      <li>Prevent fraud and ensure security</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Cookie size={24} className="text-blue-600" />
                    4. Cookies and Tracking Technologies
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p><strong>4.1 Essential Cookies:</strong> Required for basic website functionality and security.</p>
                    <p><strong>4.2 Performance Cookies:</strong> Help us understand how our website is being used.</p>
                    <p><strong>4.3 Functional Cookies:</strong> Enable personalized features and remember your preferences.</p>
                    <p><strong>4.4 Marketing Cookies:</strong> Used to deliver relevant advertisements and track marketing campaigns.</p>
                    <p>You can control cookie settings through your browser preferences.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Lock size={24} className="text-blue-600" />
                    5. Data Security
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                    <li>SSL encryption for data transmission</li>
                    <li>Secure servers and database protection</li>
                    <li>Regular security audits and updates</li>
                    <li>Employee training on data protection</li>
                    <li>Access controls and authentication systems</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Users size={24} className="text-blue-600" />
                    6. Information Sharing
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>We may share your information with:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Instructors:</strong> To provide course instruction and support</li>
                      <li><strong>Payment Processors:</strong> To process payments securely</li>
                      <li><strong>Service Providers:</strong> For hosting, analytics, and support services</li>
                      <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
                    </ul>
                    <p>We do not sell your personal information to third parties.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>You have the right to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Access and review your personal information</li>
                      <li>Correct inaccurate or incomplete information</li>
                      <li>Delete your account and personal data</li>
                      <li>Object to processing of your information</li>
                      <li>Request data portability</li>
                      <li>Opt-out of marketing communications</li>
                    </ul>
                    <p>To exercise these rights, please contact us at contact@learncoz.com</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Retention</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. International Data Transfers</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
                  <div className="text-gray-600 space-y-2">
                    <p>If you have any questions about this Privacy Policy, please contact us:</p>
                    <p>Email: privacy@learncoz.com</p>
                    <p>Phone: +91-9389551374</p>
                    <p>Address: 512/2, Kalyan Road, Bhiwandi, Thane(Mumbai), Maharashtra, India 421302</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
