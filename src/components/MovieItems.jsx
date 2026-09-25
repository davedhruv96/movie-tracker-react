import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MovieItems() {
  const [movieData, setMovieData] = useState([]);
  const [tvData, setTvData] = useState([]);
  const [movieTab, setMovieTab] = useState("popular");
  const [tvTab, setTvTab] = useState("popular");
  const [celebData, setCelebData] = useState([]);

  let prevTab = "popular";

  const apiUrl = "https://api.themoviedb.org/3/";
  const apiCelebUrl = "https://api.themoviedb.org/3/person/popular";

  useEffect(() => {
    fetch(apiUrl + "tv/" + tvTab, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + import.meta.env.VITE_TOKEN,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setTvData(res.results));
  }, [tvTab]);

  useEffect(() => {
    fetch(apiUrl + "movie/" + movieTab, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + import.meta.env.VITE_TOKEN,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setMovieData(res.results));
  }, [movieTab]);

  useEffect(() => {
    fetch(apiCelebUrl, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + import.meta.env.VITE_TOKEN,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setCelebData(res.results));
  }, []);

  return (
    <div className="movie-items">
      <div className="container">
        <div className="row ipad-width">
          <div className="col-md-8">
            <div className="title-hd">
              <h2>in theater</h2>
              <a href="#" className="viewall">
                View all <i className="ion-ios-arrow-right"></i>
              </a>
            </div>
            <div className="tabs">
              <ul className="button-links">
                <li className="button-tab">
                  <button
                    onClick={() => {
                      setMovieTab("popular");
                    }}
                    className={`btn ${movieTab == "popular" ? "active" : ""}`}
                  >
                    #POPULAR
                  </button>
                </li>
                <li className="button-tab">
                  <button
                    onClick={() => {
                      setMovieTab("upcoming");
                    }}
                    className={`btn ${movieTab == "upcoming" ? "active" : ""}`}
                  >
                    #COMING SOON
                  </button>
                </li>
                <li className="button-tab">
                  <button
                    onClick={() => {
                      setMovieTab("top_rated");
                    }}
                    className={`btn ${movieTab == "top_rated" ? "active" : ""}`}
                  >
                    #TOP RATED
                  </button>
                </li>
                <li className="button-tab">
                  <button
                    onClick={() => {
                      setMovieTab("now_playing");
                    }}
                    className={`btn ${movieTab == "now_playing" ? "active" : ""}`}
                  >
                    #NOW PLAYING
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                <div id="tab1" className="tab active">
                  <div className="row">
                    <div className="slick-multiItem">
                      {movieData.map((mov) => {
                        return (
                          <Link to={"/movie/" + mov.id}>
                            <div className="slide-it">
                              <div className="movie-item">
                                <div className="mv-img">
                                  <img
                                    src={
                                      "https://image.tmdb.org/t/p/w342/" +
                                      mov.poster_path
                                    }
                                    alt=""
                                    width="185"
                                    height="284"
                                  />
                                </div>
                                <div className="hvr-inner">
                                  <Link to={"/movie/" + mov.id}>
                                    {" "}
                                    Read more{" "}
                                    <i className="ion-android-arrow-dropright"></i>{" "}
                                  </Link>
                                </div>
                                <div className="title-in">
                                  <h6>
                                    <a href="#">{mov.title}</a>
                                  </h6>
                                  <p>
                                    <i className="ion-android-star"></i>
                                    <span>
                                      {Math.round(mov.vote_average)}
                                    </span>{" "}
                                    /10
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div id="tab2" className="tab">
                  <div className="row">
                    <div className="slick-multiItem">
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img
                              src="images/uploads/mv-item5.jpg"
                              alt=""
                              width="185"
                              height="284"
                            />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">Interstellar</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img
                              src="images/uploads/mv-item6.jpg"
                              alt=""
                              width="185"
                              height="284"
                            />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">The revenant</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img
                              src="images/uploads/mv-item7.jpg"
                              alt=""
                              width="185"
                              height="284"
                            />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">Die hard</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img
                              src="images/uploads/mv-item8.jpg"
                              alt=""
                              width="185"
                              height="284"
                            />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">The walk</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img
                              src="images/uploads/mv-item3.jpg"
                              alt=""
                              width="185"
                              height="284"
                            />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">Die hard</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab3" className="tab">
                  <div className="row">
                    <div className="slick-multiItem">
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img
                              src="images/uploads/mv-item1.jpg"
                              alt=""
                              width="185"
                              height="284"
                            />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">Interstellar</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img
                              src="images/uploads/mv-item2.jpg"
                              alt=""
                              width="185"
                              height="284"
                            />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">The revenant</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img
                              src="images/uploads/mv-item3.jpg"
                              alt=""
                              width="185"
                              height="284"
                            />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">Die hard</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img src="images/uploads/mv-item4.jpg" alt="" />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">The walk</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img
                              src="images/uploads/mv-item3.jpg"
                              alt=""
                              width="185"
                              height="284"
                            />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">Die hard</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab4" className="tab">
                  <div className="row">
                    <div className="slick-multiItem">
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img
                              src="images/uploads/mv-item5.jpg"
                              alt=""
                              width="185"
                              height="284"
                            />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">Interstellar</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img
                              src="images/uploads/mv-item6.jpg"
                              alt=""
                              width="185"
                              height="284"
                            />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">The revenant</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img
                              src="images/uploads/mv-item7.jpg"
                              alt=""
                              width="185"
                              height="284"
                            />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">Die hard</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img
                              src="images/uploads/mv-item8.jpg"
                              alt=""
                              width="185"
                              height="284"
                            />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">The walk</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img
                              src="images/uploads/mv-item3.jpg"
                              alt=""
                              width="185"
                              height="284"
                            />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">Die hard</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="title-hd">
              <h2>on tv</h2>
              <a href="#" className="viewall">
                View all <i className="ion-ios-arrow-right"></i>
              </a>
            </div>
            <div className="tabs">
              <ul className="button-links">
                <li className="active button-tab">
                  <button
                    id="popular"
                    onClick={() => {
                      setTvTab("popular");
                    }}
                    className={`btn ${tvTab == "popular" ? "active" : ""}`}
                  >
                    #POPULAR
                  </button>
                </li>
                <li className="button-tab">
                  <button
                    id="airing_today"
                    onClick={() => {
                      setTvTab("airing_today");
                    }}
                    className={`btn ${tvTab == "airing_today" ? "active" : ""}`}
                  >
                    #AIRING TODAY
                  </button>
                </li>
                <li className="button-tab">
                  <button
                    id="top_rated"
                    onClick={() => {
                      setTvTab("top_rated");
                    }}
                    className={`btn ${tvTab == "top_rated" ? "active" : ""}`}
                  >
                    #TOP RATED
                  </button>
                </li>
                <li className="button-tab">
                  <button
                    id="on_the_air"
                    onClick={() => {
                      setTvTab("on_the_air");
                    }}
                    className={`btn ${tvTab == "on_the_air" ? "active" : ""}`}
                  >
                    #ON THE AIR
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                <div id="tab21" className="tab">
                  <div className="row">
                    {/* <div className="slick-multiItem">
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img
                              src="images/uploads/mv-item1.jpg"
                              alt=""
                              width="185"
                              height="284"
                            />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">Interstellar</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img
                              src="images/uploads/mv-item2.jpg"
                              alt=""
                              width="185"
                              height="284"
                            />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">The revenant</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img
                              src="images/uploads/mv-item3.jpg"
                              alt=""
                              width="185"
                              height="284"
                            />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">Die hard</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img src="images/uploads/mv-item4.jpg" alt="" />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">The walk</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img
                              src="images/uploads/mv-item3.jpg"
                              alt=""
                              width="185"
                              height="284"
                            />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">Die hard</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div id="tab22" className="tab active">
                  <div className="row">
                    <div className="slick-multiItem">
                      {tvData.map((tv) => {
                        return (
                          <Link to={"/tv/" + tv.id}>
                            <div className="slide-it">
                              <div className="movie-item">
                                <div className="mv-img">
                                  <img
                                    src={
                                      "https://image.tmdb.org/t/p/w342/" +
                                      tv.poster_path
                                    }
                                    alt=""
                                    width="185"
                                    height="284"
                                  />
                                </div>
                                <div className="hvr-inner">
                                  <a>
                                    {" "}
                                    Read more{" "}
                                    <i className="ion-android-arrow-dropright"></i>{" "}
                                  </a>
                                </div>
                                <div className="title-in">
                                  <h6>
                                    <span href="#">{tv.name}</span>
                                  </h6>
                                  <p>
                                    <i className="ion-android-star"></i>
                                    <span>
                                      {Math.round(tv.vote_average)}
                                    </span>{" "}
                                    /10
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div id="tab23" className="tab">
                  <div className="row">
                    <div className="slick-multiItem">
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img
                              src="images/uploads/mv-item1.jpg"
                              alt=""
                              width="185"
                              height="284"
                            />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">Interstellar</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img
                              src="images/uploads/mv-item2.jpg"
                              alt=""
                              width="185"
                              height="284"
                            />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">The revenant</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img
                              src="images/uploads/mv-item3.jpg"
                              alt=""
                              width="185"
                              height="284"
                            />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">Die hard</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img src="images/uploads/mv-item4.jpg" alt="" />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">The walk</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img
                              src="images/uploads/mv-item5.jpg"
                              alt=""
                              width="185"
                              height="284"
                            />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">Interstellar</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img
                              src="images/uploads/mv-item6.jpg"
                              alt=""
                              width="185"
                              height="284"
                            />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">The revenant</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img
                              src="images/uploads/mv-item7.jpg"
                              alt=""
                              width="185"
                              height="284"
                            />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">Die hard</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img
                              src="images/uploads/mv-item8.jpg"
                              alt=""
                              width="185"
                              height="284"
                            />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">The walk</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img
                              src="images/uploads/mv-item3.jpg"
                              alt=""
                              width="185"
                              height="284"
                            />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">Die hard</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab24" className="tab">
                  <div className="row">
                    <div className="slick-multiItem">
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img
                              src="images/uploads/mv-item5.jpg"
                              alt=""
                              width="185"
                              height="284"
                            />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">Interstellar</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img
                              src="images/uploads/mv-item6.jpg"
                              alt=""
                              width="185"
                              height="284"
                            />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">The revenant</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img
                              src="images/uploads/mv-item7.jpg"
                              alt=""
                              width="185"
                              height="284"
                            />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">Die hard</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img
                              src="images/uploads/mv-item8.jpg"
                              alt=""
                              width="185"
                              height="284"
                            />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">The walk</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="slide-it">
                        <div className="movie-item">
                          <div className="mv-img">
                            <img
                              src="images/uploads/mv-item3.jpg"
                              alt=""
                              width="185"
                              height="284"
                            />
                          </div>
                          <div className="hvr-inner">
                            <Link to="movie-details">
                              {" "}
                              Read more{" "}
                              <i className="ion-android-arrow-dropright"></i>{" "}
                            </Link>
                          </div>
                          <div className="title-in">
                            <h6>
                              <Link to="movie-details">Die hard</Link>
                            </h6>
                            <p>
                              <i className="ion-android-star"></i>
                              <span>7.4</span> /10
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="sidebar">
              <div className="ads">
                <img src="images/uploads/ads1.png" alt="" />
              </div>
              <div className="celebrities">
                <h4 className="sb-title">Spotlight Celebrities</h4>
                {celebData.map((celeb, id) => {
                  if(id > 4){
                    return;
                  }
                  return (
                    <div className="celeb-item">
                        <img src={
                            "https://image.tmdb.org/t/p/w342/" + celeb.profile_path
                          } alt="" style={{width: "100px"}}/>
                      <div className="celeb-author">
                        <h6>
                          <a href="#">{celeb.name}</a>
                        </h6>
                        <span>{celeb.gender == 2?"Actor": "Actress"}</span>
                      </div>
                    </div>
                  );
                })}
                <a href="#" className="btn">
                  See all celebrities<i className="ion-ios-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieItems;
