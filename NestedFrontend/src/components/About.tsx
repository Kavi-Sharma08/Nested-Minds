import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-blue-50 min-h-screen text-blue-900">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-12 md:py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Student Tracker App</h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto">
            The Student Tracker is designed to help you stay engaged and make your learning experience more
            interactive and efficient. Track your progress, stay on top of your assignments, and feel the
            support of a community dedicated to your success.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">How We Track and Engage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Real-Time Engagement</h3>
              <p className="text-blue-700">
                Track your activity and see your progress in real time! Our app provides immediate feedback on your
                engagement, allowing you to see your improvement over time.
              </p>
            </div>
            <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Personalized Insights</h3>
              <p className="text-blue-700">
                We analyze your activity and provide insights to help you stay focused and motivated. Get detailed
                reports to improve your learning strategies.
              </p>
            </div>
            <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Community Support</h3>
              <p className="text-blue-700">
                Join a vibrant community of learners! Share experiences, get advice, and stay motivated through
                social learning features that connect you with others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-blue-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Start Engaging Today!</h2>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8">
            Don’t let your studies become monotonous. Take control of your learning journey with our Student Tracker
            and make every moment count! Track your performance, set new goals, and be part of a motivated student
            community.
          </p>
          <a
            href="/login"
            className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold text-xl hover:bg-blue-100 transition duration-300"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Student Tracker. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
