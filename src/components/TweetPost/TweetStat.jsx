import React from 'react'
import CommentIcon from '../../assets/comment.svg'; 

import LikeIcon from '../../assets/heart.svg';
import RepostIcon from '../../assets/retweet.svg';
import LikedIcon from '../../assets/heart-sv.svg';
import RetweetedIcon from '../../assets/retweet-sv.svg';

import ShareIcon from '../../assets/share.svg';
import ReachIcon from "../../assets/reach-sv.png";

import PropTypes from 'prop-types';

export default function TweetStats({comments, reposts, likes, views, onLikeClick, onRetweetClick, isLiked, isRetweeted}) {
  return (
    <>
        <div className="flex justify-center items-center gap-[0.3125rem]">
            <button className='w-[0.91025rem] h-[0.91025rem] stroke-neutral-500 stroke-1.5'>
                <img src={CommentIcon} alt="comment" />
            </button>
            <span className="text-neutral-500 font-inter text-sm font-normal leading-normal not-italic">
                {comments}
            </span>
        </div>

        <div className="flex justify-center items-center gap-[0.3125rem]">
            <button className="w-[0.91025rem] h-[0.91025rem] stroke-neutral-500 stroke-1.5" onClick={onRetweetClick}>
                <img src={isRetweeted?RetweetedIcon: RepostIcon} alt="retweet" />
            </button>
            <span className={`${isRetweeted ? "text-success":"text-neutral-500"} font-inter text-sm font-normal leading-normal not-italic`}>
                {reposts}
            </span>
        </div>
        <div className="flex justify-center items-center gap-[0.3125rem]">
            <button className="w-[0.91025rem] h-[0.91025rem] stroke-neutral-500 stroke-1.5" onClick={onLikeClick}>
            <img src={isLiked?LikedIcon: LikeIcon} alt="like" />
            </button>
            <span className={`${isLiked ? "text-like-fill":"text-neutral-500"} font-inter text-sm font-normal leading-normal not-italic`}>
                {likes}
            </span>
        </div>
        <div className="flex justify-center items-center gap-[0.3125rem]">
            <div className="w-[0.91025rem] h-[0.91025rem] stroke-neutral-500 stroke-1.5">
                <img src={ReachIcon} alt="reach" />
            </div>
            <span className="text-neutral-500 font-inter text-sm font-normal leading-normal not-italic">
                {views}
            </span>
        </div>
        <div className="flex justify-center items-center gap-[0.3125rem]">
            <button className="w-[0.91025rem] h-[0.91025rem] stroke-neutral-500 stroke-1.5">
            <img src={ShareIcon} alt="share" />
            </button>
        </div>
    </>
  );
};

TweetStats.propTypes = {
    comments: PropTypes.number,
    reposts: PropTypes.number,
    likes: PropTypes.number,
    views: PropTypes.number
};