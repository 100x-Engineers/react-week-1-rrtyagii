import React from 'react';
import PropTypes from 'prop-types';

export default function Avatar({
  imageUrl,
  userName,
  userHandle,
  showNameAndHandle=true,
  orientation = 'vertical',
  ...rest
}) {
  const isVertical = orientation === 'vertical';
  const containerClasses = isVertical ? 'flex-col items-start' : 'flex-row items-center';
  const imageClasses = `${rest.size || 'w-20 h-20'} ${rest.borderRadius || 'rounded-full'} ${rest.borderClasses || 'border-4 border-neutral-1000'} bg-cover bg-no-repeat bg-custom-gray overflow-hidden`;

  return (
    <section className={`flex ${containerClasses} ${rest.className || ''}`}>

      <figure className={imageClasses}>
        <img className={rest.size || 'w-20 h-20'} src={imageUrl} alt={`${userHandle} avatar`} />
      </figure>

      {showNameAndHandle && (
        <div className={`font-inter text-xl text-neutral-50 leading-normal font-bold ${isVertical ? '' : 'ml-2'}`}>
          {userName}
        </div>
      )}

      {showNameAndHandle && (
        <div className={`font-inter text-[0.9375rem] font-normal leading-normal text-neutral-500 ${isVertical ? '' : 'ml-2'}`}>
          {`@${userHandle}`}
        </div>
      )}

      {rest.postedAt && (
        <div className={`font-inter text-[0.9375rem] font-normal leading-normal text-neutral-500 ${isVertical ? '' : 'ml-2'}`}>
          {` • ${rest.postedAt}`}
        </div>
      )}
    </section>
  );
}

Avatar.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userHandle: PropTypes.string.isRequired,
  showNameAndHandle: PropTypes.bool,
  orientation: PropTypes.string,
  rest: PropTypes.object,
};
