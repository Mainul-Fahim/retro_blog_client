import React from 'react';
import blog from '../../../Images/blog.gif';

const HeaderMain = () => {
    return (
        <main style={{height: '600px' , width: '100%'}} className="row d-flex align-items-center">
        <div className="col-md-4 offset-md-1">
            <h1 style={{color: '#232323', fontSize: '50px'}}> <b>Join the world's <br/> biggest Blog <br/>related network! </b></h1>
            <p className="text-secondary">We are providing blog related posting for make your life easier.</p>
            <button style={{ height: '60px', width: '200px' }}  className="btn btn-outline-success rounded-pill" id="#blogs"><b>Explore Blogs</b></button>
        </div>
        <div className="col-md-6 ms-auto">
            <img style={{borderRadius: '70px'}} src={blog} alt="" className="img-fluid w-75 "/>
        </div>
    </main>
    );
};

export default HeaderMain;