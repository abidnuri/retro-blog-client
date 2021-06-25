import React from 'react';
import './Write.css';

const Write = () => {
    return (
        <div className="container mx-auto px-4 mt-5 flex justify-center">
            <form className="writeForm">
                <label className="block">
                    <h2 className="text-gray-700 text-2xl">Title</h2>
                    <input type="text" className="h-12 mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" rows="4" placeholder="Title" />
                </label>
                <label className="block">
                    <span className="text-gray-700 text-2xl">Select Your Image Here</span>
                    <input type="file" className="h-full w-full opacity-0" name="" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="plus-icon w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </label>
                <label className="block">
                    <span className="text-gray-700 text-2xl">Write Your Story</span>
                    <textarea className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" rows="4" placeholder="Write your story....."></textarea>
                </label>
                <button type="submit" className="my-6 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Publish
                </button>
            </form>
        </div>
    );
};

export default Write;