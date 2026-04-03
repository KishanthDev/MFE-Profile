import React from 'react';
import { MapPin, Link as LinkIcon, Calendar } from 'lucide-react';

export default function Profile() {
  return (
    <div className="w-full max-w-4xl mx-auto my-8 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden font-sans">
      
      {/* 1. Cover Photo & Avatar */}
      <div className="h-48 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative">
        <div className="absolute -bottom-12 left-8">
          <img
            src="https://i.pravatar.cc/150?img=68"
            alt="Profile Avatar"
            className="w-28 h-28 rounded-full border-4 border-white shadow-md object-cover bg-white"
          />
        </div>
      </div>

      {/* 2. Header & Actions */}
      <div className="pt-16 pb-6 px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Alex Carter</h1>
            <p className="text-slate-500 font-medium">@alexcarter_dev</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="px-5 py-2.5 text-sm font-semibold bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-colors">
              Message
            </button>
            <button className="px-5 py-2.5 text-sm font-semibold bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 shadow-md shadow-indigo-200 transition-all active:scale-95">
              Follow
            </button>
          </div>
        </div>

        {/* 3. Bio */}
        <p className="mt-5 text-slate-700 leading-relaxed max-w-2xl text-sm sm:text-base">
          Senior Frontend Engineer specializing in React, TypeScript, and Tailwind CSS. 
          Passionate about building intuitive micro-frontends and accessible user interfaces. 
          Always learning, always coding. ☕️
        </p>

        {/* 4. Meta Details */}
        <div className="mt-5 flex flex-wrap gap-y-3 gap-x-6 text-sm text-slate-500 font-medium">
          <div className="flex items-center gap-1.5">
            <MapPin size={16} className="text-slate-400" />
            <span>San Francisco, CA</span>
          </div>
          <div className="flex items-center gap-1.5">
            <LinkIcon size={16} className="text-slate-400" />
            <a href="#" className="text-indigo-600 hover:text-indigo-700 hover:underline">
              alexcarter.dev
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar size={16} className="text-slate-400" />
            <span>Joined March 2021</span>
          </div>
        </div>

        {/* 5. Stats */}
        <div className="mt-6 flex items-center gap-6">
          <div className="flex gap-1.5 items-baseline">
            <span className="text-lg font-bold text-slate-900">142</span>
            <span className="text-slate-500 text-sm font-medium">Following</span>
          </div>
          <div className="flex gap-1.5 items-baseline">
            <span className="text-lg font-bold text-slate-900">12.8k</span>
            <span className="text-slate-500 text-sm font-medium">Followers</span>
          </div>
        </div>
      </div>

      {/* 6. Tabs Navigation */}
      <div className="border-t border-slate-200 px-8">
        <nav className="flex gap-8 overflow-x-auto no-scrollbar">
          {['Overview', 'Repositories', 'Projects', 'Packages'].map((tab, i) => (
            <button
              key={tab}
              className={`py-4 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${
                i === 0
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

    </div>
  );
}