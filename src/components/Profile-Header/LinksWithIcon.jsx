import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function LinksWithIcon({ imageUrl, altText, linkText }) {
  return (
    <>
    <div className="flex items-center gap-1">
      <figure className="w-3.5 h-3.5 fill-neutral-500">
        <img src={imageUrl} alt={altText} />
      </figure>

      <div className="text-twitter-blue-default font-Inter font-normal leading-normal text-base">
        <Link to={linkText}>
          {linkText}
        </Link>
      </div>
    </div>
    </>
  ); 
};

LinksWithIcon.propTypes = {
  imageUrl: PropTypes.string,
  altText: PropTypes.string,
  linkText: PropTypes.string,
};