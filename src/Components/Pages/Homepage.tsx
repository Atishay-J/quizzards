import "./homepage.css";
import Images from "../../Assets/Images";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const [scrollValue, setScrollValue] = useState(0);
  const [spellInput, setSpellInput] = useState("");
  const [openDoors, setOpenDoors] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

  let navigate = useNavigate();

  const trackScroll = () => {
    setScrollValue(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", trackScroll);
  }, []);

  const checkSpell = () => {
    spellInput.toLowerCase() === "alohomora"
      ? setOpenDoors(true)
      : setShowMsg(true);
  };

  return (
    <div className="homepageContainer">
      <section className="parallaxSection">
        <img className="parallaxImage" src={Images.sky} alt="sky" />
        <img
          className="parallaxImage"
          style={{
            top: "-10%",
            left: `${20 + scrollValue * -0.2 + "%"}`,
          }}
          src={Images.cloud}
          alt="cloud"
        />
        <img
          className="parallaxImage"
          style={{
            width: `${90 - scrollValue * 0.1 + "%"}`,
            minWidth: "70%",
            // left: `${0 + scrollValue * 0.1 + "%"}`,
          }}
          src={Images.school}
          alt="school"
        />
        <img
          className="parallaxImage"
          style={{
            top: `${50 - scrollValue * 0.1 + "%"}`,
            left: "0%",

            objectPosition: "0px -32rem ",
          }}
          src={Images.leftRock}
          alt="Left Rock"
        />
        <img
          className="parallaxImage"
          style={{
            top: `${25 - scrollValue * 0.1 + "%"}`,
          }}
          src={Images.rightRock}
          alt="Right Rock"
        />
        <img
          className="parallaxImage"
          style={{
            top: `${52 - scrollValue * 0.1 + "%"}`,
          }}
          src={Images.ocean}
          alt="ocean"
        />
      </section>
      <div className="quizDoorWrapper">
        <h1 className="homeText">No Muggles Beyond this point</h1>

        <div className="doorContainer">
          <img
            className={`homepageDoor ${openDoors && "openLeftDoor"}`}
            src={Images.leftDoor}
            alt="leftDoor"
          />
          {openDoors && (
            <button
              className="gotoCategoryBtn"
              onClick={() => navigate("/categories")}
            >
              Go to Quiz
            </button>
          )}
          <img
            className={`homepageDoor ${openDoors && "openRightDoor"}`}
            src={Images.rightDoor}
            alt="rightDoor"
          />

          {openDoors !== true && (
            <div className="homepageInputWrapper">
              <h2 className="homeText2">
                Cast Lock Opening Spell, to go to quiz
              </h2>
              {showMsg && (
                <p className="warningText">
                  You are not a Wizard!{" "}
                  <span className="warningPara">
                    Only a Wizard can cast this spell
                  </span>
                </p>
              )}
              <div className="homeInputContainer">
                <input
                  type="text"
                  value={spellInput}
                  className="homepageInput"
                  placeholder="Cast Door Opening Spell"
                  onChange={(e) => setSpellInput(e.target.value)}
                />
                <button className="homepageBtn" onClick={checkSpell}>
                  Cast
                </button>
              </div>
              <div className="spellHint">
                <p className="inputHintPara" onClick={() => setShowHint(true)}>
                  Hint:
                </p>{" "}
                {showHint && <span className="inputHint">Alohomora</span>}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
