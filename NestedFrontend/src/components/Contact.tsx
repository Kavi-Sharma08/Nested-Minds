import React from 'react';

const Contact: React.FC = () => {
  // Generate a random phone number
  const randomPhoneNumber = `+91-${Math.floor(Math.random() * 9000000000 + 1000000000)}`;

  return (
    <div className="bg-blue-50 min-h-screen text-blue-900">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-12 md:py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto">
            We're here to help you! Whether you have questions, feedback, or need support, feel free to get in touch
            with us. We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">Get in Touch</h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-left text-blue-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-blue-300 rounded-lg"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-left text-blue-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-blue-300 rounded-lg"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-left text-blue-700 font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  className="w-full px-4 py-3 border border-blue-300 rounded-lg"
                  rows={6}
                  placeholder="Write your message"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 bg-blue-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">Contact Information</h2>
          <div className="space-y-6">
            {/* Phone Number */}
            <div className="text-xl text-blue-700">
              <p className="font-semibold">Phone Number</p>
              <p>{randomPhoneNumber}</p>
            </div>

            {/* Email */}
            <div className="text-xl text-blue-700">
              <p className="font-semibold">Email</p>
              <p>support@studenttracker.com</p>
            </div>

            {/* Social Media */}
            <div className="flex justify-center space-x-6 mt-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 text-2xl hover:text-blue-800"
              >
                <i className="fab fa-facebook"></i> Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 text-2xl hover:text-blue-800"
              >
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 text-2xl hover:text-blue-800"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 text-2xl hover:text-blue-800"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>
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

export default Contact;
