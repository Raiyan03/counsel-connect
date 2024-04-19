'use client'
import { useState } from 'react';
import { useRef } from 'react';
import bycrpyt from 'bcryptjs';

const RegisterClientPage = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const ref = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
       if(!name || !username || !email || !password || !confirmPassword){
           setError("All fields are required");
           return;
       }
         if(password !== confirmPassword){
              setError("Passwords do not match");
              return;
         }

        const salt = bycrpyt.genSaltSync(10);
        const hashedPassword = bycrpyt.hashSync(password, salt);

         try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, username, email, password: hashedPassword})  
            });   
            if (res.ok) {
                console.log("User registered successfully");
                window.location.href = "/"; // Redirect to sign in page
            }
        } catch (error) {
            console.log("An error occurred", error);
        }
       ref.current?.reset()
    };

    return (
        <div className="grid place-items-center h-screen bg-white">
            <div className="shadow-lg p-8 rounded-lg border-t-4 border-blue-500 bg-gray-100 w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Client Sign Up</h1>
                <form  ref={ref}
      action={async (formData) => {
        await submit(formData)
        ref.current?.reset()
      }} className="flex flex-col gap-4">
                    <input onChange={(e) => setName(e.target.value)} type="text" name="Name" placeholder="FullName" className="px-4 py-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800" />
                    <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" placeholder="Username" className="px-4 py-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800" />
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" className="px-4 py-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800" />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password" className="px-4 py-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800" />
                    <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" name="confirmPassword" placeholder="Confirm Password" className="px-4 py-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800" />
                    {error && <p className="text-red-500">{error}</p>}
                    <button onClick={handleSubmit} type="submit" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors duration-300">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterClientPage;
