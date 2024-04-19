import Link from 'next/link';

export default function Home() {
  return (
    <main>
        <div className="grid place-items-center h-screen bg-white">
            <div className="shadow-lg p-8 rounded-lg border-t-4 border-blue-500 bg-gray-100 w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Counsel-Connect</h1>
                <p className="mb-4 text-gray-800 ">Are you a Lawyer or a Client?</p>
                <div className="flex justify-between px-6">
                    <Link href={'/login/client'}>
                        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors duration-300">Client</button>
                    </Link>
                    <Link href={'/login/lawyer'}>
                        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors duration-300">Lawyer</button>
                    </Link>
                </div>
            </div>
        </div>
    </main>
  );
}
