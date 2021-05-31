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
      <img
        className="parallaxImage"
        src="https://ik.imagekit.io/utk0u9ryhxe/Quiz_App/sky_6wNmxNqd1.png"
        alt="sky"
      />
      <img
        className="parallaxImage"
        style={{
          top: "-10%",
          left: `${20 + scrollValue * -0.2 + "%"}`,
        }}
        src="https://ik.imagekit.io/utk0u9ryhxe/Quiz_App/cloud_13Ghaw2T_.png"
        alt="cloud"
      />
      <img
        className="parallaxImage"
        style={{
          width: `${90 - scrollValue * 0.1 + "%"}`,
          minWidth: "70%",
          // left: `${0 + scrollValue * 0.1 + "%"}`,
        }}
        src="https://ik.imagekit.io/utk0u9ryhxe/Quiz_App/school_sg1XCrWBL.png"
        alt="school"
      />
      <img
        className="parallaxImage"
        style={{
          top: `${50 - scrollValue * 0.1 + "%"}`,
          left: "0%",

          objectPosition: "0px -32rem ",
        }}
        src="https://ik.imagekit.io/utk0u9ryhxe/Quiz_App/leftRock_xrHqvzIIg.png"
        alt="Left Rock"
      />
      <img
        className="parallaxImage"
        style={{
          top: `${25 - scrollValue * 0.1 + "%"}`,
        }}
        src="https://ik.imagekit.io/utk0u9ryhxe/Quiz_App/rightRock_tYV1uSPhJ.png"
        alt="Right Rock"
      />
      <img
        className="parallaxImage"
        style={{
          top: `${52 - scrollValue * 0.1 + "%"}`,
        }}
        src="https://ik.imagekit.io/utk0u9ryhxe/Quiz_App/ocean_q21irrk_cc.png"
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
