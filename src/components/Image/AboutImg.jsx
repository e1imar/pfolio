import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { GatsbyImage } from "gatsby-plugin-image"

const AboutImg = ({ filename, alt }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 350)
            }
          }
        }
      }
    }
  `)

  const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

  if (!image) return null;

  const imageFixed = image.node.childImageSharp.gatsbyImageData;
  return <GatsbyImage className="rounded shadow-lg" alt={alt} image={imageFixed} />;
}

AboutImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default AboutImg;
