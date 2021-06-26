import React from 'react';
import { Link } from 'react-router-dom';
import './BlogDetail.css';

const BlogDetail = ({blogs}) => {
    
    return (
        <div className="col-md-4 text-center mb-3">
           <div class="job-card card" styles="width: 18rem;">
           <img style={{height:'200px'}} src={blogs.imageUrl} alt=""/>
            <div class="card-body">
                <h5 class="card-title">{blogs.blogName}</h5>
                <Link  className="btn btn-primary" to={`/blogContent/${blogs._id}`}>Read</Link>
            </div>
        </div>
        </div>
    );
};

export default BlogDetail;