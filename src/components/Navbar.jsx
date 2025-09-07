import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

export default function Navbar() {
  const navigate = useNavigate();
  const {user} = useUser();
  const {openSignIn} = useClerk();

  return (
    <div className='fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center px-4 py-3 sm:px-20 xl:px-32 cursor-pointer'>
        <h1
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-2xl sm:text-4xl font-bold text-primary select-none"
      >
        <Sparkles className="w-8 h-8 text-primary" />
        GenixAI
      </h1>

        {user 
        ? <UserButton/> 
        : (
            <button  onClick={openSignIn} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'>Get Started <ArrowRight className='w-4 h-4' /></button>
        )}
    </div>
  )
}
