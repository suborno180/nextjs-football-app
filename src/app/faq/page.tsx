import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import PageHero from '@/components/PageHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - Exciting Football Matches',
  description: 'Explore frequently asked questions (FAQ) about Exciting Football Matches and find answers to common queries.',
  keywords: ['FAQ', 'questions', 'answers'],
  icons: {
    icon: '/ball-football-icon.svg'
  }
};


const FAQ = () => {
  const faqData = [
    {
      question: 'How do I create an account?',
      answer: 'To create an account, click on the "Sign Up" button and follow the on-screen instructions.',
    },
    {
      question: 'Can I watch live matches on this platform?',
      answer: 'Yes, you can watch live matches by navigating to the "Watch Now" section.',
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can contact our customer support team by visiting the "Contact Us" page and filling out the form.',
    },
    // Add more FAQ entries as needed
  ];

  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <Navbar />
      {/* Top Google Ads */}
      <div className="text-center mb-4">
        {/* Insert Google Ads code or component here */}
        {/* Example: <GoogleAdsComponent /> */}
        <div className="container mx-auto">
          <h1>Top Google Ads</h1>
        </div>
      </div>
      <PageHero
        title="Frequently Asked Questions (FAQ)"
        description="Find answers to common questions about Exciting Football Matches."
      />
      <div className="container max-w-[800px] mx-auto px-4 lg:px-0 mt-8">
        <div>
          {faqData.map((faq, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-xl font-bold mb-2">{faq.question}</h2>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto max-w-[1000px] my-8 px-3 lg:px-0">
        {/* Insert Google Ads code or component here */}
        Show: GoogleAds
      </div>
    </main>
  );
};

export default FAQ;