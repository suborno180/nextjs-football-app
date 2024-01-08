import React from 'react';
import Navbar from '@/components/navbar/Navbar';

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
      <Navbar />
      <div className="container max-w-[800px] mx-auto px-4 lg:px-0 mt-8">
        <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions (FAQ)</h1>
        <div>
          {faqData.map((faq, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-xl font-bold mb-2">{faq.question}</h2>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FAQ;
