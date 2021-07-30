import logo from "./logo.svg";
import "./App.css";
import React from "react";
// import ".../node-modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <React.Fragment>
      <h1 className="text-center p-5 my-2 ">WELCOME TO BLOOD SOURCE</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <div class="card">
              <img
                src="https://wallpapersafari.com/w/ElmY2I"
                class="card-img-top"
                alt="..."
                height="200px"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img
                src="https://wallpapersafari.com/w/vhEG84"
                class="card-img-top"
                alt="..."
                height="200px"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img
                src="https://wallpapersafari.com/w/8MjY5C"
                class="card-img-top"
                alt="..."
                height="200px"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default App;