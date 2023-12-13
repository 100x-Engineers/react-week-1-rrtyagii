import React, { useContext } from 'react'
import ProfileHeader from '../../components/Profile-Header/ProfileHeader'; 
import AddContent from '../../components/Add Content/AddContent'; 
import Post from '../../components/TweetPost/Post'; 

import UserBackground from "../../assets/image-17.png"; 
import UserAvatar from "../../assets/tweet-2-user-avatar.svg"; 
import avatar from '../../assets/tweet-1-user-avatar.svg';
import NavigationTab from '../../components/Navigation Tab/Navigation_Tab';

import { TweetContext } from '../../contexts/tweetContext';
import { InitialUserContext } from '../../contexts/userContext';

import { Link, useNavigate} from 'react-router-dom';
import { URLs } from '../../Constants';

export default function UserProfile() {
    const navigate = useNavigate();
    const {userTweets, handleLike, handleRetweet} = useContext(TweetContext);
    const { form, setForm } = useContext(InitialUserContext);

    function handleAddContentClick() {
        navigate(URLs.compose);
    }

    function onEditButtonClick() {
        console.log("Edit button clicked!")
        navigate(URLs.edit);
    }

  return (
    <>
    <div className='flex flex-col flex-grow min-h-screen mx-auto max-w-lg border-x border-x-neutral-600'>
    <section className='flex flex-col h-screen'>
        <NavigationTab />
        <AddContent onClick={handleAddContentClick} />

        <div className='flex flex-col overflow-y-auto pb-16 scrollbar-hide'>
            <ProfileHeader 
                userBackground={UserBackground}
                userImage={UserAvatar}
                userFullName={form.name}
                userName= {form.username}
                bio={form.bio}
                bioLink={form.bioLink}
                joinedAt={form.joinedAt}
                following={213}
                followers={23}
                onEditButtonClick={onEditButtonClick}
            />
            <div className="flex flex-col w-full px-[0.0625] items-start relative pt-4">
                {
                    userTweets.map((tweet) => {
                        const meta = {
                            comments: tweet.comments, 
                            reposts: tweet.reposts, 
                            likes: tweet.likes, 
                            views: tweet.views,
                            isLiked: tweet.isLiked,
                            isRetweeted: tweet.isRetweeted
                        }; 
                        const post = {
                            id: tweet.id, 
                            text: tweet.text, 
                            postedAt: tweet.postedAt, 
                            postedBy: tweet.postedBy
                        };
                        return (
                        <Post 
                            key={tweet.id}
                            meta={meta} 
                            post={post} 
                            onLike={() => handleLike(tweet.id)}
                            onRetweet={() => handleRetweet(tweet.id)}
                        />)
                    })
                }
            </div>
        </div>
    </section>
    </div>
    </>
  );
};
