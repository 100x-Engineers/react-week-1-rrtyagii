import React from 'react';
import TrendingItem from './TrendingItem';

import PropTypes from 'prop-types';

export function TrendingList({ topics }){
  return (
    <div className="bg-card-fill p-4 rounded-lg">
      <div className="text-xl font-bold text-white mb-4">What's happening</div>
      {topics.map((topic, index) => (
        <TrendingItem key={index} {...topic} />
      ))}
      <div className="text-center mt-4 text-sm text-twitter-blue-default cursor-pointer">
        Show more
      </div>
    </div>
  );
};

TrendingList.propTypes = {
  topics: PropTypes.array,
}; 
