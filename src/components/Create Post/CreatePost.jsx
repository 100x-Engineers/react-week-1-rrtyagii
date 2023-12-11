import React, {useRef, useState, useEffect} from 'react';
import Avatar from '../Avatar/Avatar';
import PropTypes from 'prop-types';

export default function CreatePost({ user, postText, setPostText}) {
    const textAreaRef = useRef(null);
    const maxCharacters = 280;

    const getHighlightedText = (text, maxChars) => {
        return text.length <= maxChars ? { before: text, after: '' } : { before: text.substring(0, maxChars), after: text.substring(maxChars) };
      };
    
      const { before, after } = getHighlightedText(postText, maxCharacters);
    
      useEffect(() => {
        const textArea = textAreaRef.current;
        if (textArea) {
          textArea.style.height = 'auto';
          textArea.style.height = textArea.scrollHeight + 'px';
        }
      }, [postText]);

    return (
    <>
    <div className='flex items-start pb-8 border-b border-b-neutral-600'>
        <Avatar 
          imageUrl={user.userImage}
          userFullName={user.userFullName}
          userName={user.userName}
          showNameAndHandle={false}
          size="w-12 h-12"
        />

        <div className='relative flex-1 ml-4'>
          <textarea 
              ref={textAreaRef}
              className='w-full bg-transparent border-none outline-none resize-none'
              placeholder="What's happening?!"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              style={{ padding: 0 }}
          />
          <div aria-hidden="true" className='absolute top-0 left-0 w-full overflow-hidden pointer-events-none' style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
              <span>{before}</span>
              <span className='bg-red-500'>{after}</span>
          </div>
        </div>

    </div>

    <div className='text-sm pt-2 px-2'>
        <span className={postText.length > maxCharacters ? "text-red-error" : "text-neutral-500"}>
            {postText.length}/{maxCharacters}
        </span>
    </div>
    </>
  );
}

CreatePost.propTypes = {
  user: PropTypes.shape({
    userid: PropTypes.string,
    userName: PropTypes.string,
    userFullName: PropTypes.string,
    userImage: PropTypes.string,
  }).isRequired,
  postText: PropTypes.string.isRequired,
  setPostText: PropTypes.func.isRequired,
};
