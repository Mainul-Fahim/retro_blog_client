import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogContent = () => {

    const { id } = useParams();
    const [checkOutDetails, setCheckOutDetails] = useState([]);

    useEffect(() => {

        fetch(`https://tranquil-badlands-31724.herokuapp.com/blogContent/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCheckOutDetails(data);
            });
    }, [id])

    return (
        <section className="container-fluid">
            <article>
                <div class="card text-center">
                    <div class="card-header">
                        <h3 style={{color: '#4CAF50'}} class="display-5">{checkOutDetails.blogName}</h3>
                    </div>
                    <div class="card-body">
                        <p style={{fontSize:'125%',fontWeight:'480',textIndent:'50px',textAlign:'justify',letterSpacing:'3px'}} class="card-text">{checkOutDetails.content}</p>
                        
                    </div>
                    <div class="card-footer text-muted">
                        2 days ago
                    </div>
                </div>
            </article>
        </section>
    );
};

export default BlogContent;