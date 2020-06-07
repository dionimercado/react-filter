import React, { useState } from "react";
import "./styles.css";

const movies = [
  {
    id: 1,
    name: "Movie One",
    genre: "comedy"
  },
  {
    id: 2,
    name: "Movie Two",
    genre: "comedy"
  },
  {
    id: 3,
    name: "Movie Three",
    genre: "thriller"
  },
  {
    id: 4,
    name: "Movie Four",
    genre: "action"
  },
  {
    id: 5,
    name: "Movie Five",
    genre: "action"
  }
];

export default () => {
  const [data, setData] = useState(movies);

  const filterBy = genre => {
    const filtered = movies.filter(movie => movie.genre === genre);
    if (genre === "all") {
      setData(movies);
    } else {
      setData(filtered);
    }
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="container">
        <div className="d-flex justify-content-center my-5">
          <button
            className="btn btn-light mr-2"
            onClick={() => filterBy("all")}
          >
            All
          </button>
          <button
            className="btn btn-light mr-2"
            onClick={() => filterBy("action")}
          >
            Action
          </button>
          <button
            className="btn btn-light mr-2"
            onClick={() => filterBy("comedy")}
          >
            Commedy
          </button>
        </div>
        <div className="row">
          {data.map(movie => (
            <div className="col-sm-4 mb-4">
              <div className="card shadow">
                <div className="card-body">
                  <h4 className="card-title">{movie.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
