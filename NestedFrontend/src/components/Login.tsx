import React, { useRef, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const EmailRef = useRef<HTMLInputElement>(null);
  const PasswordRef = useRef<HTMLInputElement>(null);

  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>("Kavi");
  const [lastName, setLastName] = useState<string>("Sharma");
  const [email, setEmail] = useState<string>("Kavi@gmail.com");
  const [password, setPassword] = useState<string>("kavi@123");

  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ firstName, lastName, email, password });
    navigate("/dashboard");
  };

  const toggleLogin = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 flex flex-col sm:flex-row items-center justify-center p-6">
      {/* Left Section */}
      <div className="hidden sm:flex flex-col items-center justify-center w-1/2 h-full text-white text-center px-6">
        <h1 className="text-5xl font-bold mb-4">LearnScope</h1>
        <p className="text-xl font-light">
          Empower your teaching with <br /> live student insights.
        </p>
      </div>

      {/* Right Section - Form */}
      <div className="w-full sm:w-1/2 max-w-md bg-white shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form onSubmit={handleForm} className="space-y-5">
          {!isLogin && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  ref={firstNameRef}
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  ref={lastNameRef}
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              ref={EmailRef}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              ref={PasswordRef}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-md py-2 font-semibold hover:bg-blue-700 transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-700">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={toggleLogin}
            className="ml-2 text-blue-600 hover:underline font-medium"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
