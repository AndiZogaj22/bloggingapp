import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

export default function Hero() {
  return (
    <div className=" py-24 px-8 text-center">
      <h1 className="text-5xl font-bold mb-10">Andi&apos;s Blog 📝</h1>
      <p className="text-7xl font-bold mb-4">Collection of programming articles and snippets</p>
      <h1 className="flex justify-center gap-6 mt-16">
        <a href="https://www.linkedin.com/in/andi-zogaj-20a8a2242/"><BsLinkedin size={32} /></a>
        <a href="https://github.com/AndiZogaj22/"><BsGithub size={32} /></a>
      </h1>
    </div>
  );
}