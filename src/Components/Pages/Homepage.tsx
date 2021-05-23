import "./homepage.css";
import Images from "../../Assets/Images";
import { useEffect, useState } from "react";

export default function Homepage() {
  const [scrollValue, setScrollValue] = useState(0);

  const trackScroll = () => {
    setScrollValue(window.scrollY);
  };

  console.log("Sroll value", scrollValue);

  useEffect(() => {
    window.addEventListener("scroll", trackScroll);
  }, []);

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
            width: `${100 - scrollValue * 0.2 + "%"}`,
            minWidth: "70%",
            left: `${0 + scrollValue * 0.1 + "%"}`,
          }}
          src={Images.school}
          alt="school"
        />
        <img
          className="parallaxImage"
          style={{
            top: `${33 - scrollValue * 0.1 + "%"}`,
            left: "0%",

            objectPosition: "0px -32rem ",
          }}
          src={Images.leftRock}
          alt="Left Rock"
        />
        <img
          className="parallaxImage"
          style={{
            top: `${0 - scrollValue * 0.1 + "%"}`,
          }}
          src={Images.rightRock}
          alt="Right Rock"
        />
        <img
          className="parallaxImage"
          style={{
            top: `${30 - scrollValue * 0.1 + "%"}`,
          }}
          src={Images.ocean}
          alt="ocean"
        />
      </section>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
      praesentium reiciendis ab necessitatibus quis similique fuga quae est
      blanditiis velit, omnis eligendi eum facere rem dolorem modi soluta.
      Aliquam, sit? Magni iste dignissimos ab nostrum nobis tempore sint neque
      deleniti nisi amet repellendus id porro ad, doloribus nihil fuga unde
      numquam temporibus. Totam, eligendi officia. Eveniet exercitationem harum
      cumque iusto. At, ex, molestiae nam itaque obcaecati accusamus possimus
      consectetur voluptate, necessitatibus quas eius odio ut voluptatem. Fugit
      provident cupiditate illum, possimus maxime dolorem! Blanditiis recusandae
      dolorem sit eligendi tenetur accusantium? Id excepturi illum
      necessitatibus provident mollitia a ipsam iusto, quas iste temporibus,
      velit assumenda, fugit pariatur culpa! Possimus obcaecati mollitia
      blanditiis consectetur libero, cupiditate architecto, itaque quaerat
      aspernatur provident neque. Sunt facere officiis nam delectus dolores,
      eaque quisquam necessitatibus minima maiores ratione numquam quidem ipsam
      sint laborum molestiae doloribus placeat! Nobis sit placeat officia
      quaerat tempora saepe porro error aspernatur. At eum perspiciatis est,
      animi blanditiis voluptatem quisquam, consequatur consequuntur consectetur
      laboriosam cum esse saepe corrupti ipsum unde itaque sint velit hic
      delectus ex nostrum earum! Consequatur dolores sed repellat. Quas unde
      nesciunt possimus quam cumque ex deleniti, quae non dolore. Quam commodi
      ex aut, quaerat veritatis mollitia distinctio molestiae doloribus animi
      minima excepturi odio quos dolores nesciunt, optio tenetur. Quam iure
      nobis cumque molestiae labore reiciendis atque sint adipisci animi.
      Perferendis nulla, ullam ut dolorem eos voluptatem tenetur similique
      tempora, minima porro modi quam corrupti unde nihil soluta doloremque.
    </div>
  );
}
