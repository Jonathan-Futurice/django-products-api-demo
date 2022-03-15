export const InputSearch = () => {
  return (
        <div className="relative">
            <label className="sr-only" htmlFor="search"> Search </label>

            <input
                className="w-full py-3 pl-3 pr-12 text-sm border-2 border-gray-200 rounded"
                id="search"
                type="text"
                placeholder="Search"
            />

            <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none top-1/2 right-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                 stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
        </span>
    </div>
  );
};

