import React from 'react'

function LinksWithIcon({ imageUrl, altText, linkText }) {
  return (
    <>
    <div className="flex items-center gap-1">
      <figure className="w-3.5 h-3.5 fill-neutral-500">
        <img src={imageUrl} alt={altText} />
      </figure>

      <div className="text-twitter-blue-default font-Inter font-normal leading-normal text-base">
        {linkText}
      </div>
    </div>
    </>
  ); 
}

export default LinksWithIcon
  