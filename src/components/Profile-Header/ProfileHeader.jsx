import React from "react";
import Avatar from "../Avatar/Avatar";
import BioLinkImage from "../../images/link-icon.svg";
import CalendarIcon from "../../images/calendar-icon.svg";
import LinkWithIcon from "./LinksWithIcon";
import SocialStat from "./SocialStats";
import Button from "../Button/Button"

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
                <figure className="w-full h-[9.375rem] flex-shrink-0 bg-cover bg-no-repeat bg-custom-gray bg-custom-position">
                    <img src={userBackground} alt="profile-cover" />
                </figure>
            </section>

            <div className="relative ml-5">
            <Avatar 
                imageUrl={userImage}
                userName={userFullName}
                userHandle={userName.substring(1)}
                orientation="vertical"
                borderRadius ="rounded-12.5rem"
                size="w-20 h-20"
            />
            </div>

            {/* <button className="absolute top-40 right-4 inline-flex w-32 px-5 py-2 justify-center items-center gap-2.5 rounded-4xl border border-custom-stroke shadow-lc backdrop-blur-2xl bg-neutral-1000">
                <div className="text-center font-medium font-inter text-neutral-50 text-base leading-normal ">
                    Edit profile
                </div>
            </button> */}

            <Button 
                type="secondary" 
                variant="outline" 
                width="w-32"
            >
                Edit Profile
            </Button>

            <div className="flex w-full flex-col justify-end items-start gap-1 ml-5 mr-4 mt-2">
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
}