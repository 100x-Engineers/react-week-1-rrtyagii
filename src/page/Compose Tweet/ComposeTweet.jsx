import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { URLs } from '../../Constants';
import { TweetContext } from '../../contexts/tweetContext';


import avatar from '../../assets/tweet-1-user-avatar.svg';
import Avatar from '../../components/Avatar/Avatar';
import PageHeader from '../../components/Page Header/PageHeader';
import Button from '../../components/Button/Button';
import PropTypes from 'prop-types';

export default function ComposeTweet({ userId, userFullName,userName,imageUrl, ...props}) {
    const navigate = useNavigate();
    const [postText, setPostText] = useState('');
    const textAreaRef = useRef(null);

    const handleChange = (event) => {
        event.preventDefault(); 
        setPostText(event.target.value);
    };

    const maxCharacters = 280;

    useEffect(() => {
        const textArea = textAreaRef.current;
        if (textArea) {
        textArea.style.height = 'auto';
        textArea.style.height = textArea.scrollHeight + 'px';
        }
    }, [postText]);

    const getHighlightedText = (text, maxChars) => {
        if (text.length <= maxChars) {
        return { before: text, after: '' };
        }

        return { before: text.substring(0, maxChars), after: text.substring(maxChars) };
    };

    const { before, after } = getHighlightedText(postText, maxCharacters);

    return (
        <div className='flex flex-col flex-grow min-h-screen mx-auto max-w-lg border-x border-x-neutral-600 text-neutral-50'>
            <div className='p-4 mb-16'>
                <PageHeader 
                    showBackButton={true} 
                    onBackClick={()=>{navigate(-1)}}
                    actionButton={
                        <Button
                        type="primary" 
                        variant="solid"
                        width="w-40"
                        onClick={()=>{console.log("Post button clicked")}} //TODO: updates the tweet to tweet context
                    >
                        Post
                    </Button>
                    }
                ></PageHeader>
                
                <div className='flex items-start'>
                    <Avatar 
                    imageUrl={avatar} //TODO: change to imageUrl that we get from userContext
                    showNameAndHandle={false}
                    size="w-12 h-12"
                    />

                    <div className='relative flex-1 ml-4 '>
                        <textarea 
                            ref={textAreaRef}
                            className='w-full bg-transparent border-none outline-none resize-none'
                            name="tweetInput" 
                            id="compose-tweet"
                            placeholder="What's happening?!"
                            value={postText}
                            onChange={handleChange}
                            style={{ padding: 0 }}
                        />

                        <div aria-hidden="true" className='absolute top-0 left-0 w-full overflow-hidden pointer-events-none'style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                            <span>{before}</span>
                            <span className='bg-red-500'>{after}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex px-6 border-t border-t-neutral-500 pt-2'>
                <div className={`${postText.length > maxCharacters ? "text-red-error" : "text-neutral-500"}`}>
                    {postText.length}/{maxCharacters}
                </div>
            </div>
        </div>
    );
}; 

ComposeTweet.propTypes = {
  userId: PropTypes.string,
  userFullName: PropTypes.string,
  userName: PropTypes.string,
  imageUrl: PropTypes.string,
  props: PropTypes.object,
};