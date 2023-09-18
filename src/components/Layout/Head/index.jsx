import React from "react";
import { Helmet } from "react-helmet-async";

const Head = ({ title, desc, keywords, additionMeta, canonicalLink }) => {
	return (
		<Helmet>
			<title>{`AVA Real Estate - ${title}`}</title>
			<meta name='title' content={`AVA Real Estate - ${title}`} />
			<meta name='description' content={desc} />
			<meta name='keywords' content={keywords} />
			<link rel='canonical' href={canonicalLink} />
			{additionMeta}
		</Helmet>
	);
};

export default Head;
