import {useState, useEffect, useContext} from "react";
import { Link, useNavigate} from 'react-router-dom';
import axios from "axios";

import PageHeader from '../../components/Page Header/PageHeader'; 
import Tab from "../../components/Tab/Tab";
import Avatar from '../../components/Avatar/Avatar'; 
import Post from '../../components/TweetPost/Post'; 
import NavigationTab from '../../components/Navigation Tab/Navigation_Tab'; 
import AddContent from '../../components/Add Content/AddContent';

import { TweetContext } from '../../contexts/TweetContext';
import Logo100 from '../../assets/login-100.svg'; 
import LogoX from '../../assets/login-group-27162.svg';
import avatar from '../../assets/tweet-1-user-avatar.svg';

import { URLs } from '../../Constants';
import { timeSince } from "../../utils/date_format";


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
    const [feed, setFeed] = useState([]);
    const [followingFeed, setFollowingFeed] = useState([]);
    const [currentActive, setCurrentActive] = useState("For You");
    const [likeStatuses, setLikeStatuses] = useState({});

    const getFeed = async () => {
        try {
            const response = await fetch("http://localhost:5050/feed",{
                credentials: 'include'
            });
            const data = await response.json();
            setFeed(data);

            const likeStatuses = data.reduce((statuses, post) => {
                statuses[post.id] = post.is_liked === 1; // Ensure boolean conversion
                return statuses;
            }, {});
    
            setLikeStatuses(likeStatuses);

        } catch (error) {
            console.error(error);
        }
    };

    const getFollowingFeed = async () => {
        try {
            const response = await fetch("http://localhost:5050/feed/following", {
                credentials: 'include'
            });
            const data = await response.json();
            setFollowingFeed(data);

            setLikeStatuses(data.reduce((statuses, post) => {
                statuses[post.id] = post.is_liked === 1; // Ensure boolean conversion
                return statuses;
            }, {}));

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (currentActive === "For You") {
            getFeed();
        } else {
            getFollowingFeed();
        }
    }, [currentActive]);

    function handleAddContentClick() {
        navigate(URLs.compose);
    }

    function handleTabClick(tabName) {
        setCurrentActive(tabName);
    }

    const handleLike = async (postId) => {
        try {

            const response = await axios.put(
                'http://localhost:5050/post/like',
                {
                    post_id: postId,
                    is_liked: !likeStatuses[postId],
                },
                {
                    withCredentials: true,
                }
            );

            setLikeStatuses(prevStatuses => ({
                ...prevStatuses,
                [postId]: response.data.has_liked === 1, // Ensure boolean conversion
            }));
        } catch (error) {
            console.error(error);
        }
    };

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

            <nav className="w-full flex px-20 py-5 justify-center items-center self-stretch border-b border-b-neutral-700 gap-20">
                <Tab tabName="For You" activeTab={currentActive} onClick={handleTabClick} />
                <Tab tabName="Following" activeTab={currentActive} onClick={handleTabClick} />
            </nav>


            <div className="flex flex-col w-full px-[0.0625] items-start relative">
                {
                    (currentActive === "For You" ? feed : followingFeed)?.length > 0 ?
                    (currentActive === "For You" ? feed : followingFeed).map((post) => {
                        const meta = {
                            comments: post.replies_count, 
                            reposts: post.repost_count, 
                            likes: post.likes_count, 
                            views: post.views,
                            isLiked: likeStatuses[post.id] || false,
                            isRetweeted: post.isRetweeted
                        }; 
                        const postInfo = {
                            id: post.id, 
                            text: post.content, 
                            postedAt: timeSince(post.posted_at), 
                            postedBy: {
                                userId: post.User.id,
                                userName: post.User.user_name, 
                                userFullName: post.User.display_name,
                                userImage: post.User.profile_picture_url
                            }
                        };
                        return (
                        <Post 
                            key={post.id}
                            meta={meta} 
                            post={postInfo} 
                            onLike={() => handleLike(Number(post.id))}
                            onRetweet={() => handleRetweet(post.id)}
                        />)
                    }) : <p>No posts to display</p>
                }
            </div>
        </div>
    </section>
   </div>
    </>
  );
};