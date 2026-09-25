import React, { useEffect, useState } from "react";

function MovieSlider() {
  const [data, setData] = useState([]);
  const [genres, setGenres] = useState([]);

  const apiUrl = "https://api.themoviedb.org/3/movie/popular";
  const apiUrlGenre = "https://api.themoviedb.org/3/genre/movie/list";

  useEffect(() => {
    fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + import.meta.env.VITE_TOKEN,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res.results));

      fetch(apiUrlGenre, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + import.meta.env.VITE_TOKEN,
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(res => setGenres(res.genres));
  }, []);

  const genre_of = (id) => {
    for(let genre of genres){
      if(genre.id == id){
        return genre.name;
      }
    }
  }

  return (
    <div className="sliderv2 movie-items slider sliderv3">
      <div className="container">
        <div className="row">
          <div className="slider-single-item">
            {data.map((mov) => {
              return (
                <div className="movie-item">
                  <div className="title-in">
                    <div className="cate">
                      <span className="yell">
                        <a href="#">{genre_of(mov?.genre_ids[0])}</a>
                      </span>
                      <span className="orange">
                        <a href="#">{genre_of(mov?.genre_ids[1])}</a>
                      </span>
                    </div>
                    <h1>
                      <a href="#">
                        {mov.title} <span>{(mov.release_date).slice(0, 4)}</span>
                      </a>
                    </h1>
                    <div className="social-btn">
                      <a href="#" className="parent-btn">
                        <i className="ion-play"></i> Watch Trailer
                      </a>
                      <a href="#" className="parent-btn">
                        <i className="ion-heart"></i> Add to Favorite
                      </a>
                      <div className="hover-bnt">
                        <a href="#" className="parent-btn">
                          <i className="ion-android-share-alt"></i>share
                        </a>
                        <div className="hvr-item">
                          <a href="#" className="hvr-grow">
                            <i className="ion-social-facebook"></i>
                          </a>
                          <a href="#" className="hvr-grow">
                            <i className="ion-social-twitter"></i>
                          </a>
                          <a href="#" className="hvr-grow">
                            <i className="ion-social-googleplus"></i>
                          </a>
                          <a href="#" className="hvr-grow">
                            <i className="ion-social-youtube"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="mv-details">
                      <p>
                        <i className="ion-android-star"></i>
                        <span>{Math.round(mov.vote_average)}</span> /10
                      </p>
                      <ul className="mv-infor">
                        <li> Rated: PG-13 </li>
                        <li> Release: {mov.release_date}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieSlider;
