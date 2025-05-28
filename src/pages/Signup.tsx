import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!name.trim()) {
      setError('Name is required.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setSuccess('Signup successful!');
    // Proceed with signup logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-mint-light to-blue-light">
      <div className="w-full max-w-md p-8 rounded-3xl shadow-2xl border border-blue-dark bg-white/70 backdrop-blur-lg relative overflow-hidden">
        {/* Decorative Soft Avatar/Logo */}
        <div className="flex justify-center mb-6">
          <div className="bg-mint-light rounded-full p-3 shadow-lg flex items-center justify-center">
            <svg className="w-10 h-10 text-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#8ecae6" />
              <path d="M12 14c-2.5 0-4 1.5-4 3v1h8v-1c0-1.5-1.5-3-4-3z" fill="#e6fff7" />
              <circle cx="12" cy="10" r="2.5" fill="#219ebc" />
            </svg>
          </div>
        </div>
        <h2 className="text-3xl font-extrabold mb-2 text-center text-blue-dark tracking-tight">Create your account</h2>
        <p className="text-center text-gray-dark mb-6">Sign up to get started!</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <label htmlFor="name" className="block text-sm font-medium text-gray-dark mb-1">Name</label>
            <span className="absolute left-3 top-9 text-blue-dark">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M12 16v-4" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="10" r="1" fill="currentColor" />
              </svg>
            </span>
            <input
              id="name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray bg-mint-light text-blue-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-mint focus:border-mint transition placeholder:text-gray-dark"
              placeholder="Your name"
              autoComplete="name"
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-dark mb-1">Email</label>
            <span className="absolute left-3 top-9 text-blue-dark">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16v16H4z" stroke="none"/>
                <path d="M4 4l8 8 8-8" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </span>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray bg-mint-light text-blue-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-mint focus:border-mint transition placeholder:text-gray-dark"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-dark mb-1">Password</label>
            <span className="absolute left-3 top-9 text-blue-dark">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M12 16v-4" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="10" r="1" fill="currentColor" />
              </svg>
            </span>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray bg-mint-light text-blue-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-mint focus:border-mint transition placeholder:text-gray-dark"
              placeholder="Create a password"
              autoComplete="new-password"
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-dark mb-1">Confirm Password</label>
            <span className="absolute left-3 top-9 text-blue-dark">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M12 16v-4" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="10" r="1" fill="currentColor" />
              </svg>
            </span>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray bg-mint-light text-blue-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-mint focus:border-mint transition placeholder:text-gray-dark"
              placeholder="Repeat your password"
              autoComplete="new-password"
              required
            />
          </div>
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          {success && <div className="text-green-600 text-sm text-center">{success}</div>}
          <button
            type="submit"
            className="w-full py-2 bg-blue hover:bg-mint text-white font-semibold rounded-lg shadow-md transition transform hover:-translate-y-0.5 hover:shadow-lg focus:ring-2 focus:ring-blue-dark focus:outline-none"
          >
            Sign Up
          </button>
        </form>
        {/* Divider for future SSO */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-light"></div>
          <span className="mx-3 text-gray-dark text-xs">or</span>
          <div className="flex-grow border-t border-gray-light"></div>
        </div>
        {/* Example SSO button (disabled for now) */}
        <button className="w-full py-2 bg-gray-light text-gray-dark font-semibold rounded-lg shadow-sm cursor-not-allowed opacity-70 mb-4" disabled>
          Continue with Google
        </button>
        <div className="flex justify-between items-center text-sm">
          <Link to="/login" className="text-blue hover:text-mint hover:underline transition">Already have an account?</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
