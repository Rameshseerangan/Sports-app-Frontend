import React from 'react';

const About = () => {
  return (
    <div className="h-screen w-full bg-[url('/src/assets/sportsbg.webp')] bg-cover bg-center flex items-center justify-center">
      <div className="bg-white/70 w-full p-10 rounded-lg shadow-2xl max-w-4xl border-t-4 border-yellow-400 font-poppins">
        <h1 className="text-4xl font-extrabold text-blue-900 uppercase tracking-wide mb-6 text-center md:text-5xl">
          About Shine Sports
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-center md:text-left">
          Shine Sports is a platform committed to nurturing and supporting the aspirations of students and athletes who dream of building a successful career in sports. We believe in the power of sports to transform lives and open doors to limitless opportunities.
        </p>
        <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center md:text-left">Our Offerings</h2>
        <ul className="list-disc list-inside text-lg text-gray-800 space-y-4 mb-6 md:text-left">
          <li><strong>Feature Career:</strong> Expert advice and career planning for success in the sports industry.</li>
          <li><strong>Sports Regimens:</strong> Structured training programs to improve skills and performance.</li>
          <li><strong>Physical Fitness:</strong> Customized fitness plans to build strength and agility.</li>
          <li><strong>Medical Fitness:</strong> Insights to prevent injuries and enhance recovery.</li>
          <li>
            <strong>Scholarships:</strong> 
            <ul className="list-disc list-inside ml-6">
              <li>For 12th-grade students excelling in sports.</li>
              <li>For college athletes to support education and sports journeys.</li>
            </ul>
          </li>
        </ul>
        <p className="text-lg text-gray-700 text-center md:text-left">
          Shine Sports is more than just a platform; it’s a community that supports your dreams and fuels your passion for sports. Together, let’s turn your aspirations into achievements!
        </p>
      </div>
    </div>
  );
};

export default About;
