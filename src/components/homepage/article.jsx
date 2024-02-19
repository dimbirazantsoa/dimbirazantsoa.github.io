import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/article.css";

const Article = (props) => {
	const { title, description, date, link, tags = [] } = props;
	const descriptionInnerHTML = {__html: description}

	return (
		<React.Fragment>
			<div className="homepage-article">
				<div className="homepage-article-content">
					<div className="homepage-article-date">
						|&nbsp;&nbsp;&nbsp;{date}
					</div>
					<div className="homepage-article-title">{title}</div>
					<div className="homepage-article-description" dangerouslySetInnerHTML={descriptionInnerHTML}></div>
					<div className="tags">
						<ul className="tags">
							{
								tags.map((tag, index) => (<li key={index}><span>{tag}</span></li>))
							}
						</ul>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Article;
