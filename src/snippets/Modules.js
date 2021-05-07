import Header from "./Header";
import "../css/All.css";
import "../css/Modules.css";

function Modules() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="LeftNav col-md-2">
            <nav class="nav flex-column">
              <a class="nav-link" href="">
                &lt; Back
              </a>
              <a class="nav-link active" href="">
                Logic
              </a>
            </nav>
          </div>
          <div className="MiddleMain col-12 col-md-7">
            <p>
              Joseph, Kevin, and Nicholas are 3 brothers, and the following
              statements about them are all true:
              <ul>
                <li>Joseph is not the youngest.</li>
                <li>Kevin is the oldest. </li>
                <li>Nicholas is not the oldest.</li>
              </ul>
            </p>
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <p>Drag the characters into the dotted boxes.</p>
              <a href="">Reset</a>
            </div>
            <div className="d-flex" style={{ justifyContent: "space-evenly" }}>
              <div className="DashedBorderAnswer">Youngest</div>
              <div className="DashedBorderAnswer"></div>
              <div className="DashedBorderAnswer">Oldest</div>
            </div>
          </div>
          <div className="RightNav col-md-3">
            <a href="">Lesson 1</a>
            <h5>Warmup Puzzles</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modules;
