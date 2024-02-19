import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, intro, description, linkText, link, tags = [] } = props;
	const descriptionInnerHTML = {__html: description}
	// const shuffledTags = tags.sort((a, b) => 0.5 - Math.random());

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link}>
					<div className="project-container">
						{/* <div className="project-logo">
							<img src={logo} alt="logo" />
						</div> */}
						<div className="project-title">{title}</div>
						<div className="project-intro">{intro}</div>
						{/* <div className="project-description" dangerouslySetInnerHTML={descriptionInnerHTML}></div> */}
						<div className="project-tags">
							<ul className="tags">
								{
									tags.map((tag, index) => (<li key={index}><span>{tag}</span></li>))
								}
							</ul>
						</div>

						{
							linkText ?
								(
									<div className="project-link">
										<div className="project-link-icon">
											<FontAwesomeIcon icon={faLink} />
										</div>

										<div className="project-link-text">{linkText}</div>
									</div>
								) : ''
						}
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
