'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState, FormEvent } from 'react';

const SignUp: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();

    // Check if user is already logged in
    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            router.push('/account'); // Redirect to account page if logged in
        }
    }, [router]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const userData = { name, email, password };
        localStorage.setItem('user', JSON.stringify(userData));

        console.log('User data saved:', userData);
        location.reload()
    };

    return (
        <div className='h-[90vh] w-[99vw] flex justify-center items-center'>
            <div className="accountBox mx-auto shadow-lg shadow-[#a5a5a5] p-[2em] text-center flex flex-col justify-center gap-5 items-center h-[50%] w-[50%]">
                <h2 className='text-3xl font-bold'>Sign Up</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full items-center">
                    <input 
                        type="text" 
                        placeholder='Enter your full name' 
                        className='w-[30vw] outline-none border-2 border-gray-500 text-xl p-3 rounded-md'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
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
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
