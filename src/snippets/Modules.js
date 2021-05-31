import { useState, useEffect } from "react";
import Header from "./Header";
import "../css/All.css";
import "../css/Modules.css";
import BrilliantModuleJoseph from "../images/Brilliant-ModuleJoseph.png";
import BrilliantModuleKevin from "../images/Brilliant-ModuleKevin.png";
import BrilliantModuleNicholas from "../images/Brilliant-ModuleNicholas.png";
import BrilliantModuleItIsKaylee from "../images/Brilliant-ModuleItIsKaylee.png";
import BrilliantModuleInfo from "../images/Brilliant-ModuleInfo.png";
import BrilliantModuleAce from "../images/Brilliant-ModuleAce.png";
import BrilliantModuleKing from "../images/Brilliant-ModuleKing.png";
import BrilliantModuleQueen from "../images/Brilliant-ModuleQueen.png";
import BrilliantModuleJack from "../images/Brilliant-ModuleJack.png";
import BrilliantModuleBlake from "../images/Brilliant-ModuleBlake.png";
import BrilliantModulePyrrha from "../images/Brilliant-ModulePyrrha.png";
import BrilliantModuleRuby from "../images/Brilliant-ModuleRuby.png";
import BrilliantModuleWeiss from "../images/Brilliant-ModuleWeiss.png";
import BrilliantModuleYang from "../images/Brilliant-ModuleYang.png";

let levels = [
  {
    type: "drag-and-drop",
    text: "Joseph, Kevin, and Nicholas are 3 brothers, and the following statements about them are all true: <ul><li>Joseph is not the youngest.</li><li>Kevin is the oldest. </li><li>Nicholas is not the oldest.</li></ul>",
    options: [
      {
        imgsrc: BrilliantModuleJoseph,
        optionname: "Joseph",
        helpername: "Youngest",
      },
      { imgsrc: BrilliantModuleKevin, optionname: "Kevin" },
      {
        imgsrc: BrilliantModuleNicholas,
        optionname: "Nicholas",
        helpername: "Oldest",
      },
    ],
  },
  {
    type: "select",
    text: "<img class='mb-4' id=imgsrc width='480px' /> <br/> One of the women above is named Kaylee and the other is named Inara. They each make a statement about who they are as shown. <br /> <br />We know that at least one of them is lying. What color is Inara's dress?",
    options: [
      {
        optionname: "Black",
      },
      { optionname: "White" },
      {
        optionname: "There isn't enough information to be certain.",
      },
    ],
  },
  {
    type: "info",
    text: "<img class='mb-4' id=imgsrc width='480px' /> <br/> The next three problems gradually increase in difficulty, and all of them are more challenging than the warm-ups you just solved. <br /><br /> It's worth the effort. The most effective learning experiences are often those times when you get a problem wrong, and then challenge yourself to read, understand, and learn from the solution.",
  },
  {
    type: "drag-and-drop",
    text: "Arrange the cards to make the following true:<ul><li>The king is in one of the two middle spaces.</li><li>The queen is left of the jack and right of the ace.</li><li>The ace is directly next to the queen.</li></ul> <br />(Note: Left and right are from the player's perspective).",
    options: [
      {
        imgsrc: BrilliantModuleAce,
        optionname: "Ace",
        helpername: "1",
      },
      {
        imgsrc: BrilliantModuleKing,
        optionname: "King",
        helpername: "2",
      },
      {
        imgsrc: BrilliantModuleQueen,
        optionname: "Queen",
        helpername: "3",
      },
      {
        imgsrc: BrilliantModuleJack,
        optionname: "Jack",
        helpername: "4",
      },
    ],
  },
  {
    type: "drag-and-drop",
    text: "Five friends competed in a race. <ul><li>Pyrrha finished faster than Blake.</li><li>The smallest difference in finishing times was between Pyrrha and Ruby.</li><li>The largest difference in finishing times was between Ruby and Weiss.</li><li>Pyrrha finished faster than Blake.</li><li>Yang finished either 1st or 3rd.</li></ul>",
    options: [
      {
        imgsrc: BrilliantModuleBlake,
        optionname: "Blake",
        helpername: "1st",
      },
      {
        imgsrc: BrilliantModulePyrrha,
        optionname: "Pyrrha",
        helpername: "2nd",
      },
      {
        imgsrc: BrilliantModuleRuby,
        optionname: "Ruby",
        helpername: "3rd",
      },
      {
        imgsrc: BrilliantModuleWeiss,
        optionname: "Weiss",
        helpername: "4th",
      },
      {
        imgsrc: BrilliantModuleYang,
        optionname: "Yang",
        helpername: "5th",
      },
    ],
  },
  {
    type: "select",
    text: "<ul><li>There is exactly 111 false statement in this list.</li><li>There are exactly 222 false statements in this list.</li><li>There are exactly 333 false statements in this list.</li></ul>How many false statements are there in the list above?",
    options: [
      {
        optionname: "0",
      },
      { optionname: "1" },
      {
        optionname: "2",
      },
      {
        optionname: "3",
      },
    ],
  },
];

function DragandDrop(props) {
  return (
    <>
      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <p>Drag the characters into the dotted boxes.</p>
        <a href="/">Reset</a>
      </div>
      <div className="d-flex" style={{ justifyContent: "space-evenly" }}>
        {props.options.map(({ helpername }) => {
          return <div className="DashedBorderAnswer">{helpername}</div>;
        })}
      </div>
      <div className="d-flex" style={{ justifyContent: "space-evenly" }}>
        {props.options.map(({ imgsrc, optionname }) => {
          return (
            <div draggable="true">
              <p className="mt-5 text-center">{optionname}</p>
              <img src={imgsrc} alt="" width="150px" height="150px" />
            </div>
          );
        })}
      </div>
      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <button className="btn btn-primary" type="button">
          Show Explanation
        </button>
        <button className="btn btn-secondary" type="submit">
          Submit
        </button>
      </div>
    </>
  );
}

function Modules() {
  let [level, setLevel] = useState(0);
  let [questionType, setQuestionType] = useState();
  useEffect(() => {
    for (let i = 0; i < 6; i++) {
      document.getElementsByClassName("BoxNavBox")[i].style.backgroundColor =
        "#f0f0f0";
    }
    document.getElementsByClassName("BoxNavBox")[level].style.backgroundColor =
      "orange";
    if (levels[level].type === "drag-and-drop") {
      setQuestionType(
        <>
          <div id="MainText"></div>
          <DragandDrop options={levels[level].options} />
        </>
      );
      setTimeout(() => {
        document.getElementById("MainText").innerHTML = levels[level].text;
      }, 0);
    } else if (levels[level].type === "select") {
      setQuestionType(
        <>
          <div id="MainText"></div>
        </>
      );
      setTimeout(() => {
        document.getElementById("MainText").innerHTML = levels[level].text;
        document.getElementById("imgsrc").src = BrilliantModuleItIsKaylee;
      }, 0);
    } else if (levels[level].type === "info") {
      setQuestionType(
        <>
          <div id="MainText"></div>
        </>
      );
      setTimeout(() => {
        document.getElementById("MainText").innerHTML = levels[level].text;
        document.getElementById("imgsrc").src = BrilliantModuleInfo;
      }, 0);
    }
  }, [level]);
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="LeftNav col-md-2">
            <nav class="nav flex-column">
              <a class="nav-link" href="/">
                &lt; Back
              </a>
              <a class="nav-link active" href="/">
                Logic
              </a>
            </nav>
          </div>
          <div className="MiddleMain col-12 col-md-7">{questionType}</div>
          <div className="RightNav col-md-3">
            <a href="/">Lesson 1</a>
            <h5>Warmup Puzzles</h5>
            <div id="BoxNav" className="d-flex">
              <div>
                <a
                  href="/"
                  onClick={() => {
                    level >= 1 ? setLevel(level - 1) : setLevel(0);
                  }}
                >
                  &lt;
                </a>
              </div>
              <div className="BoxNavBox" onClick={() => setLevel(0)}></div>
              <div className="BoxNavBox" onClick={() => setLevel(1)}></div>
              <div className="BoxNavBox" onClick={() => setLevel(2)}></div>
              <div className="BoxNavBox" onClick={() => setLevel(3)}></div>
              <div className="BoxNavBox" onClick={() => setLevel(4)}></div>
              <div className="BoxNavBox" onClick={() => setLevel(5)}></div>
              <div>
                <a href="/" onClick={() => {}}>
                  &gt;
                </a>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modules;
