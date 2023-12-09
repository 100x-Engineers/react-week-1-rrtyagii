import PageHeader from '../../components/Page Header/PageHeader'; // Path: src/components/PageHeader/PageHeader.jsx
import Avatar from '../../components/Avatar/Avatar'; // Path: src/components/Avatar/Avatar.jsx
import TweetLists from '../../components/Tab/TweetLists'; // Path: src/components/Tab/TweetLists.jsx 
import Post from '../../components/TweetPost/Post'; // Path: src/components/TweetPost/Post.jsx w-24.375rem
import NavigationTab from '../../components/Navigation Tab/Navigation_Tab'; // Path: src/components/Navigation/NavigationTab.jsx
import AddContent from '../../components/Add Content/AddContent'; // Path: src/components/Add Content/AddContent.jsx

import Logo100 from '../../assets/login-100.svg'; 
import LogoX from '../../assets/login-group-27162.svg';
import avatar from '../../assets/tweet-1-user-avatar.svg';

import { InitialUserContext } from '../../contexts/userContext';
import { useContext } from 'react';

const LoginHeader = () => {
    return( 
    <>
    <div id="100x-group" className="flex gap-0 mx-auto">
        <img className="w-[2.56013rem] h-[1.12663rem] fill-neutral-50" src={Logo100} alt={100} />
        <img src={LogoX} alt="x"/>
    </div>
    </>
    ); 
}; 


export default function HomeFeed() {
    const userData = useContext(InitialUserContext);
    const form = userData.form;
    console.log('form in homeFeed:', form);
  return (
    <>   
    <article className='flex flex-col flex-grow bg-neutral-1000 min-h-screen mx-auto max-w-lg border-x border-x-neutral-600'>
    <section className="flex flex-col h-screen">

        <NavigationTab/>
        <AddContent onClick={()=>{}}/>

        <article className='flex flex-col overflow-y-auto pb-16 scrollbar-hide'>

            <div className='flex mt-5 border-b border-b-neutral-700'>
                <div className='ml-4'>
                    <Avatar imageUrl={avatar} showNameAndHandle={false} size="w-11 h-11"/>
                </div>
                <div className='flex mx-auto'>
                    <PageHeader>
                        <LoginHeader/>
                    </PageHeader>
                </div>
            </div>

            <div className='pb-3'>
                <TweetLists/>
            </div>

            <div className="flex flex-col w-full px-[0.0625] items-start relative">
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
                            userImage: avatar
                        }   
                    }}
                />
            </div>
        </article>
    </section>
   </article>
    </>
  )
}

        // <section className="bg-transparent flex py-3 px-8 justify-center items-center gap-[0.625rem] absolute top-[47.5rem] left-[5.625rem] bottom-[16.6875] rounded-[6.25rem] bg-searchbar-fill">
        //     <button className="text-base leading-normal font-inter font-medium text-neutral-50">
        //     Copied to clipboard.
        //     </button>
        // </section>
        {/* Add Content Button */}