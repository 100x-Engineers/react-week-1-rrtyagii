import Avatar from "./components/Avatar/Avatar";
import UserAvatar from "./images/user-avatar.svg"
import ProfileHeader from "./components/Profile-Header/ProfileHeader";

export default function App() {
  return (
    <>
    <div className="min-h-screen bg-black"> 
      {/* <Avatar 
        imageUrl={UserAvatar}
        userName = {"aaray"}
        userHandle = {"Aarya"}
        showNameAndHandle = {true}
      /> */}

<ProfileHeader 
  props={{
    userBackground: UserAvatar, // assuming this is a variable
    userImage: UserAvatar, // assuming this is a variable
    userFullName: "hello hello",
    userName: "hellohello",
    bio: "This is the bio text.",
    bioLink: "http://example.com",
    joinedAt: "September 2018",
    following: "213",
    followers: "118",
  }}
/>


    </div>
    </>
  ); 
}

// className="min-h-screen bg-black"