import PageHeader from '../../components/Page Header/PageHeader'; // Path: src/components/PageHeader/PageHeader.jsx
import Avatar from '../../components/Avatar/Avatar'; // Path: src/components/Avatar/Avatar.jsx
import TweetLists from '../../components/Tab/TweetLists'; // Path: src/components/Tab/TweetLists.jsx 
import Post from '../../components/TweetPost/Post'; // Path: src/components/TweetPost/Post.jsx w-24.375rem
import NavigationTab from '../../components/Navigation Tab/Navigation_Tab'; // Path: src/components/Navigation/NavigationTab.jsx
import AddContent from '../../components/Add Content/AddContent'; // Path: src/components/Add Content/AddContent.jsx

import Logo100 from '../../assets/login-100.svg'; 
import LogoX from '../../assets/login-group-27162.svg';
import avatar from '../../assets/tweet-1-user-avatar.svg';

import { useContext } from 'react';
import { TweetContext } from '../../contexts/tweetContext';
import { Link, useNavigate} from 'react-router-dom';
import { URLs } from '../../Constants';

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
    const navigate = useNavigate();
    const {userTweets, handleLike, handleRetweet} = useContext(TweetContext);

    function handleAddContentClick() {
        navigate(URLs.compose);
    }

  return (
    <>   
    <div className='flex flex-col flex-grow min-h-screen mx-auto max-w-lg border-x border-x-neutral-600'>
        <section className="flex flex-col h-screen">
        <NavigationTab/>
        <AddContent onClick={handleAddContentClick}/>

        <div className='flex flex-col overflow-y-auto pb-16 scrollbar-hide'>

            <div className='flex mt-5 border-b border-b-neutral-700'>
                <Link className='ml-4' to={URLs.profile}>
                    <Avatar imageUrl={avatar} showNameAndHandle={false} size="w-11 h-11"/>
                </Link>
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