'use client'

import React, { useState } from 'react';
import Link from 'next/link';

function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        console.log("Searching for:", searchQuery);
    };

    return (
        <nav className="bg-blue-600 p-2">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <h1 className="text-white text-2xl font-bold">CounselConnect</h1>
                </div>
                <div className="flex-1 max-w-lg mx-10">
                    <form className="flex items-center bg-white rounded-full" onSubmit={handleSearch}>
                        <input
                            type="text"
                            name="search"
                            placeholder="Search your lawyer..."
                            className="flex-grow py-2 px-4 rounded-full text-gray-700 focus:outline-none"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </form>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="/profile">
                        <p className="text-white hover:underline">Hi, Irene</p>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
