import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
export const TweetContext = createContext(null);

export const TweetContextProvider = ({ children }) => {
  const [storeData, setStoreData] = useState(defaultTweets);

  return (
    <TweetContextProvider.Provider
      value={{ userTweets: storeData, setUserTweets: setStoreData }}
    >
      {children}
    </TweetContextProvider.Provider>
  );
};

TweetContextProvider.propTypes = {
  children: PropTypes.node,
};

const defaultTweets = [
  {
    id: '1234567890', 
    text: "Hello World from TweetContext", 
    postedAt: '1699379518869', 
    postedBy: 'allAuover',
    comments: 123, 
    reposts: 235, 
    likes: 56778, 
    views: 123456,
    isLiked: true, 
    isRetweeted: false,
  },
  {
    id: '1234567891', 
    text: "Hello World from TweetContext again", 
    postedAt: '1699379518869', 
    postedBy: 'allAuover',
    comments: 123, 
    reposts: 235, 
    likes: 56778, 
    views: 123456,
    isLiked: true, 
    isRetweeted: false,
  },
];
