'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Account = () => {
    const [user, setUser] = useState<{ name: string, email: string } | null>(null);
    const router = useRouter();

    // Load user data from local storage
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            router.push('/auth/login'); // Redirect if no user is logged in
        }
    }, [router]);

    // Logout function
    const handleSignOut = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('isLoggedIn');
        location.reload() // Redirect to login after logout
    };

    if (!user) return null; // Prevents rendering if no user is found

    return (
        <div className='h-[90vh] w-[99vw] flex justify-center items-center'>
            <div className="accountBox mx-auto shadow-lg shadow-[#a5a5a5] p-[2em] text-center flex flex-col items-center gap-4">
                <Image 
                    src={'https://avatars.githubusercontent.com/u/160887316?v=4'} 
                    height={200} 
                    width={200} 
                    alt={user.name} 
                    className='rounded-full'
                />
                <h2 className='font-bold text-xl'>{user.name}</h2>
                <p className='text-gray-600'>{user.email}</p>
                <button 
                    className='text-red-500 border border-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition'
                    onClick={handleSignOut}
                >
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default Account;
