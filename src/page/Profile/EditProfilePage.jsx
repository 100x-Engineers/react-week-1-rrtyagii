import React, {useContext, useState} from 'react'

import { InitialUserContext } from '../../contexts/userContext';
import { TweetContext } from '../../contexts/tweetContext';
import { URLs } from '../../Constants';
import { useNavigate } from 'react-router-dom';

import EditProfileModal from '../../components/Edit Profile Modal/EditProfileModal';
import PageHeader from '../../components/Page Header/PageHeader';
import Button from '../../components/Button/Button';

export default function EditProfilePage() {
    const navigate = useNavigate();

    const { form, setForm } = useContext(InitialUserContext);

    const [editedUser, setEditedUser] = useState({
        id: form.id, 
        username: form.username, 
        name: form.name,
        bio: form.bio,
        userAvatar: form.userAvatar,
        userBackground: form.userBackground,
        bioLink: form.bioLink,
        location: form.location,
    });

    const handleFieldChange = (field, value) => {
        setEditedUser({
            ...editedUser, 
            [field]: value 
        });
    };

    const handleSave = () => {
        setForm({
            ...form,
            name: editedUser.name,
            bio: editedUser.bio,
            location: editedUser.location,
            bioLink: editedUser.bioLink,
        });
        navigate(URLs.profile);
    }; 
                    
  return (
    <div className='flex flex-col flex-grow min-h-screen mx-auto max-w-lg border-x border-x-neutral-600 text-neutral-50 p-4'>
        <PageHeader 
            showBackButton={true} 
            onBackClick={() => navigate(-1)} 
            actionButton={
                <Button
                type="secondary" 
                variant="solid"
                width="w-40"
                onClick={handleSave}
            >
                Save
            </Button>
            }
        >
            Edit Profile
        </PageHeader>
      <EditProfileModal 
        user={editedUser}
        onFieldChange={handleFieldChange}
        handleFormSubmit={handleSave}
      />
    </div>
  )
}
