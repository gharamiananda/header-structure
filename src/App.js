import './App.css';
import logo from '../src/icare.png';
import PreLoader1 from './components/PreLoader1';
import { useEffect, useState } from 'react';
import ReactLoading from "react-loading";


function App() {
  const [data, setData] = useState([]);
  const [done, setDone] = useState(undefined);

  // useEffect(() => {
  //   setTimeout(() => {
  //     // fetch("https://jsonplaceholder.typicode.com/posts")
  //     //   .then((response) => response.json())
  //     //   .then((json) => {
  //     //     console.log(json);
  //         // setData(json);
  //         setDone(true);
  //       });
  //   }, 2000);
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      setDone(true);

    }, 2000)
  }, [])

  return (
    <div className="">

      {!done ? (
        <ReactLoading
          type={"bars"}
          color={"#03fc4e"}
          height={100}
          width={100}
        />
      ) : (
        // <ul>
        //   {data.map((post) => (
        //     <li key={post.id}>{post.title}</li>
        //   ))}
        // </ul>

        <header className="header">
          <div className="middle__header">
            <nav class="navbar navbar-expand-md bg-light">
              <div class="container">
                <a class="navbar-brand" href="#">
                  <img src={logo} alt="" />
                </a>
                {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button> */}
                <div class="collapse navbar-collapse" id="navbarSupportedContenttt">
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Link</a>
                    </li>


                  </ul>

                </div>




                <div class="offcanvas offcanvas-start d-block d-md-none" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                  <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body">
                    <div>
                      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                    </div>
                    <div class="dropdown mt-3">
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                        Dropdown button
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <nav class="navbar navbar-expand-md bg-light">
            <div class="container">
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                  </li>
                </ul>

              </div>

              <button class="btn btn-outline-success" type="submit">Search</button>
            </div>
          </nav>

        </header>

      )}



    </div>
  );
}

export default App;
