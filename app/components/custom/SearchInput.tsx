import React from 'react';

const SearchInput = ({ value, onChange }) => {
  return (
    <div className="relative w-full max-w-lg">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search for player"
        className="w-full py-3 pl-4 pr-12 text-lg text-white bg-black-200 border border-black-100 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-200 transition duration-300 ease-in-out"
      />
      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
        {/* <svg
          className="w-6 h-6 text-primary-100"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 2a8 8 0 105.293 14.293l4.707 4.707a1 1 0 001.414-1.414l-4.707-4.707A8 8 0 0010 2zm0 2a6 6 0 100 12 6 6 0 000-12z"
          />
        </svg> */}
      </div>
    </div>
  );
};

export default SearchInput;
