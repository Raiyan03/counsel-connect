'use client'
import React, { useState } from 'react';
import bcrypt from 'bcryptjs';

const RegisterLawyerPage = () => {
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!fullName || !username || !email || !password ){
            alert("All fields are required");
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(password, salt);

            const res = await fetch('/api/auth/lawyer/register', {
                method: 'POST',
                body:JSON.stringify({fullName, username, email, password: hashedPassword})
            });

            if (res.ok) {
                alert("Lawyer registered successfully");
                window.location.href = ""; // Redirect to sign in page
            }
        }
        catch (error) {
            console.log("An error occurred", error);
        }
    }


    return (
        <div className="grid place-items-center h-screen bg-white">
            <div className="shadow-lg p-8 rounded-lg border-t-4 border-blue-500 bg-gray-100 w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Lawyer Registration</h1>
                <form className="flex flex-col gap-4" encType="multipart/form-data">
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        className="px-4 py-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="px-4 py-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="px-4 py-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="password"
                        name="password"
                        placeholder="Password"
                        className="px-4 py-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="px-4 py-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors duration-300"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>

    );
};

export default RegisterLawyerPage;