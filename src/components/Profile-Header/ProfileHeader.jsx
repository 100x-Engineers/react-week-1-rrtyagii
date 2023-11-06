import React from "react";
import Avatar from "../Avatar/Avatar";

export default function ProfileHeader({props}){
    const {
        userBackground,
        userImage,
        userFullName,
        userName,
        bio,
        bioLink,
        joinedAt,
        following,
        followers
    } = props;

    return (
        <>
            <section>
                <figure className="w-24.375rem h-[9.375rem] flex-shrink-0 bg-cover bg-no-repeat bg-custom-gray bg-custom-position">
                    <img src={userBackground} alt="profile-cover" />
                </figure>
            </section>

            <article className="relative ml-5">
            <Avatar 
                imageUrl={userImage}
                userName={userFullName}
                userHandle={userName.substring(1)}
                orientation="vertical"
                borderRadius ="rounded-12.5rem"
                size="w-20 h-20"


            />
            </article>

            <button class="absolute top-40 right-4 inline-flex w-32 px-5 py-2 justify-center items-center gap-2.5 rounded-4xl border border-custom-stroke shadow-lc backdrop-blur-2xl bg-neutral-1000">
                <div class="text-center font-medium font-inter text-neutral-50 text-base leading-normal ">
                    Edit profile
                </div>
            </button>

        </>
    ); 

}