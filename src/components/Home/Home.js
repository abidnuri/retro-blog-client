import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import Footer from '../Footer/Footer';
import HeaderHome from '../HeaderHome/HeaderHome';
import Write from '../Write/Write';
import Navbar from '../Navbar/Navbar';
import Login from '../Login/Login';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Login />
            <Write />
            <BlogPost />
            <HeaderHome />
            <Footer />
        </div>
    );
};

export default Home;