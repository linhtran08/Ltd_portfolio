import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Work.scss";
import FadeUp from "../../wrapper/FadeUp";
import { client, urlFor } from "../../client";
import AppWrap from "../../wrapper/AppWrap";
import { AiFillEye, AiFillYoutube } from "react-icons/ai";

const Work = (props) => {
  useEffect(() => {
    const query = '*[_type=="works"]';
    client.fetch(query).then((data) => {
      setData(data);
      setFilterWorks(data);
    });
  }, []);

  const [data, setData] = useState([]);
  const [filterWorks, setFilterWorks] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0 });

  function handleWorkFilter(item) {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({y: 0, opacity: 1});

			if(item === 'All'){
				setFilterWorks(data)
			}else {
				setFilterWorks(data.filter( work => work.tags.includes(item)))
			}

    }, 500);
  }

  return (
    <section>
      <FadeUp classStyle={"head-text"}>
        My Creative <span>Project</span>
      </FadeUp>
      <div className="app__work-filter">
        {["Web App", "ReactJS", "Design", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text${
              activeFilter === item ? " item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={"app__work-portfolio"}
      >
        {filterWorks.map((item, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(item.imgUrl)} alt={item.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className={"app__work-hover app__flex"}
              >
                <a href={item.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={item.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillYoutube />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h3 className="bold-text">{item.title}</h3>
              <p className="p-text" style={{ marginTop: 10 }}>
                {item.description}
              </p>
              <div className={"app__work-tag app__flex"}>
                <p className={"p-text"}>{item.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default AppWrap(Work, "work");
