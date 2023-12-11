import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { URLs } from "./Constants";
import ErrorPage from "./page/error-pages";
import HomeFeed from "./page/Home Feed/HomeFeed";
import Login from "./page/Login/Login";
import SignUpStep1 from "./page/Sign Up Flow/SignUpStep1";
import SignUpStep2 from "./page/Sign Up Flow/SignUpStep2";
import SignUpStep3 from "./page/Sign Up Flow/SignUpStep3";
import SignUpStep4 from "./page/Sign Up Flow/SignUpStep4";
import UserProfile from "./page/Profile/UserProfile";

import { InitialUserProvider } from "./contexts/userContext";
import { TweetContextProvider } from "./contexts/tweetContext";
import ComposeTweet from "./page/Compose Tweet/ComposeTweet";

const BrowserRouter = createBrowserRouter([
  {
    path: URLs.home,
    element: <Login />,
    errorElement: <ErrorPage />,
  }, 
  {
    path: URLs.signUpStep1,
    element: <SignUpStep1 />,
    errorElement: <ErrorPage />,
  },
  {
    path: URLs.signUpStep2,
    element: <SignUpStep2 />,
    errorElement: <ErrorPage />,
  },
  {
    path: URLs.signUpStep3,
    element: <SignUpStep3/>,
    errorElement: <ErrorPage />,
  },
  {
    path: URLs.signUpStep4,
    element: <SignUpStep4/>,
    errorElement: <ErrorPage />,
  },
  {
    path: URLs.feed,
    element: <HomeFeed />,
    errorElement: <ErrorPage />,
  },
  {
    path: URLs.profile,
    element: <UserProfile />,
    errorElement: <ErrorPage />,
  },
  {
    path: URLs.compose, 
    element: <ComposeTweet/>,
    errorElement: <ErrorPage />,
  }
]);

export default function App() {

  return (
    <InitialUserProvider>
      <TweetContextProvider>
        <RouterProvider router={BrowserRouter} />
      </TweetContextProvider>
    </InitialUserProvider>
  );
}


/* <div className="min-h-screen bg-black"> 

  // const user = {
  //   id: 'user_1',
  //   userName: 'johndoe',
  //   userFullName: 'John Doe',
  //   bio: 'This is a bio text for John Doe.',
  //   userImage: userAvatar, // This should be a valid path to an image
  //   Userbackground: userBackground, // This should be a valid path to an image
  //   bioLink: 'https://example.com'
  // };

  const topics = [
    { topic: '#Madurai', count: '2,345', isSelected: false },
    { topic: '#Chennai', count: '2,345', isSelected: false },
    { topic: '#Coimbatore', count: '2,345', isSelected: false },
    { topic: '#TamilNadu', count: '2,345', isSelected: false },
    { topic: '#Delhi', count: '2,345', isSelected: false },
  ];
        <CreatePost 
        userid={user.id}
        userFullName={user.userFullName}
        userName = {user.userName}
        imageUrl = {user.userImage}
        />

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
  /> 

  // // import UserProfile from "./page/Profile/UserProfile";
// // import HomeFeed from "./page/Home Feed/HomeFeed";
// import EditProfile from "./components/Edit Profile Modal/EditProfile";
// import CreatePost from "./components/Create-Post/CreatePost";
// import userAvatar from "./assets/tweet-1-user-avatar.svg";
// import userBackground from "./assets/image-17.png";
  
  
  
  */