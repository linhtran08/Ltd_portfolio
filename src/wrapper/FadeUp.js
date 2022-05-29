import React from 'react';
import {motion} from "framer-motion";
import {fade} from "../constants";

const FadeUp = ({children, classStyle}) => {
	return (
		<motion.h2
			initial={fade.offscreen}
			whileInView={fade.onscreen}
			viewport={{ once: true, amount: 0.8 }}
			variants={fade}
			className={classStyle}
		>
			{children}
		</motion.h2>
	)
};

export default FadeUp;