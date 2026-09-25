import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="ht-header">
      <div className="container">
        <nav id="mainNav" className="navbar navbar-default navbar-custom">
          <div className="navbar-header logo">
            <div
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <div id="nav-icon1">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <Link to="/">
              <img
                className="logo"
                src="images/logo1.png"
                alt=""
                width="119"
                height="58"
              />
            </Link>
          </div>

          <div
            className="collapse navbar-collapse flex-parent"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav flex-child-menu menu-left">
              <li className="hidden">
                <a href="#page-top"></a>
              </li>
              <li className="dropdown first">
                <Link
                  to="movie-grid/"
                  className="btn btn-default dropdown-toggle lv1"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                >
                  movies
                </Link>
                {/* <ul className="dropdown-menu level1">
                  <li className="dropdown">
                    <a href="#">
                      about us{" "}
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                    </a>
                    <ul className="dropdown-menu level2">
                      <li>
                        <a href="aboutv1.html">About Us 01</a>
                      </li>
                      <li>
                        <a href="aboutv2.html">About Us 02</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="movie-grid">Movie grid</Link>
                  </li>
                  <li>
                    <a href="moviegridfw.html">movie grid full width</a>
                  </li>
                  <li>
                    <a href="movielist.html">Movie list</a>
                  </li>
                  <li className="it-last">
                    <a href="moviesingle.html">Movie single</a>
                  </li>
                </ul> */}
              </li>
              {/* <li className="dropdown first">
                <a
                  className="btn btn-default dropdown-toggle lv1"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                >
                  celebrities{" "}
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                </a>
                <ul className="dropdown-menu level1">
                  <li>
                    <a href="celebritygrid01.html">celebrity grid 01</a>
                  </li>
                  <li>
                    <a href="celebritygrid02.html">celebrity grid 02 </a>
                  </li>
                  <li>
                    <a href="celebritylist.html">celebrity list</a>
                  </li>
                  <li className="it-last">
                    <a href="celebritysingle.html">celebrity single</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown first">
                <a
                  className="btn btn-default dropdown-toggle lv1"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                >
                  news <i className="fa fa-angle-down" aria-hidden="true"></i>
                </a>
                <ul className="dropdown-menu level1">
                  <li>
                    <a href="bloglist.html">blog List</a>
                  </li>
                  <li>
                    <a href="bloggrid.html">blog Grid</a>
                  </li>
                  <li className="it-last">
                    <a href="blogdetail.html">blog Detail</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown first">
                <a
                  className="btn btn-default dropdown-toggle lv1"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                >
                  community{" "}
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                </a>
                <ul className="dropdown-menu level1">
                  <li>
                    <a href="userfavoritegrid.html">user favorite grid</a>
                  </li>
                  <li>
                    <a href="userfavoritelist.html">user favorite list</a>
                  </li>
                  <li>
                    <a href="userprofile.html">user profile</a>
                  </li>
                  <li className="it-last">
                    <a href="userrate.html">user rate</a>
                  </li>
                </ul>
              </li> */}
            </ul>
            {/* <ul className="nav navbar-nav flex-child-menu menu-right">
              <li className="dropdown first">
                <a
                  className="btn btn-default dropdown-toggle lv1"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                >
                  pages <i className="fa fa-angle-down" aria-hidden="true"></i>
                </a>
                <ul className="dropdown-menu level1">
                  <li>
                    <a href="landing.html">Landing</a>
                  </li>
                  <li>
                    <a href="404.html">404 Page</a>
                  </li>
                  <li className="it-last">
                    <a href="comingsoon.html">Coming soon</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li className="loginLink">
                <a href="#">LOG In</a>
              </li>
              <li className="btn signupLink">
                <a href="#">sign up</a>
              </li>
            </ul> */}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
