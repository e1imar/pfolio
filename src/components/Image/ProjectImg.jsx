import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { GatsbyImage } from "gatsby-plugin-image"

const ProjectImg = ({ filename, alt }) => {
  const data = useStaticQuery(
    graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    `
  );

  const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

  if (!image) return null;

  const imageFluid = image.node.childImageSharp.gatsbyImageData;
  return <GatsbyImage alt={alt} image={imageFluid} />;
};

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectImg;
