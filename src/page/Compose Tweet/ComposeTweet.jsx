import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { TweetContext } from '../../contexts/tweetContext';
import { InitialUserContext } from '../../contexts/userContext';
import { URLs } from '../../Constants';

import CreatePost from '../../components/Create Post/CreatePost';
import PageHeader from '../../components/Page Header/PageHeader';
import Button from '../../components/Button/Button';
import avatar from '../../assets/tweet-1-user-avatar.svg';
import PropTypes from 'prop-types';

export default function ComposeTweet() {
  const navigate = useNavigate();   
  const { form } = useContext(InitialUserContext);
  const { setUserTweets} = useContext(TweetContext);

  const [postText, setPostText] = useState('');

  const handlePostClick = ()=>{
    const newTweet = {
      id: Date.now().toString(), 
      text: postText, 
      postedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      postedBy: {
        userId: form.id,
        userName: form.username, 
        userFullName: form.name,
        userImage: form.avatar || avatar
      },
      comments: 0, 
      reposts: 0, 
      likes: 0, 
      views: 0,
      isLiked: false, 
      isRetweeted: false,
    };
    setUserTweets(prevTweets => [newTweet, ...prevTweets]);
    setPostText('');

    console.log("Tweeted!")
    console.log(newTweet)

    navigate(URLs.feed);
  }

  const user = {
    userid: form.id,
    userName: form.username,
    userFullName: form.name,
    userImage: form.avatar || avatar
  };

  return (
    <div className='flex flex-col flex-grow min-h-screen mx-auto max-w-lg border-x border-x-neutral-600 text-neutral-50 p-4'>
      <PageHeader 
        showBackButton={true} 
        onBackClick={() => navigate(-1)}
        actionButton={
          <Button
            type="primary" 
            variant="solid"
            width="w-40"
            onClick={handlePostClick}
            disabled={!postText.trim() || postText.length > 280 || postText.trim().length === 0}
          >
            Post
          </Button>
        }
      />
      <CreatePost 
        user={user}
        postText={postText}
        setPostText={setPostText}
      />
    </div>
  );
};
