import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogContent = () => {
    
    const { id } = useParams();
    const [checkOutDetails, setCheckOutDetails] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5000/blogContent/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCheckOutDetails(data);
            });
    }, [id])

    return (
        <div>
            <h3>{checkOutDetails.blogName}</h3>
            <p>{checkOutDetails.content}</p>
        </div>
    );
};

export default BlogContent;