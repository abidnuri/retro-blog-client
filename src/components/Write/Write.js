import React from 'react';
import './Write.css';

const Write = () => {
    return (
        <div class="container mx-auto px-4 flex justify-center">
            <form className="writeForm">
                <label class="block">
                    <h2 class="text-gray-700 text-2xl">Title</h2>
                    <input type="text" class="h-12 mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" rows="4" placeholder="Title" />
                </label>
                <label className="block">
                    <span class="text-gray-700 text-2xl">Select Your Image Here</span>
                    <input type="file" class="h-full w-full opacity-0" name="" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="plus-icon w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </label>
                <label class="block">
                    <span class="text-gray-700 text-2xl">Write Your Story</span>
                    <textarea class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" rows="4" placeholder="Write your story....."></textarea>
                </label>
                <button type="submit" class="my-6 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Publish
                </button>
            </form>
        </div>
        // <div className="write md:container md:mx-auto">
        //     <img className="writeImg" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        //     <form className="writeForm">
        //         <div className="writeFormGroup">
        //             <label htmlFor="fileInput">
        //                 <i className="writeIcon fas fa-plus"></i>
        //             </label>

        //             <label class="block">
        //         <span class="text-gray-700">Full name</span>
        //         <input type="text" class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" placeholder=""/>
        //       </label>

        //             <input id="fileInput" type="file" style={{ display: "none" }} />
        //             <input className="writeInput" placeholder="Title" type="text" autoFocus={true} />
        //         </div>
        //         <div className="writeFormGroup">
        //             <textarea className="writeInput writeText" placeholder="Tell your story..." type="text" autoFocus={true} />
        //         </div>
        //         <button className="writeSubmit" type="submit">
        //             Publish
        //         </button>
        //     </form>
        // </div>
    );
};

export default Write;