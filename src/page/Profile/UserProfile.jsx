import React from 'react'
import ProfileHeader from '../../components/Profile-Header/ProfileHeader'; 
import AddContent from '../../components/Add Content/AddContent'; 
import Post from '../../components/TweetPost/Post'; 

import UserBackground from "../../assets/image-17.png"; 
import UserAvatar from "../../assets/tweet-2-user-avatar.svg"; 
import avatar from '../../assets/tweet-1-user-avatar.svg';

export default function UserProfile() {
  return (
    <>
    <section className='flex flex-col h-screen'>
        <AddContent onClick={()=>{}} />

        <ProfileHeader 
            userBackground={UserBackground}
            userImage={UserAvatar}
            userFullName="hello hello"
            userName= "@aaryaString"
            bio="This is the bio text."
            bioLink="example.com"
            joinedAt="September 2018"
            following="213"
            followers="118"
        />

        <div className="flex flex-col w-full px-[0.0625] items-start relative pt-1">
            <Post 
                meta={{
                comments: 1, reposts:3, likes:4, views:123
                }}
                post={{
                    id : 1, 
                    text : `An error occurred during a connection to twitter.com. PR_CONNECT_RESET_ERROR\n

                    \nError code: PR_CONNECT_RESET_ERROR\n
                    
                    \nThe page you are trying to view cannot be shown because the authenticity of the received data could not be verified.
                    \nPlease contact the website owners to inform them of this problem.`, 
                    postedAt : "02/23/2023", 
                    postedBy: { 
                        userid : 1235, 
                        userName : "jakaf", 
                        userFullName : "Jakallope",
                        userImage: avatar
                    }   
                }}
            />

            <Post 
                meta={{
                comments: 1, reposts:3, likes:4, views:123
                }}
                post={{
                    id : 1, 
                    text : `An error occurred during a connection to twitter.com. PR_CONNECT_RESET_ERROR\n
                    \nThe page you are trying to view cannot be shown because the authenticity of the received data could not be verified.`, 
                    postedAt : "02/23/2023", 
                    postedBy: { 
                        userid : 1235, 
                        userName : "jakaf", 
                        userFullName : "Jakallope",
                        userImage: UserAvatar
                    }   
                }}
            />

            <Post 
                meta={{
                comments: 1, reposts:3, likes:4, views:123
                }}
                post={{
                    id : 1, 
                    text : `An error occurred during a connection to twitter.com. PR_CONNECT_RESET_ERROR\n
                    \nThe page you are trying to view cannot be shown because the authenticity of the received data could not be verified.`, 
                    postedAt : "02/23/2023", 
                    postedBy: { 
                        userid : 1235, 
                        userName : "jakaf", 
                        userFullName : "Jakallope",
                        userImage: avatar
                    }   
                }}
            />
        </div>
    </section>
    </>
  );
};
