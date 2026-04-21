import React, { useState } from 'react';
import { Search, Mic, Camera } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleBtnClick = (engine) => {
    if (input.trim()) onSearch(input, engine);
  };

  return (
    <div className="flex flex-col items-center w-full mt-20">
      {/* Logo */}
      <div className="text-7xl font-bold mb-8 select-none tracking-tighter">
        <span className="text-blue-500">H</span><span className="text-red-500">m</span><span className="text-yellow-500">m</span><span className="text-blue-500">.</span><span className="text-green-500">.</span><span className="text-red-500">.</span>
      </div>

      {/* Input Group */}
      <div className="w-full max-w-[584px] px-4">
        <div className="flex items-center border border-gray-200 rounded-full px-5 py-3 hover:shadow-md focus-within:shadow-md transition-shadow">
          <Search className="h-5 w-5 text-gray-400 mr-3" />
          <input
            className="flex-grow outline-none text-lg"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleBtnClick('lucene')}
            placeholder="Search our 2026 Index..."
          />
          <Mic className="h-5 w-5 text-blue-500 mr-3 cursor-pointer" />
          <Camera className="h-5 w-5 text-blue-500 cursor-pointer" />
        </div>
      </div>

      {/* Engine Selection Buttons */}
      <div className="mt-8 flex gap-3">
        <button onClick={() => handleBtnClick('manual')} className="bg-gray-50 border border-transparent hover:border-gray-300 px-4 py-2 rounded text-sm text-gray-700">Manual (Phase 1)</button>
        <button onClick={() => handleBtnClick('lucene')} className="bg-gray-50 border border-transparent hover:border-gray-300 px-4 py-2 rounded text-sm text-gray-700">Lucene 10.4 (Phase 2)</button>
        <button onClick={() => handleBtnClick('elastic')} className="bg-gray-50 border border-transparent hover:border-gray-300 px-4 py-2 rounded text-sm text-gray-700">Elastic 9.2 (Phase 3)</button>
      </div>
      
    </div>
  );
};

export default SearchBar;