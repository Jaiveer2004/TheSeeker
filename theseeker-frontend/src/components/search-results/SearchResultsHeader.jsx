import { Moon, Search, Sun } from 'lucide-react';

function SearchResultsHeader({ query, onQueryChange, onSubmit, onLogoClick, darkMode, toggleDarkMode }) {
  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl ${darkMode ? 'border-gray-800/80 bg-[#0f1115]/80' : 'border-gray-200/80 bg-white/90'}`}>
      <div className="mx-auto flex h-[76px] w-full max-w-[1200px] items-center justify-between px-4 sm:px-6">
        {/* Left: Logo */}
        <div className="flex shrink-0 items-center justify-start sm:w-1/4">
          <button
            type="button"
            onClick={onLogoClick}
            className={`text-2xl sm:text-[26px] font-bold tracking-tight transition-opacity hover:opacity-80 ${darkMode ? 'text-white' : 'text-slate-900'}`}
            aria-label="Go to homepage"
          >
            TheSeeker<span className={darkMode ? 'text-blue-500' : 'text-blue-600'}>.</span>
          </button>
        </div>

        {/* Center: Search Bar */}
        <form onSubmit={onSubmit} className="flex-1 max-w-[650px] mx-auto hidden sm:block">
          <div className={`flex w-full items-center rounded-3xl border px-3 py-2 shadow-[0_2px_8px_rgb(0,0,0,0.04)] transition-all duration-300 ${darkMode ? 'border-gray-700 bg-gray-900/50 hover:bg-gray-800 hover:border-gray-600 focus-within:border-blue-500/50 focus-within:bg-gray-900 focus-within:shadow-[0_0_20px_rgba(59,130,246,0.15)]' : 'border-gray-300 bg-gray-50/50 hover:bg-white hover:border-gray-400 focus-within:bg-white focus-within:border-blue-500 focus-within:shadow-[0_0_20px_rgba(59,130,246,0.1)]'}`}>
            <input
              type="text"
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Search APIs, endpoints, and docs..."
              className={`h-9 w-full bg-transparent px-3 text-[15px] outline-none ${darkMode ? 'text-gray-100 placeholder:text-gray-500' : 'text-gray-900 placeholder:text-gray-500'}`}
              aria-label="Search query"
            />
            <button
              type="submit"
              className={`rounded-full p-2 transition-all duration-200 ${darkMode ? 'text-gray-400 hover:text-blue-400 hover:bg-blue-500/10' : 'text-gray-400 hover:text-blue-600 hover:bg-blue-50'}`}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
        </form>

        {/* Right: Actions */}
        <div className="flex shrink-0 items-center justify-end sm:w-1/4">
          <button
            type="button"
            onClick={toggleDarkMode}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:rotate-12 hover:scale-105 active:scale-95 ${darkMode ? 'border-gray-700 bg-gray-800 text-yellow-400 hover:border-gray-600 shadow-sm' : 'border-gray-200 bg-white text-slate-700 hover:border-gray-300 shadow-sm hover:shadow-md'}`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
          </button>
        </div>
      </div>
      
      {/* Mobile search bar visible only on small screens */}
      <div className="sm:hidden px-4 pb-3 border-t border-transparent">
        <form onSubmit={onSubmit} className="flex-1 w-full">
           <div className={`flex w-full items-center rounded-2xl border px-3 py-1 shadow-sm transition-all duration-300 ${darkMode ? 'border-gray-700 bg-gray-900/50 focus-within:border-blue-500/50' : 'border-gray-300 bg-gray-50 focus-within:border-blue-500'}`}>
            <input
              type="text"
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Search..."
              className={`h-9 w-full bg-transparent px-2 text-[14px] outline-none ${darkMode ? 'text-gray-100 placeholder:text-gray-500' : 'text-gray-900 placeholder:text-gray-500'}`}
            />
            <button type="submit" className={`p-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              <Search className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}

export default SearchResultsHeader;
