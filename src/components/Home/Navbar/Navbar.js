import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="row">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand ms-5 ps-3" href="#"><h2>Retro <span style={{color: 'lightCoral'}}>Read</span></h2></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto m-3 p-2">
                            <a class="nav-link active me-4" aria-current="page" href="#">Home</a>
                            <a class="nav-link me-3" href="#"><Link className="text-dark me-4 text-decoration-none" to="/dashboard" >
                                <span>Dashboard</span>
                            </Link></a>
                            <a class="nav-link me-5 text-dark" href="#blogs">Blogs</a>
                            {loggedInUser.email ? loggedInUser.name : <a class="nav-link  me-5 btn-primary text-white rounded-pill" href="/login">Login</a>}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;