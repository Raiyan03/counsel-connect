'use client'

import Navbar from '../../components/NavBar';
import React, { useState } from 'react';

const page = () => {
  function LawyerDashboard() {
    const [resume, setResume] = useState(null);
    const [profileInfo, setProfileInfo] = useState({
      name: '',
      email: '',
      phoneNumber: '',
      // Add more profile fields as needed
    });

    const handleResumeUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        setResume(file);
        // TODO: Upload to the server for processing and then auto-fill profile fields
        // For now, let's just log the file object
        console.log(file);
      }
    };

    const handleFieldChange = (field) => (event) => {
      setProfileInfo({ ...profileInfo, [field]: event.target.value });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      // TODO: Submit the profile information to the server
      console.log('Submitting profile info:', profileInfo);
    };

    return (
      <>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8 bg-white p-6 rounded-lg shadow-md">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Lawyer Dashboard
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Upload Resume:</label>
                  <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    type="file"
                    onChange={handleResumeUpload}
                    accept=".pdf,.doc,.docx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name:</label>
                  <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    type="text"
                    value={profileInfo.name}
                    onChange={handleFieldChange('name')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email:</label>
                  <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    type="email"
                    value={profileInfo.email}
                    onChange={handleFieldChange('email')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number:</label>
                  <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    type="tel"
                    value={profileInfo.phoneNumber}
                    onChange={handleFieldChange('phoneNumber')}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Save Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <LawyerDashboard />
    </>
  );
}

export default page