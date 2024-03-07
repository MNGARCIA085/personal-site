import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../App.css";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        
        <Link to="/" className="navbar-brand fs-3 ubuntu">
          JUST ANOTHER PERSONAL SITE
        </Link>
        
        <style jsx>{`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;
          }
        `}</style>
        
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fas fa-bars open text-dark"></span>
          <span class="fas fa-times close text-dark"></span>
        </button>
        
        
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup">

          <div className="navbar-nav fs-5">
            
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            
            <NavLink to="/courses" className="nav-link">
              Certifications
            </NavLink>

            <NavLink to="/tutorials" className="nav-link">
              Tutorials
            </NavLink>

            <NavLink to="/projects" className="nav-link">
              Projects
            </NavLink>

            <NavLink to="/about" className="nav-link">
                About Me
            </NavLink>



              {/*
               <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink to="/projects" className="nav-link">
                    Learning
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/projects" className="nav-link">
                    Templates
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/projects" className="nav-link">
                    Personal Interest
                  </NavLink>
                </NavDropdown.Item>
          </NavDropdown>
              
        */}
              



          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;