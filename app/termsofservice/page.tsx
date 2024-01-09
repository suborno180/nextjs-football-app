import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Terms of Service - Exciting Football Matches',
  description: 'Read our Terms of Service to understand the rules and regulations for using our website.',
  keywords: ['Terms of Service', 'website rules', 'user agreement'],
  icons: {
    icon: '/ball-football-icon.svg',
  },
};

const TermsOfService = () => {
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
        title="Terms of Service"
        description="Read our Terms of Service to understand the rules and regulations for using our website."
      />
      <div className="container max-w-[800px] mx-auto px-4 lg:px-0 mt-8">
        <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing this website, you agree to be bound by these terms of service, all applicable laws, and regulations, and agree that you are responsible for compliance with any applicable local laws.
        </p>
        {/* Add more sections as needed */}
        <h2 className="text-2xl font-bold mb-4">2. User Content</h2>
        <p className="mb-4">
          Our website allows users to submit, post, and share content. You are solely responsible for the content you submit.
        </p>
        <h2 className="text-2xl font-bold mb-4">3. Changes to Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these terms at any time. It is your responsibility to check the terms periodically for changes.
        </p>
      </div>
      <div className="container mx-auto max-w-[1000px] my-8 px-3 lg:px-0">
        {/* Insert Google Ads code or component here */}
        Show: GoogleAds
      </div>
    </main>
  );
};

export default TermsOfService;