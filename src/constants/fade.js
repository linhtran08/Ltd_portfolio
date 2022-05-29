const fade = {
	offscreen: {
		translateY: 100,
		opacity: 0
	},
	onscreen: {
		translateY: 0,
		opacity: 1,
		transition: {
			type: "spring",
			bounce: 0.3,
			duration: 1.5
		}
	}
};

export default fade