import UserAvatar from "./images/user-avatar.svg"
import ProfileHeader from "./components/Profile-Header/ProfileHeader";
import UserBackground from "./images/profile-cover.svg"; 
import Post from "./components/TweetPost/Post";

export default function App() {
  return (
    <>
    <div className="min-h-screen bg-black"> 

      <Post 
        meta={{
          comments: 1, reposts:3, likes:4, views:123
        }}
        post={{
          id : 1, 
          text : `An error occurred during a connection to twitter.com. PR_CONNECT_RESET_ERROR\n

          \nError code: PR_CONNECT_RESET_ERROR\n
          
          \nThe page you are trying to view cannot be shown because the authenticity of the received data could not be verified.
          \nPlease contact the website owners to inform them of this problem.`, 
          postedAt : "02/23/2023", 
          postedBy: { 
            userid : 1235, 
            userName : "jakaf", 
            userFullName : "Jakallope",
            userImage: UserAvatar
          }
        }}
      />
      {/* <ProfileHeader 
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
      /> */}

    </div>
    </>
  ); 
}