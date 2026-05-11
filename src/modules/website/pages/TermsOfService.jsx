import React from 'react';
import { Shield, Users, CreditCard, FileText, AlertCircle } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0075eb] via-blue-600 to-indigo-700 py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Terms of <span className="text-[#f5a837]">Service</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      {/* Terms Content */}
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
                    <FileText size={24} className="text-blue-600" />
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    By accessing and using LearnCoz's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Users size={24} className="text-blue-600" />
                    2. User Accounts
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      <strong>2.1 Registration:</strong> To access certain features of our service, you must register for an account. You agree to provide accurate, current, and complete information as prompted by our registration form.
                    </p>
                    <p>
                      <strong>2.2 Account Security:</strong> You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password.
                    </p>
                    <p>
                      <strong>2.3 Account Termination:</strong> LearnCoz reserves the right to terminate or suspend your account at any time for violation of these terms.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CreditCard size={24} className="text-blue-600" />
                    3. Payment Terms
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      <strong>3.1 Course Fees:</strong> All course fees are clearly displayed on our website. Prices are subject to change without notice.
                    </p>
                    <p>
                      <strong>3.2 Payment Methods:</strong> We accept various payment methods including credit cards, debit cards, UPI, and net banking.
                    </p>
                    <p>
                      <strong>3.3 Refund Policy:</strong> Refunds are processed according to our refund policy, which is available on our website.
                    </p>
                    <p>
                      <strong>3.4 Payment Security:</strong> All payment transactions are secured using industry-standard encryption.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Shield size={24} className="text-blue-600" />
                    4. Course Access and Usage
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      <strong>4.1 Course Access:</strong> Upon successful payment, you will receive access to the purchased course materials for the specified duration.
                    </p>
                    <p>
                      <strong>4.2 Usage Rights:</strong> Course materials are for your personal use only and may not be shared, distributed, or reproduced without permission.
                    </p>
                    <p>
                      <strong>4.3 Intellectual Property:</strong> All course content, materials, and intellectual property remain the property of LearnCoz and our instructors.
                    </p>
                    <p>
                      <strong>4.4 Certificate:</strong> Upon successful completion of a course, you may receive a certificate of completion.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <AlertCircle size={24} className="text-blue-600" />
                    5. Prohibited Activities
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>You agree not to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Use the service for any illegal or unauthorized purpose</li>
                      <li>Share your account credentials with others</li>
                      <li>Reproduce, duplicate, copy, sell, or exploit any portion of the service</li>
                      <li>Interfere with or disrupt the service or servers</li>
                      <li>Upload or transmit viruses or any malicious code</li>
                      <li>Spam, harass, or threaten other users</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Privacy Policy</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our service. By using our service, you agree to the collection and use of information in accordance with our Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Disclaimer of Warranties</h2>
                  <p className="text-gray-600 leading-relaxed">
                    The service is provided on an "AS IS" and "AS AVAILABLE" basis. LearnCoz makes no warranties, expressed or implied, and hereby disclaims all other warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
                  <p className="text-gray-600 leading-relaxed">
                    In no event shall LearnCoz, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
                  <p className="text-gray-600 leading-relaxed">
                    These terms shall be interpreted and governed by the laws of the State of Maharashtra, India, without regard to its conflict of law provisions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We reserve the right, at our sole discretion, to modify or replace these Terms of Service at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
                  <div className="text-gray-600 space-y-2">
                    <p>If you have any questions about these Terms of Service, please contact us:</p>
                    <p>Email: contact@learncoz.com</p>
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

export default TermsOfService;
