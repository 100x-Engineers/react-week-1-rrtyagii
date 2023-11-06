import UserAvatar from "./images/user-avatar.svg"
import ProfileHeader from "./components/Profile-Header/ProfileHeader";
import UserBackground from "./images/profile-cover.svg"; 

export default function App() {
  return (
    <>
    <div className="min-h-screen bg-black"> 

      <ProfileHeader 
        props={{
          userBackground: UserBackground, // assuming this is a variable
          userImage: UserAvatar, // assuming this is a variable
          userFullName: "hello hello",
          userName: "@aaryaString",
          bio: "This is the bio text.",
          bioLink: "example.com",
          joinedAt: "September 2018",
          following: "213",
          followers: "118",
        }}
      />
    </div>
    </>
  ); 
}