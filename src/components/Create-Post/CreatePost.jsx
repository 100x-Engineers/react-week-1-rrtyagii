import React, { useState, useRef, useEffect } from 'react';
import Avatar from '../Avatar/Avatar';
import PageHeader from '../Page Header/PageHeader';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

export default function CreatePost({ userid, userFullName, userName, imageUrl, ...props }) {
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
    <div className='flex flex-col p-4 bg-black text-neutral-50' style={{ height: '100vh' }}>
      <PageHeader 
            showBackButton={true} 
            onBackClick={()=>{}} 
            actionButton={
                <Button
                type="primary" 
                variant="solid"
                width="w-32"
                onClick={()=>{console.log("Save button clicked")}}
            >
                Post
            </Button>
            }
        ></PageHeader>

      <div className='flex items-start'>
        <Avatar 
          imageUrl={imageUrl}
          userFullName={userFullName}
          userName={userName}
          showNameAndHandle={false}
          size="w-12 h-12"
        />
        <div className='relative flex-1 ml-4'>
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
          <div
            aria-hidden="true"
            className='absolute top-0 left-0 w-full overflow-hidden pointer-events-none'
            style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
          >
            <span>{before}</span>
            <span className='bg-red-500'>{after}</span>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex-1' />
        <div className={`${postText.length > maxCharacters ? "text-red-error" : "text-neutral-50"}`}>
          {postText.length}/{maxCharacters}
        </div>
      </div>
    </div>
  );
}; 

CreatePost.propTypes = {
  userid: PropTypes.number.isRequired,
  userFullName: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  props: PropTypes.object,
};
