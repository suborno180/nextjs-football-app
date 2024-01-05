'use client'
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

const Redirect = () => {

  useEffect(() => {
    // Redirect to '/wp' when the component mounts
    redirect('/match')
  }, []); // Empty dependency array ensures that the effect runs only once

  return null; // You can render something here if needed, or just return null
};

export default Redirect;
