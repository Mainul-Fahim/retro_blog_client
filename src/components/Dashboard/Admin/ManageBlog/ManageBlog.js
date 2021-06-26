import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import './ManageBlog.css';


const containerStyle = {
    backgroundColor: "#F4FDFB",
    height:"100%"
}

const ManageBlog = () => {
    
    const [blogs,setBlogs]=useState([]);
    useEffect(() =>{
        fetch('https://tranquil-badlands-31724.herokuapp.com/blogs')
        .then(res=>res.json())
        .then(data=>setBlogs(data));
    },[])

    const deleteService=id=>{
        console.log(id);
        fetch(`https://tranquil-badlands-31724.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(result =>{
            console.log("deleted",result);
            const deletedBook =document.getElementById('deletedService');
            deletedBook.style.display = 'none';
        })
   }
    
    return (
        <section>
        <div style={containerStyle} className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 mb-5">
                <h1 className="text-center">Manage Services</h1>
                <br/>
                <div style={{border: '1px solid cyan',height: '500px'}} className="ms-5 pt-5 ps-5 pe-5 table-responsive-sm">
                <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Blog Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {
                            blogs.map(blog =><tr id="deletedService">
                                <td>{blog._id}</td>
                                <td>
                                {blog.blogName}</td>
                                <td><button onClick={() =>deleteService(blog._id)} className="btn btn-primary">Delete</button></td></tr>)
                        }
                   
                    
                </tbody>
            </table>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ManageBlog;