import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Sidebar/Sidebar';
import './AddBlog.css';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}

const AddBlog = () => {
    
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageUrl, setImageUrl] = useState(null);
    
    const onSubmit = data => {
        console.log(data);
        const blogData = {
            blogName: data.blogName,
            //id: data.id,
            content: data.content,
            imageUrl: imageUrl,
        };
        const url = `http://localhost:5000/addBlog`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blogData)
        })
            .then(res => {
                console.log(res);
                if(res){
                    alert('Successfully Added');
                }
            })

    };

    const handleImageUpload = event => {
        console.log(event.target.files);
        const imageData = new FormData();
        imageData.set('key', '72441dede61096c05221caead391c12a');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 mb-5 addservice">
                    <h1 className="text-center">Add Blog</h1>
                    <br />
                    <div style={{ border: '1px solid cyan', height: '500px' }} className="ms-5 pt-5 ps-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h5>Blog Title</h5>
                            <input name="blogName" placeholder="Blog Name" ref={register} />
                            <br />
                            <h5>Blog Content</h5>
                            <input name="content" placeholder="Blog Content" ref={register({ required: true })} />
                            <br />
                            <h5>Add Cover Photo</h5>
                            <input name="example" type="file" onChange={handleImageUpload} />
                            {errors.exampleRequired && <span>This field is required</span>}
                            <br />
                            <br />
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddBlog;