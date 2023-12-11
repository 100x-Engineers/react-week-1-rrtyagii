import React from 'react'; 

import Input from '../Input/Input'; 
import Avatar from '../Avatar/Avatar';

import PropTypes from 'prop-types';

import CameraIcon from '../../assets/material-symbols-add-a-photo-outline.svg'
import CloseIcon from '../../assets/create-account-1-signup-close.svg';

export default function EditProfileModal({
    user,
    onFieldChange,
    handleFormSubmit,
    }
) {
    const {
        id, 
        username, 
        name,
        bio,
        userAvatar,
        userBackground,
        bioLink,
        location,
    } = user;
  return (
    <>
    <article className='p-5 relative'>
        <section className="flex-col">
            <img 
                className="flex-shrink-0 bg-cover bg-no-repeat bg-custom-gray bg-custom-position object-fill w-full h-lg" 
                src={userBackground} 
                alt="profile-cover"
            />

            <div className='flex flex-row gap-8 absolute right-40 top-12 w-28 h-28'>
                <button className="" onClick={()=>{console.log("change background button clicked")}}>
                    <img src={CloseIcon} alt="Change background" />
                </button>

                <button className="" onClick={()=>{console.log("change background button clicked")}}>
                    <img className='fill-neutral-1000' src={CameraIcon} alt="Change avatar"/>
                </button>
            </div>

        </section>

        <div className="pl-1 absolute top-36">
            <Avatar 
                imageUrl={userAvatar}
                showNameAndHandle={false}
                size="w-24 h-24"
            />
            <button className="absolute bottom-9 right-9" onClick={()=>{console.log("change background button clicked")}}>
                <img className='fill-neutral-1000' src={CameraIcon} alt="Change avatar"/>
            </button>
        </div>

        <section className='pt-20'>
            <form className="flex flex-col gap-5 self-stretch items-start" onSubmit={handleFormSubmit}> 

                <Input 
                    id="name"
                    name="name"
                    type="text" 
                    onChange={(e)=>onFieldChange('name', e.target.value)} 
                    inputValue={name} width="w-full">
                    Name
                </Input>

                <Input 
                    id="bio"
                    name="bio"
                    type="text" 
                    onChange={(e)=>onFieldChange('bio', e.target.value)}
                    inputValue={bio}  
                    width="w-full"
                >
                    Bio
                </Input>

                <Input 
                    id="location"
                    name="location"
                    type="text" 
                    onChange={(e)=>onFieldChange('location', e.target.value)} 
                    inputValue={location} 
                    width="w-full"
                >
                    Location
                </Input>

                <Input 
                    id="bioLink"
                    name="bioLink"
                    type="text" 
                    onChange={(e)=>onFieldChange('bioLink', e.target.value)} 
                    inputValue={bioLink} 
                    width="w-full"
                >
                    Bio Link
                </Input>
            </form>
        </section>
    </article>
    </>
  );
};

EditProfileModal.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.string,
        userName: PropTypes.string,
        userFullName: PropTypes.string,
        bio: PropTypes.string,
        userImage: PropTypes.string,
        userBackground: PropTypes.string,
        bioLink: PropTypes.string,
    }), 
    onFieldChange: PropTypes.func,
    handleFormSubmit: PropTypes.func,
};