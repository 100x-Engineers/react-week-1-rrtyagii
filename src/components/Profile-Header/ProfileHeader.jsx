import React from "react";

export default function ProfileHeader({props}){
    return (
        <>
            <section>
            <figure className="w-24.375rem h-[9.375rem] flex-shrink-0 bg-cover bg-no-repeat bg-custom-gray bg-custom-position">
                <img src={props.userBackground} alt="profile-cover" />
            </figure>
            </section>

            <article className="relative ml-5">
            <figure className="w-20 h-20 shrink-0 rounded-12.5rem border-4 border-neutral-1000 bg-cover bg-no-repeat bg-custom-gray bg-custom-position absolute top-[-2.5rem]">
                <img className="w-20 h-20" src={props.userImage} alt="User Avatar" />
            </figure>
            </article>

            <button class="absolute top-40 right-4 inline-flex w-32 px-5 py-2 justify-center items-center gap-2.5 rounded-4xl border border-custom-stroke shadow-lc backdrop-blur-2xl bg-neutral-1000">
                <div class="text-center font-medium font-inter text-neutral-50 text-base leading-normal ">
                    Edit profile
                </div>
            </button>

            <article className="flex w-22.5rem flex-col justify-end items-start gap-4 ml-6 mr-4 mt-14">

                <section className="flex flex-col justify-end items-start gap-1">
                    <div className="font-inter text-xl text-neutral-50 leading-normal font-bold">
                    {props.userFullName}
                    </div>
                    <div className="font-inter text-[0.9375rem] font-normal leading-normal text-neutral-500">
                    {props.userName}
                    </div>
                </section>

                <section className="font-inter text-base font-normal leading-normal text-neutral-50">
                    {props.bio}
                </section>

                <section className="flex flex-row items-start gap-5">
                    <div className="flex items-center gap-1">

                        <figure className="w-3.5 h-3.5 fill-neutral-500">
                            <img src="/public/images/link-icon.svg" alt="link"/>
                        </figure>

                        <div className="text-twitter-blue-default font-inter font-normal leading-normal text-base">
                            {props.bioLink}
                        </div>
                    </div>

                    <div className="flex items-center gap-1">
                        <figure className="w-3.5 h-3.5 fill-neutral-500">
                            <img src="/public/images/calendar-icon.svg" alt="calendar" />
                        </figure>

                        <div className="text-neutral-500 font-inter font-normal leading-normal text-base">
                            {props.joinedAt}
                        </div>
                    </div>

                </section>

                <section className="flex flex-row items-start gap-5">
                    <div className="flex items-center gap-1">
                        <div className="text-neutral-50 font-inter font-bold leading-normal text-base">
                           {props.following}
                        </div>
                        <div className="text-neutral-500 font-inter font-normal leading-normal text-base">
                            Following
                        </div>
                    </div>

                    <div className="flex items-center gap-1">
                        <div className="text-neutral-50 font-inter font-bold leading-normal text-base">
                            {props.followers}
                        </div>
                        <div className="text-neutral-500 font-inter font-normal leading-normal text-base">
                            Followers
                        </div>
                    </div>
                </section>
            </article>
        </>
    ); 

}