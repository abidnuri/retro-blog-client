import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import HashLoader from "react-spinners/HashLoader";

const Blog = () => {
    const [blog, setBlog] = useState([]);
    let [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(`https://floating-plains-53278.herokuapp.com/posts`)
            .then(res => res.json())
            .then(data => setBlog(data));
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="text-gray-600 body-font">
            <div className="container px-5 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {loading ? (<HashLoader color={"red"} loading={loading} size={50} />) : (
                        blog.map((blg) => <SingleBlog key={blg.idTeam} blg={blg} />)
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blog;