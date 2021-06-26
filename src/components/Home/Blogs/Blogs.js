import React, { useEffect, useState } from 'react';
import BlogDetail from '../BlogDetail/BlogDetail';

const Blogs = () => {
   
    const [blogs,setBlogs]=useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/blogs')
        .then(res=>res.json())
        .then(data=>setBlogs(data));
    },[])
    return (
        <section id="blogs">
            <div className="text-center mt-5">
                <h5>Blogs</h5>
                <h2>Explore and Read</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        blogs.map(blogs => <BlogDetail blogs={blogs}></BlogDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;