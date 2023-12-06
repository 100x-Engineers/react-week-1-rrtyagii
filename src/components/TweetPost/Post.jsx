import React, { useState } from 'react'
import Avatar from '../Avatar/Avatar';
import TweetStats from './TweetStat';

// Post: {
//     meta: {comments, reposts, likes, views}
//     post: {id, text, postedAt, postedBy}
// }

function Post({meta, post}) {
    const {comments, reposts, likes, views} = meta; 
    const {id, text, postedAt, postedBy} = post
    
    const [tweets, setTweets] = useState([]); 
    
  return (
    <>
        <section className="flex flex-col px-4 py-2 items-start gap-y-0 self-stretch border-b border-b-neutral-700"> 
            <Avatar 
            imageUrl={ postedBy.userImage } 
            userName={postedBy.userName}
            userHandle={postedBy.userName}
            showNameAndHandle={true}
            size="w-12 h-12"
            orientation = 'horizontal'
            postedAt = {postedAt}
            />    

            <article className="flex flex-col items-start gap-2 flex-grow basis-0 shrink-0 pl-[3.45rem]">
                <p className="font-inter text-base leading-normal font-normal text-neutral-50">
                    {text}
                </p>
                {/* <input type="text" placeholder=" className="w-full max-w-xs font-inter text-base leading-normal font-normal text-neutral-50 bg-transparent focus:none" /> */}
                <footer className="flex py-3 justify-between items-center self-stretch w-full">
                    <TweetStats 
                        comments={comments}
                        reposts={reposts}
                        likes={likes}
                        views={views}
                    />
                </footer>
            </article>
        </section>
    </>
  )
}

export default Post