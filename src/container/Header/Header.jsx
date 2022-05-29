import React, { Suspense, useState } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Header.scss";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import AppWrap from "../../wrapper/AppWrap";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./untitled3.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={0.16} />
    </>
  );
};

const Header = () => {
  const [speed, setSpeed] = useState(600);

  const time1 = setTimeout(function () {
    setSpeed(10);
    clearTimeout(time1);
  }, 1000);

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Linh Tran</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <div className="app__header-model">
          <Canvas>
            <Suspense fallback={null}>
              <Model />
              <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={speed}
              />
              <ambientLight intensity={0.1} />
              <Environment preset="sunset" />
            </Suspense>
          </Canvas>
        </div>
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.nextjs, images.redux, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
