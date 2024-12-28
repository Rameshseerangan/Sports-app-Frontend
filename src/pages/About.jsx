import React from 'react';

const About = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">About Shine Sports</h1>
      <p className="mb-4">
        Shine Sports is a platform committed to nurturing and supporting the aspirations of students and athletes who dream of building a successful career in sports. We believe in the power of sports to transform lives and open doors to limitless opportunities. Our services are designed to provide all the tools, guidance, and resources needed for you to shine in your journey.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Our Offerings</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Feature Career:</strong> Receive expert advice and career planning tailored to help you achieve your goals in the sports industry.
        </li>
        <li>
          <strong>Sports Regimens:</strong> Access structured and professional sports training programs to improve your skills and performance.
        </li>
        <li>
          <strong>Physical Fitness:</strong> Build your strength, endurance, and agility with customized fitness plans designed by experienced trainers.
        </li>
        <li>
          <strong>Medical Fitness:</strong> Stay informed about your health and wellness with insights into medical fitness to prevent injuries and improve recovery.
        </li>
        <li>
          <strong>Scholarships:</strong> Unlock your potential with our scholarship programs:
          <ul className="list-disc list-inside ml-6">
            <li>For 12th-grade students pursuing excellence in sports.</li>
            <li>For college athletes to support their education and sports journey.</li>
          </ul>
        </li>
      </ul>
      <p>
        Shine Sports is more than just a platform; it’s a community that supports your dreams and fuels your passion for sports. Whether you’re a budding athlete or looking to level up your fitness, Shine Sports is here to guide you every step of the way. Together, let’s turn your aspirations into achievements!
      </p>
    </div>
  );
};

export default About;
