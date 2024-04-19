'use client'
import Link from 'next/link';

const RegisterPage = () => {
    return (
        <div className="grid place-items-center h-screen bg-white">
            <div className="shadow-lg p-8 rounded-lg border-t-4 border-blue-500 bg-gray-100 w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Sign Up</h1>
                <p className="mb-4 text-gray-800">Are you a Lawyer or a Client?</p>
                <div className="flex justify-between">
                    <Link href={'/register/register-client'}>
                        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors duration-300">Client</button>
                    </Link>
                    <Link href={'/register/register-lawyer'}>
                        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors duration-300">Lawyer</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
