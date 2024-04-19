'use client'
import { useState } from 'react';


const LoginFormLawyer = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            console.log("All fields are required");
            return;
        }
        try {
            const res = await fetch('/api/auth/lawyer/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            if (res.ok) {
                console.log("Logged in successfully");
                window.location.href = "/dashboard/dashboard-lawyer";
            }
            else {
                setError("Invalid username or password");
            }
        }
        catch (error) {
            setError("An error occurred", error);
        }
    }
  return (
    <div className="grid place-items-center h-screen bg-white">
            <div className="shadow-lg p-8 rounded-lg border-t-4 border-blue-500 bg-gray-100 w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Lawyer</h1>
                <form className="flex flex-col gap-6">
                    <div className="relative">
                        <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" className="px-4 py-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-gray-800" />
                    </div>
                    <div className="relative">
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="px-4 py-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-gray-800" />
                    </div>
                    <button onClick={handleSubmit} type="submit" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors duration-300">Login</button>
                    {error && <p className="text-red-500">{error}</p>}
                </form>
                <div className="text-right">
                    <a href={'/register'} className="text-blue-500 mt-4">Register Now</a>
                </div>
            </div>
        </div>
  )
}

export default LoginFormLawyer