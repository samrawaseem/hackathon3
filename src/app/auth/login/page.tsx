'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect, FormEvent } from 'react';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();

    // Check if user is already logged in
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
            router.push('/account'); // Redirect logged-in user
        }
    }, [router]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const storedUser = localStorage.getItem('user');
        let validUser = false;

        // Check hardcoded credentials
        if (email === 'demo@gmail.com' && password === 'demo') {
            validUser = true;
            localStorage.setItem('user', JSON.stringify({ name: 'Demo User', email }));
        } 
        // Check stored user credentials
        else if (storedUser) {
            const { email: storedEmail, password: storedPassword } = JSON.parse(storedUser);
            if (email === storedEmail && password === storedPassword) {
                validUser = true;
            }
        }

        if (validUser) {
            localStorage.setItem('isLoggedIn', 'true');
            location.reload() // Redirect after successful login
        } else {
            alert('Invalid credentials! Please try again.');
        }
    };

    return (
        <div className='h-[90vh] w-[99vw] flex justify-center items-center'>
            <div className="accountBox mx-auto shadow-lg shadow-[#a5a5a5] p-[2em] text-center flex flex-col justify-center gap-5 items-center h-[50%] w-[50%]">
                <h2 className='text-3xl font-bold'>Log In</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full items-center">
                    <input 
                        type="email" 
                        placeholder='Enter your email' 
                        className='w-[30vw] outline-none border-2 border-gray-500 text-xl p-3 rounded-md'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input 
                        type="password" 
                        placeholder='Enter your password' 
                        className='w-[30vw] outline-none border-2 border-gray-500 text-xl p-3 rounded-md'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button 
                        type="submit"
                        className='bg-blue-600 hover:bg-blue-700 transition text-white text-xl px-6 py-2 rounded-md'
                    >
                        Log In
                    </button>
                </form>
                <Link href={'/auth/signup'} className='text-blue-500'>New User? Sign Up</Link>
            </div>
        </div>
    );
};

export default Login;
