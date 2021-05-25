import Images from "../../Assets/Images";
import { useEffect, useState } from "react";

export default function Parallax() {
  const [scrollValue, setScrollValue] = useState(0);

  const trackScroll = () => {
    setScrollValue(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", trackScroll);
  }, []);

  return (
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
      <h1
        className="parallaxHead"
        style={{
          opacity: `${0 + scrollValue * 0.25 + "%"}`,
          marginTop: `${-15 + scrollValue * 0.1 + "%"}`,
        }}
      >
        Welcome to Quizzarding
      </h1>
    </section>
  );
}
