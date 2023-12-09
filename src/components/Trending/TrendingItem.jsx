import React from 'react';
import PropTypes from 'prop-types';

export function TrendingItem({ topic, count, isSelected }){
  return (
    <div className={`flex justify-between items-center p-4 ${isSelected ? 'bg-neutral-700 rounded-full' : ''}`}>
      <div>
        <div className="text-sm font-bold text-neutral-500">Trending</div>
        <div className="text-md font-bold text-white">{topic}</div>
        <div className="text-sm text-neutral-500">{count} posts</div>
      </div>
      <div>
        {/* Render the ellipsis or other icons here if needed */}
        <span className="text-3xl text-neutral-400">...</span>
      </div>
    </div>
  );
};

TrendingItem.propTypes = {
  topic: PropTypes.string,
  count: PropTypes.number,
  isSelected: PropTypes.bool,
};
