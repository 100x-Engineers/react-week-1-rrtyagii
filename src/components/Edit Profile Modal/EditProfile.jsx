import React from 'react'; 

import Input from '../Input/Input'; 
import PageHeader from '../Page Header/PageHeader';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';

import PropTypes from 'prop-types';

export default function EditProfile({user: {id, userName, userFullName, bio, userImage, Userbackground, bioLink}}) {
  return (
    <>
    <article className='p-5'>
        <PageHeader 
            showBackButton={true} 
            onBackClick={()=>{}} 
            actionButton={
                <Button
                type="secondary" 
                variant="solid"
                width="w-32"
                onClick={()=>{console.log("Save button clicked")}}
            >
                Save
            </Button>
            }
        >
            Edit Profile
        </PageHeader>
        <section className="flex-col">
            <img 
                    className="flex-shrink-0 bg-cover bg-no-repeat bg-custom-gray bg-custom-position object-fill w-full" 
                    src={Userbackground} 
                    alt="profile-cover"
            />

            <div className="pl-1 absolute top-48">
                <Avatar 
                    imageUrl={userImage}
                    showNameAndHandle={false}
                />
            </div>
        </section>

        <section className='pt-12'>
            <form className="flex flex-col gap-5 self-stretch items-start"> 

                <Input type="text" onChange={()=>{}} inputValue={userFullName} width="w-full">
                    Name
                </Input>

                <Input type="text" onChange={()=>{}} inputValue={bio}  width="w-full">
                    Bio
                </Input>

                <Input type="text" onChange={()=>{}} width="w-full">
                    Location
                </Input>

                <Input type="text" onChange={()=>{}} inputValue={bioLink} width="w-full">
                    Website
                </Input>
            </form>
        </section>
    </article>
    </>
  );
};

EditProfile.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        userName: PropTypes.string.isRequired,
        userFullName: PropTypes.string.isRequired,
        bio: PropTypes.string.isRequired,
        userImage: PropTypes.string.isRequired,
        Userbackground: PropTypes.string.isRequired,
        bioLink: PropTypes.string.isRequired,
    })
};