import React, {useEffect, useRef, useState} from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";

const useDimensions = ref => {
	const dimensions = useRef({ width: 0, height: 0 });

	useEffect(() => {
		dimensions.current.width = ref.current.offsetWidth;
		dimensions.current.height = ref.current.offsetHeight;
	}, []);

	return dimensions.current;
};

const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 71.2vw 27px)`,
		transition: {
			type: "spring",
			stiffness: 20,
			restDelta: 2
		}
	}),
	closed: {
		clipPath: "circle(27px at 71.2vw 27px)",
		transition: {
			delay: 0.5,
			type: "spring",
			stiffness: 400,
			damping: 40
		}
	}
};

const Navbar = (props) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">LTD</div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <span />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className="app__navbar-menu"
      >
				<motion.div className="background" variants={sidebar} >
					<ul>
						{['home', 'about', 'work', 'skills', 'contact'].map((item) => (
							<li key={item}>
								<a href={`#${item}`} onClick={() => toggleOpen()}>
									{item}
								</a>
							</li>
						))}
					</ul>
					<MenuToggle toggle={() => toggleOpen()} />
				</motion.div>
      </motion.nav>
    </nav>
  );
};

export default Navbar;
