import React from "react";
import Avatar from "../Avatar/Avatar";
import BioLinkImage from "../../assets/link-icon.svg";
import CalendarIcon from "../../assets/calendar-icon.svg";
import LinkWithIcon from "./LinksWithIcon";
import SocialStat from "./SocialStats";
import Button from "../Button/Button"

import PropTypes from "prop-types";

export default function ProfileHeader({
    userBackground,
    userImage,
    userFullName,
    userName,
    bio,
    bioLink,
    joinedAt,
    following,
    followers
}){
    return (
        <>
        <section className="flex-col">
            <img 
                    className="flex-shrink-0 bg-cover bg-no-repeat bg-custom-gray bg-custom-position object-fill w-full" 
                    src={userBackground} 
                    alt="profile-cover"
            />

            <div className="pl-5 relative -top-12 z-10">
                <Avatar 
                    imageUrl={userImage}
                    userName={userFullName}
                    userHandle={userName.substring(1)}
                    orientation="vertical"
                    borderRadius ="rounded-12.5rem"
                    size="w-20 h-20"
                />
            </div>
        </section>

        <Button 
            type="secondary" 
            variant="outline" 
            width="w-36"
            gap="gap-2.5"
            position="relative -top-[13%] left-[68%]"
        >
            Edit Profile
        </Button>

        <div className="flex flex-col justify-end items-start gap-1 ml-5 mr-4 -mt-[6.5rem]">
            <section className="font-Inter text-base font-normal leading-normal text-neutral-50">
                {bio}
            </section>

            <section className="flex flex-row items-start gap-3">
                {bioLink && (
                <LinkWithIcon
                    imageUrl={BioLinkImage}
                    altText={`${userName} bio link`}
                    linkText={bioLink}
                />
                )}

                <LinkWithIcon
                    imageUrl={CalendarIcon}
                    altText={`${userName} calendar`}
                    linkText={joinedAt}
                />
            </section>

            <section className="flex flex-row items-start gap-3">
                <SocialStat number={following} text="Following" />
                <SocialStat number={followers} text="Followers" />
            </section>
        </div>
        </>
    ); 
}; 

ProfileHeader.propTypes = {
    userBackground: PropTypes.string,
    userImage: PropTypes.string,
    userFullName: PropTypes.string,
    userName: PropTypes.string,
    bio: PropTypes.string,
    bioLink: PropTypes.string,
    joinedAt: PropTypes.string,
    following: PropTypes.number,
    followers: PropTypes.number,
};