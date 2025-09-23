import React from 'react';
import Navigation from '@/components/Navigation';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary-50">
      <Navigation />
      
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-primary-100 shadow-sm">
            <h1 className="text-4xl md:text-5xl font-bold text-dark-primary mb-8">
              Privacy Policy
            </h1>
            
            <div className="prose max-w-none">
              <p className="text-dark-secondary text-lg mb-8">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-dark-primary mb-4">1. Introduction</h2>
                <p className="text-dark-secondary leading-relaxed">
                  Welcome to TiranaJS Community. We respect your privacy and are committed to protecting your personal data. 
                  This privacy policy will inform you about how we look after your personal data when you visit our website 
                  and tell you about your privacy rights and how the law protects you.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-dark-primary mb-4">2. Information We Collect</h2>
                <p className="text-dark-secondary leading-relaxed mb-4">
                  We may collect, use, store and transfer different kinds of personal data about you:
                </p>
                <ul className="list-disc list-inside text-dark-secondary space-y-2 ml-4">
                  <li>Identity Data (name, username, or similar identifier)</li>
                  <li>Contact Data (email address and telephone numbers)</li>
                  <li>Technical Data (internet protocol (IP) address, browser type and version, time zone setting, operating system and platform)</li>
                  <li>Usage Data (information about how you use our website and services)</li>
                  <li>Marketing and Communications Data (your preferences in receiving marketing from us)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-dark-primary mb-4">3. How We Use Your Information</h2>
                <p className="text-dark-secondary leading-relaxed mb-4">
                  We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-dark-secondary space-y-2 ml-4">
                  <li>To provide and maintain our services</li>
                  <li>To notify you about changes to our services</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information so that we can improve our services</li>
                  <li>To monitor the usage of our services</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-dark-primary mb-4">4. Data Security</h2>
                <p className="text-dark-secondary leading-relaxed">
                  We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
                  used or accessed in an unauthorized way, altered or disclosed. We use industry-standard encryption and security 
                  protocols to protect your data.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-dark-primary mb-4">5. Data Retention</h2>
                <p className="text-dark-secondary leading-relaxed">
                  We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, 
                  including for the purposes of satisfying any legal, accounting, or reporting requirements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-dark-primary mb-4">6. Your Legal Rights</h2>
                <p className="text-dark-secondary leading-relaxed mb-4">
                  Under certain circumstances, you have rights under data protection laws in relation to your personal data:
                </p>
                <ul className="list-disc list-inside text-dark-secondary space-y-2 ml-4">
                  <li>Request access to your personal data</li>
                  <li>Request correction of your personal data</li>
                  <li>Request erasure of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing your personal data</li>
                  <li>Request transfer of your personal data</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-dark-primary mb-4">7. Third-Party Services</h2>
                <p className="text-dark-secondary leading-relaxed">
                  Our website may contain links to other websites that are not operated by us. We strongly advise you to review 
                  the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, 
                  privacy policies, or practices of any third-party sites or services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-dark-primary mb-4">8. Changes to This Privacy Policy</h2>
                <p className="text-dark-secondary leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
                  Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-dark-primary mb-4">9. Contact Us</h2>
                <p className="text-dark-secondary leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="mt-4 p-4 bg-primary-100 rounded-lg">
                  <p className="text-dark-secondary">
                    <strong>Email:</strong> privacy@tiranajs.com<br />
                    <strong>Website:</strong> <a href="/contact" className="text-primary-600 hover:text-primary-700 transition-colors">Contact Page</a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
