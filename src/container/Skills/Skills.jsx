import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";
import ReactTooltip from "react-tooltip";

import AppWrap from "../../wrapper/AppWrap";
import {urlFor, client} from "../../client";
import './Skills.scss'
import {MotionWrap} from "../../wrapper";

const Skills = (props) => {

	useEffect(() => {
		const exQuery = '*[_type=="experiences"]';
		const skillsQuery = '*[_type=="skills"]';

		client.fetch(skillsQuery).then((data) => {
			setSkills(data);
		});
		client.fetch(exQuery).then((data) => {
			setExperiences(data);
		});
	}, []);

	const [skills, setSkills] = useState([]);
	const [experiences, setExperiences] = useState([]);

	return (
		<>
			<h2 className={'head-text'}>Skills & <span>Experience</span></h2>
			<div className={'app__skills-container'}>
				<motion.div className={'app__skills-list'}>
					{skills.map(skill => (
						<motion.div
							whileInView={{opacity: [0,1]}}
							transition={{ duration: 0.5 }}
							className={'app__skills-item app__flex'}
							key={skill.name}
						>
							<div className={'app__flex'} style={{backgroundColor: skill.bgColor}}>
								<img src={urlFor(skill.icon).url()} alt={skill.name}/>
							</div>
							<p className={'p-text'}>{skill.name}</p>
						</motion.div>
					))}
				</motion.div>
				<motion.div className={'app__skills-exp'}>
					{experiences.map(experience => (
						<motion.div
							whileInView={{opacity: [0,1]}}
							transition={{ duration: 0.5 }}
							className={'app__skills-exp-item'}
							key={experience.year}
						>
							<div className={'app__skills-exp-year'}>
								<p className={'bold-text'}>{experience.year}</p>
							</div>
							<motion.div className={'app__skills-exp-works'}>
								{experience.works.map(work => (
									<div key={work.name}>
									<motion.div
										whileInView={{opacity: [0,1]}}
										transition={{ duration: 0.5 }}
										className={'app__skills-exp-work'}
										data-tip
										data-for={work.name}
									>
										<h4 className={'bold-text'}>{work.name}</h4>
										<p className={'p-text'}>{work.company}</p>
									</motion.div>
										<ReactTooltip className={'skills-tooltip'} id={work.name} effect={'solid'} arrowColor={'#fff'} >
											{work.desc}
										</ReactTooltip>
									</div>
								))}
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</>
	)
};

export default AppWrap(MotionWrap(Skills,'app__skills'),'skills', 'app__whitebg');