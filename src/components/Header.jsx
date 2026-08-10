import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header class="ht-header">
            <div class="container">
                <nav id="mainNav" class="navbar navbar-default navbar-custom">
                    
                    <div class="navbar-header logo">
                        <div class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span class="sr-only">Toggle navigation</span>
                            <div id="nav-icon1">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <Link to="/"><img class="logo" src="images/logo1.png" alt="" width="119" height="58" /></Link>
                    </div>
                    
                    <div class="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav flex-child-menu menu-left">
                            <li class="hidden">
                                <a href="#page-top"></a>
                            </li>
                            <li class="dropdown first">
                                <a class="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                                    movies<i class="fa fa-angle-down" aria-hidden="true"></i>
                                </a>
                                <ul class="dropdown-menu level1">
                                    <li class="dropdown">
                                        <a href="#">about us <i class="fa fa-caret-right" aria-hidden="true"></i></a>
                                        <ul class="dropdown-menu level2">
                                            <li><a href="aboutv1.html">About Us 01</a></li>
                                            <li><a href="aboutv2.html">About Us 02</a></li>
                                        </ul>
                                    </li>
                                    <li><Link to="movie-grid">Movie grid</Link></li>
                                    <li><a href="moviegridfw.html">movie grid full width</a></li>
                                    <li><a href="movielist.html">Movie list</a></li>
                                    <li class="it-last"><a href="moviesingle.html">Movie single</a></li>
                                </ul>
                            </li>
                            <li class="dropdown first">
                                <a class="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                                    celebrities <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </a>
                                <ul class="dropdown-menu level1">
                                    <li><a href="celebritygrid01.html">celebrity grid 01</a></li>
                                    <li><a href="celebritygrid02.html">celebrity grid 02 </a></li>
                                    <li><a href="celebritylist.html">celebrity list</a></li>
                                    <li class="it-last"><a href="celebritysingle.html">celebrity single</a></li>
                                </ul>
                            </li>
                            <li class="dropdown first">
                                <a class="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                                    news <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </a>
                                <ul class="dropdown-menu level1">
                                    <li><a href="bloglist.html">blog List</a></li>
                                    <li><a href="bloggrid.html">blog Grid</a></li>
                                    <li class="it-last"><a href="blogdetail.html">blog Detail</a></li>
                                </ul>
                            </li>
                            <li class="dropdown first">
                                <a class="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                                    community <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </a>
                                <ul class="dropdown-menu level1">
                                    <li><a href="userfavoritegrid.html">user favorite grid</a></li>
                                    <li><a href="userfavoritelist.html">user favorite list</a></li>
                                    <li><a href="userprofile.html">user profile</a></li>
                                    <li class="it-last"><a href="userrate.html">user rate</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul class="nav navbar-nav flex-child-menu menu-right">
                            <li class="dropdown first">
                                <a class="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                                    pages <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </a>
                                <ul class="dropdown-menu level1">
                                    <li><a href="landing.html">Landing</a></li>
                                    <li><a href="404.html">404 Page</a></li>
                                    <li class="it-last"><a href="comingsoon.html">Coming soon</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Help</a></li>
                            <li class="loginLink"><a href="#">LOG In</a></li>
                            <li class="btn signupLink"><a href="#">sign up</a></li>
                        </ul>
                    </div>
                    
                </nav>
            </div>
        </header>
    )
}

export default Header
