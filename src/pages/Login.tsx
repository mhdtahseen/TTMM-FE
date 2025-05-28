import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");
    // Proceed with authentication...
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-mint-light to-blue-light">
      <div className="w-full max-w-md p-8 rounded-3xl shadow-2xl border border-blue-dark bg-white/70 backdrop-blur-lg relative overflow-hidden">
        {/* Decorative Soft Avatar/Logo */}
        <div className="flex justify-center mb-6">
          <div className="bg-mint-light rounded-full p-3 shadow-lg flex items-center justify-center">
            <svg
              className="w-10 h-10 text-blue"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="#8ecae6"
              />
              <path
                d="M12 14c-2.5 0-4 1.5-4 3v1h8v-1c0-1.5-1.5-3-4-3z"
                fill="#e6fff7"
              />
              <circle cx="12" cy="10" r="2.5" fill="#219ebc" />
            </svg>
          </div>
        </div>
        <h2 className="text-3xl font-extrabold mb-2 text-center text-blue-dark tracking-tight">
          Sign in to your account
        </h2>
        <p className="text-center text-gray-dark mb-6">
          Welcome back! Please enter your details.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-dark mb-1"
            >
              Email
            </label>
            <span className="absolute left-3 top-9 text-blue-dark">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M4 4h16v16H4z" stroke="none" />
                <path
                  d="M4 4l8 8 8-8"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </span>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray bg-mint-light text-blue-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-mint focus:border-mint transition placeholder:text-gray-dark"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-dark mb-1"
            >
              Password
            </label>
            <span className="absolute left-3 top-9 text-blue-dark">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path d="M12 16v-4" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="10" r="1" fill="currentColor" />
              </svg>
            </span>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray bg-mint-light text-blue-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-mint focus:border-mint transition placeholder:text-gray-dark"
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </div>
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          <button
            type="submit"
            className="w-full py-2 bg-blue hover:bg-mint text-white font-semibold rounded-lg shadow-md transition transform hover:-translate-y-0.5 hover:shadow-lg focus:ring-2 focus:ring-blue-dark focus:outline-none"
          >
            Login
          </button>
        </form>
        {/* Divider for future SSO */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-light"></div>
          <span className="mx-3 text-gray-dark text-xs">or</span>
          <div className="flex-grow border-t border-gray-light"></div>
        </div>
        {/* Example SSO button (disabled for now) */}
        <button
          className="w-full py-2 bg-gray-light text-gray-dark font-semibold rounded-lg shadow-sm cursor-not-allowed opacity-70 mb-4"
          disabled
        >
          Continue with Google
        </button>
        <div className="flex justify-between items-center text-sm">
          <a
            href="#"
            className="text-blue hover:text-mint hover:underline transition"
          >
            Forgot password?
          </a>
          <Link
            to="/signup"
            className="text-gray-dark hover:text-blue hover:underline transition"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
