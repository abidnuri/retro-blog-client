import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blog = () => {
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        fetch(`https://stormy-coast-65676.herokuapp.com/posts`)
            .then(res => res.json())
            .then(data => setBlog(data));
    }, []);
    return (
        <div className="text-gray-600 body-font">
            <div className="container px-5 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {
                        blog.map((blg) => <SingleBlog key={blg.idTeam} blg={blg} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;