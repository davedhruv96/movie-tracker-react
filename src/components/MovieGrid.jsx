import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function MovieGrid() {

  const [data, setData] = useState({});
  const [query, setQuery] = useState("");
  const [currentPageNum, setPageNum] = useState(1);

  const apiPopularUrl = `https://api.themoviedb.org/3/movie/popular`;
  const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${query}&page=${currentPageNum}`;

  useEffect(() => {
    let url = query != ""? apiUrl : apiPopularUrl;
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + import.meta.env.VITE_TOKEN,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [query]);

  return (
    <>
      <div className="hero common-hero">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-ct">
                <h1> movie listing - grid</h1>
                <ul className="breadcumb">
                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    {" "}
                    <span className="ion-ios-arrow-right"></span> movie listing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-single">
        <div className="container">
          <div className="row ipad-width">
            <div className="col-md-8 col-sm-12 col-xs-12">
              <div className="topbar-filter">
                <p>
                  Found <span>{data.total_results} movies</span> in total
                </p>
                <label>Sort by:</label>
                <select>
                  <option value="popularity">Popularity Descending</option>
                  <option value="popularity">Popularity Ascending</option>
                  <option value="rating">Rating Descending</option>
                  <option value="rating">Rating Ascending</option>
                  <option value="date">Release date Descending</option>
                  <option value="date">Release date Ascending</option>
                </select>
                <a href="movielist.html" className="list">
                  <i className="ion-ios-list-outline "></i>
                </a>
                <a href="moviegrid.html" className="grid">
                  <i className="ion-grid active"></i>
                </a>
              </div>
              <div className="flex-wrap-movielist">
                {data.results?.map((mov) => {
                  return (
                    <Link to={"/movie/" + mov.id}>
                      <div className="movie-item-style-2 movie-item-style-1">
                        <img
                          src={
                            "https://image.tmdb.org/t/p/w342/" + mov.poster_path
                          }
                          alt=""
                        />
                        <div className="hvr-inner">
                          <a href="moviesingle.html">
                            {" "}
                            Read more{" "}
                            <i className="ion-android-arrow-dropright"></i>{" "}
                          </a>
                        </div>
                        <div className="mv-item-infor">
                          <h6>
                            <a href="#">{mov.title}</a>
                          </h6>
                          <p className="rate">
                            <i className="ion-android-star"></i>
                            <span>{Math.round(mov.vote_average)}</span> /10
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="topbar-filter">
                <label>Movies per page:</label>
                <select>
                  <option value="range">20 Movies</option>
                  <option value="saab">10 Movies</option>
                </select>

                <div className="pagination2">
                  <span>Page 1 of 2:</span>
                  <a className="active" href="#">
                    1
                  </a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#">...</a>
                  <a href="#">78</a>
                  <a href="#">79</a>
                  <a href="#">
                    <i className="ion-arrow-right-b"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="sidebar">
                <div className="searh-form">
                  <h4 className="sb-title">Search for movie</h4>
                  <form className="form-style-1" action="#">
                    <div className="row">
                      <div className="col-md-12 form-it">
                        <label>Movie name</label>
                        <input onChange={(e)=>{
                          setTimeout(()=>{setQuery(e.target.value);}, 500);
                        }} type="text" placeholder="Enter keywords" />
                      </div>
                      <div className="col-md-12 form-it">
                        <label>Genres & Subgenres</label>
                        <div className="group-ip">
                          <select
                            name="skills"
                            multiple=""
                            className="ui fluid dropdown"
                          >
                            <option value="">Enter to filter genres</option>
                            <option value="Action1">Action 1</option>
                            <option value="Action2">Action 2</option>
                            <option value="Action3">Action 3</option>
                            <option value="Action4">Action 4</option>
                            <option value="Action5">Action 5</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12 form-it">
                        <label>Rating Range</label>
                        <select>
                          <option value="range">
                            -- Select the rating range below --
                          </option>
                          <option value="saab">
                            -- Select the rating range below --
                          </option>
                        </select>
                      </div>
                      <div className="col-md-12 form-it">
                        <label>Release Year</label>
                        <div className="row">
                          <div className="col-md-6">
                            <select>
                              <option value="range">From</option>
                              <option value="number">10</option>
                            </select>
                          </div>
                          <div className="col-md-6">
                            <select>
                              <option value="range">To</option>
                              <option value="number">20</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 ">
                        <input
                          className="submit"
                          type="submit"
                          value="submit"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="ads">
                  <img src="images/uploads/ads1.png" alt="" />
                </div>
                <div className="sb-facebook sb-it">
                  <h4 className="sb-title">Find us on Facebook</h4>
                  <iframe
                    src="#"
                    data-src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftemplatespoint.net%2F%3Ffref%3Dts&tabs=timeline&width=340&height=315px&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"
                    height="315"
                  ></iframe>
                </div>
                <div className="sb-twitter sb-it">
                  <h4 className="sb-title">Tweet to us</h4>
                  <div className="slick-tw">
                    <div className="tweet item" id=""></div>
                    <div className="tweet item" id=""></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieGrid;
