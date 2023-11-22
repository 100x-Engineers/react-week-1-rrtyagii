import React from 'react'
import CommentIcon from '../../images/comment.svg'; 
import LikeIcon from '../../images/heart.svg';
import RepostIcon from '../../images/retweet.svg';
import ShareIcon from '../../images/share.svg';

function TweetStats({comments, reposts, likes, views }) {
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
            <button className="w-[0.91025rem] h-[0.91025rem] stroke-neutral-500 stroke-1.5">
                <img src={RepostIcon} alt="retweet" />
            </button>
            <span className="text-neutral-500 font-inter text-sm font-normal leading-normal not-italic">
                {reposts}
            </span>
        </div>
        <div className="flex justify-center items-center gap-[0.3125rem]">
            <button className="w-[0.91025rem] h-[0.91025rem] stroke-neutral-500 stroke-1.5">
            <img src={LikeIcon} alt="like" />
            </button>
            <span className="text-neutral-500 font-inter text-sm font-normal leading-normal not-italic">
                {likes}
            </span>
        </div>
        <div className="flex justify-center items-center gap-[0.3125rem]">
            <div className="flex flex-row items-end gap-[0.10713rem]">
            <div className="w-[0.10713rem] h-[0.57144rem] bg-neutral-500" />
            <div className="w-[0.10713rem] h-[0.92856rem] bg-neutral-500" />
            <div className="w-[0.10713rem] h-[0.42856rem] bg-neutral-500" />
            <div className="w-[0.10713rem] h-[0.71431rem] bg-neutral-500" />
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
  )
}

export default TweetStats