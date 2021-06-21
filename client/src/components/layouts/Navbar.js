import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import '../../App.css';


const Navbar = () => {
    return (
        <NavbarContainer>
            <nav className="navbar navbar-expand-lg navbar-light px-5 py-0">
                <Link className="navbar-brand" to="/">
                    Navbar
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">
                                Home <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/add-article'>
                                Sheet Music
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/photogallery'>
                                Photo Gallery
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </NavbarContainer>    
    )
}

export default Navbar;

//main navbar container

const NavbarContainer = styled.div`
    background: #344;
    .nav-link {
        &:hover {
            background: var(--light-green);
        }
    }
`;