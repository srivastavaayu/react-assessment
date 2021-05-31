import Header from "./Header";
import "../css/All.css";
import "../css/Courses.css";
import Placeholder from "../images/placeholder.png";
import BrilliantCourseIntroduction from "../images/Brilliant-CourseIntroduction.png";
import BrilliantMathematicalFundamentals from "../images/Brilliant-MathematicalFundamentals.png";
import BrilliantComputerScienceFundamentals from "../images/Brilliant-ComputerScienceFundamentals.png";

let chapters = [
  {
    title: "Introduction",
    description: "Put your logic to the test with these warmups!",
    modules: [
      {
        imgsrc: Placeholder,
        title: "Warmup Puzzles",
        description: "Get started with some logic warmups.",
      },
      {
        imgsrc: Placeholder,
        title: "Truth-Seeking",
        description: "Who or what is telling the truth?",
      },
      {
        imgsrc: Placeholder,
        title: "Strategic Deductions",
        description:
          "Stretch the information you're given as far as it can go!",
      },
    ],
  },
  {
    title: "The Rational Detective",
    description: "Eliminate the impossible and uncover the truth!",
    modules: [
      {
        imgsrc: Placeholder,
        title: "Riddles of Order",
        description: "What order do these racers finish in?",
      },
      {
        imgsrc: Placeholder,
        title: "Crafty Counting",
        description:
          "Learn strategies for counting that go far beyond just counting.",
      },
      {
        imgsrc: Placeholder,
        title: "Mystery Containers",
        description: "What's in each of these mystery boxes?",
      },
      {
        imgsrc: Placeholder,
        title: "Futoshiki",
        description: "Arrange the numbers to match the inequalities.",
      },
      {
        imgsrc: Placeholder,
        title: "Shuffles",
        description: "Where did everything get shuffled to?",
      },
      {
        imgsrc: Placeholder,
        title: "False Information",
        description:
          "Solve problems where the people giving you hints might be lying.",
      },
    ],
  },
  {
    title: "Puzzles and Riddles",
    description: "Even trickier puzzles and the tools you need to solve them.",
    modules: [
      {
        imgsrc: Placeholder,
        title: "Werewolves",
        description: "Who's a werewolf?",
      },
      {
        imgsrc: Placeholder,
        title: "Logical Language",
        description: "Explore the logical use of the words and, or, and not.",
      },
      {
        imgsrc: Placeholder,
        title: "If A, then B.",
        description:
          "If you do this quiz, you will learn about sentences like this one.",
      },
      {
        imgsrc: Placeholder,
        title: "Elimination Grids",
        description: "Solve classic logic elimination puzzles.",
      },
      {
        imgsrc: Placeholder,
        title: "Jigsaw Map",
        description: "Where do the pieces go on the map?",
      },
    ],
  },
  {
    title: "Multi-level Thinking",
    description: "If you know that I know that you know... what then?",
    modules: [
      {
        imgsrc: Placeholder,
        title: "Perfect Information",
        description:
          "If everyone follows the same logic, can you find out what they know?",
      },
      {
        imgsrc: Placeholder,
        title: "Hat Colors",
        description:
          "Can you figure out who can figure out the color of their hat?",
      },
      {
        imgsrc: Placeholder,
        title: "Hat Colors with More People",
        description:
          "What happens to hat puzzles when there are more hats and more people?",
      },
      {
        imgsrc: Placeholder,
        title: "Red-Eyed Dragons",
        description:
          "Exactly how much can you learn from no one knowing anything?",
      },
      {
        imgsrc: Placeholder,
        title: "Logical Pirates",
        description:
          "Beware! Every pirate is as logical, greedy, and cutthroat as every other pirate.",
      },
      {
        imgsrc: Placeholder,
        title: "Knights and Knaves",
        description:
          "Solve classic truthteller-liar puzzles where someone else knows the answer.",
      },
    ],
  },
  {
    title: "Competitive Games",
    description: "What will your opponent do? Logic it out!",
    modules: [
      {
        imgsrc: Placeholder,
        title: "Poisoned Chocolate",
        description: "Don't take the last chocolate!",
      },
      {
        imgsrc: Placeholder,
        title: "Luk Tsut K'i",
        description: "Find the complete solution to a classic game.",
      },
      {
        imgsrc: Placeholder,
        title: "Puppies and Kittens",
        description:
          "Solve a fuzzier, livelier variant of the poisoned chocolate game.",
      },
      {
        imgsrc: Placeholder,
        title: "Poisoned Chocolate II",
        description: "What happens when the chocolate comes in rectangles?",
      },
      {
        imgsrc: Placeholder,
        title: "Game Search Algorithms",
        description: "Learn how simple AI systems approach game strategy.",
      },
    ],
  },
  {
    title: "Logic Machines",
    description: "Turn logic into arithmetic machines.",
    modules: [
      {
        imgsrc: Placeholder,
        title: "Truth Tables",
        description: "Diagram out the meanings of each logical operator.",
      },
      {
        imgsrc: Placeholder,
        title: "Basic Logic Gates",
        description: "How do AND, OR, and NOT gates work?",
      },
      {
        imgsrc: Placeholder,
        title: "Combinations",
        description: "Combine gates together to make complex circuits.",
      },
      {
        imgsrc: Placeholder,
        title: "Fredkin Gates",
        description:
          "Take a peek at a gate used in biological and quantum computing.",
      },
      {
        imgsrc: Placeholder,
        title: "Binary Numbers and Addition",
        description: "How does computer arithmetic work?",
      },
      {
        imgsrc: Placeholder,
        title: "Creating a Mechanical Adder",
        description:
          "Use what you've learned about logic gates to create a circuit that adds numbers.",
      },
    ],
  },
  {
    title: "Advanced Knights and Knaves",
    description: "Uncover liars on this island of logic!",
    modules: [
      {
        imgsrc: Placeholder,
        title: "Indirection",
        description: "Can you trick a liar into telling you the truth?",
      },
      {
        imgsrc: Placeholder,
        title: "Knights and Knaves En Masse",
        description:
          "What happens when you try to do logic at a big island party?",
      },
      {
        imgsrc: Placeholder,
        title: "Jokers",
        description:
          "Solve tricky variants of knights and knaves puzzles where some residents can behave like either.",
      },
      {
        imgsrc: Placeholder,
        title: "Other Variations",
        description: "Twist your mind around these unusual variants.",
      },
      {
        imgsrc: Placeholder,
        title: "Humans and Vampires",
        description:
          "Now there are four types of island resident: can you still work out the truth?",
      },
      {
        imgsrc: Placeholder,
        title: "Challenges",
        description:
          "Challenge yourself with our hardest selection of logic puzzles.",
      },
    ],
  },
];

function Module(props) {
  return (
    <>
      {chapters[props.chapter].modules.map(({ imgsrc, title, description }) => {
        return (
          <>
            <div className="col-10 col-md-5 col-lg-3">
              <div
                className="card ModuleCard"
                style={{ height: "22rem", marginBottom: "20px" }}
              >
                <img src={imgsrc} alt="" className="card-img-top" />
                <div className="card-body">
                  <h5 class="card-title">{title}</h5>
                  <p className="card-text grey">{description}</p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

function Chapter() {
  return (
    <>
      {chapters.map(({ title, description }, chapter) => {
        return (
          <>
            <div className="CourseChapters container-fluid">
              <h2>{title}</h2>
              <p className="grey">{description}</p>
              <div className="row">
                <Module chapter={chapter} />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

function Courses() {
  return (
    <>
      <Header />
      <main>
        <div className="CourseIntroduction container-fluid">
          <div className="row">
            <div className="col-xs-12 col-md-6 col-lg-6 col-xl-7">
              <p className="BackToAllCourses">
                <a className="grey" href="/">
                  &lt; Back to all courses
                </a>
              </p>
              <h1 className="CourseHeading">Logic</h1>
              <h3 className="CourseDescription">
                Stretch your analytic muscles with knights, knaves, logic gates,
                and more!
              </h3>
              <p className="grey">
                The beginning of our introductory math journey is Logic. Through
                these challenging problem solving exercises, you'll construct
                the critical thinking skills that are the basis for mathematical
                reasoning. <br />
                <br />
                You'll use limited information to make predictions – eliminating
                the impossible to uncover the truth. This course builds up to
                some truly mind-bending challenges!&nbsp;
                <a href="/">Read more</a>
                <br />
                <br />
                <small>
                  <a href="/">View prerequisites and next steps</a>
                </small>
              </p>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-6 col-xl-5">
              <div className="CourseStartBox">
                <div className="card">
                  <img
                    src={BrilliantCourseIntroduction}
                    alt=""
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-6 d-flex">
                            <span className="BigNumber">37</span>Interactive
                            quizzes
                          </div>
                          <div className="col-6 d-flex">
                            <span className="BigNumber">265+</span>
                            Concepts and exercises
                          </div>
                        </div>
                      </div>
                    </p>
                    <a href="/" className="btn btn-primary d-block">
                      Start Course
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Chapter />

        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-10 col-md-8">
              <h6 className="grey">NEXT STEPS</h6>
              <hr />
              <div className="row">
                <div className="BlurDiv col-10 col-md-6 d-flex">
                  <img
                    src={BrilliantMathematicalFundamentals}
                    alt=""
                    className="float-start"
                    height="100vh"
                  />
                  <div>
                    <h5>Mathematical Fundamentals</h5>
                    <p className="grey">
                      The essential tools for mastering algebra, logic, and
                      number theory!
                    </p>
                  </div>
                </div>
                <div className="BlurDiv col-10 col-md-6 d-flex">
                  <img
                    src={BrilliantComputerScienceFundamentals}
                    alt=""
                    className="float-start"
                    height="100vh"
                  />
                  <div>
                    <h5>Computer Science Fundamentals</h5>
                    <p className="grey">
                      Wrap your mind around computational thinking, from
                      everyday tasks to algorithms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Courses;
