import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

import avatar1 from '../assets/tweet-1-user-avatar.svg';
import avatar2 from '../assets/tweet-2-user-avatar.svg';


export const TweetContext = createContext(null);

const defaultTweets = [
  {
    id: '1234567890', 
    text: "Hello World from TweetContext", 
    postedAt: '02/23/2023', 
    postedBy: {
      userId: 'allAuover1',
      userName: "jakaf1", 
      userFullName: "Jakallope1",
      userImage: avatar1
    },
    comments: 13, 
    reposts: 23, 
    likes: 56, 
    views: 1256,
    isLiked: false, 
    isRetweeted: false,
  },
  {
    id: '1234567891', 
    text: "Hello World from TweetContext again", 
    postedAt: '02/23/2023', 
    postedBy: {
      userId: 'allAuover2',
      userName: "jakaf2", 
      userFullName: "Jakallope2",
      userImage: avatar2
    },
    comments: 13, 
    reposts: 22, 
    likes: 59, 
    views: 136,
    isLiked: false, 
    isRetweeted: false,
  },
];

export const TweetContextProvider = ({ children }) => {
  const [tweetsData, setTweetsData] = useState(defaultTweets);

  const handleLike = (tweetId) => {
    const updatedTweets = tweetsData.map((tweet) => {
      if (tweet.id === tweetId) {
        return { 
          ...tweet, 
          isLiked: !tweet.isLiked,
          likes: tweet.isLiked ? tweet.likes - 1 : tweet.likes + 1,
        };
      }
      return tweet;
    });
    setTweetsData(updatedTweets);
  };

  const handleRetweet = (tweetId) => {
    const updatedTweets = tweetsData.map((tweet)=>{
      if(tweet.id === tweetId){
        return {
          ...tweet,
          isRetweeted: !tweet.isRetweeted,
          reposts: tweet.isRetweeted ? tweet.reposts - 1 : tweet.reposts + 1,
        }; 
      }
      return tweet; 
    }); 
    setTweetsData(updatedTweets);
  }


  return (
    <TweetContext.Provider value={{ userTweets: tweetsData, setUserTweets: setTweetsData, handleLike, handleRetweet}}>
      {children}
    </TweetContext.Provider>
  );
};

TweetContextProvider.propTypes = {
  children: PropTypes.node,
};
