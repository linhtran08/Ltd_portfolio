import React from 'react';
import SocialMedia from "../components/SocialMedia/SocialMedia";
import NavigationDots from "../components/Navbar/NavigationDots";

const AppWrap = (Cmp, idName, classNames) => () => {
	return (
		<div id={idName} className={`app__container ${classNames}`}>
			<SocialMedia/>
			<div className={"app__wrapper app__flex"}>
				<Cmp />
				<div className={"copyright"}>
					<p className={"p-text"}>@2022 LTD</p>
					<p className={"p-text"}>All rights reserved</p>
				</div>
			</div>
			<NavigationDots active={idName}/>
		</div>
	)
};

export default AppWrap;