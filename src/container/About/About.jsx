import React, { useEffect, useState } from "react";
import "./About.scss";
import { client, urlFor } from "../../client";
import AppWrap from "../../wrapper/AppWrap";
import FadeUp from "../../wrapper/FadeUp";
import {motion} from "framer-motion";
import {fade} from "../../constants";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type=="abouts"]';
    client
      .fetch(query)
      .then((data) => {
        setAbouts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <section className={"app__about"}>
      <FadeUp classStyle={"head-text"}>
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </FadeUp>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
						initial={fade.offscreen}
						whileInView={fade.onscreen}
						viewport={{ once: true, amount: 0.8 }}
						variants={fade}
						className={"app__profile-item"} key={index}>
            {about.imgUrl && (
              <img
                src={urlFor(about.imgUrl).url().toString()}
                alt={about.title}
              />
            )}
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AppWrap(About, 'about');
