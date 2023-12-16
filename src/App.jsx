import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { URLs } from "./Constants";
import ErrorPage from "./page/error-pages";
import HomeFeed from "./page/Home Feed/HomeFeed";
import OnboardingPage from "./page/Onboarding/OnboardingPage";
import LoginPageStep1 from "./page/Login/LoginPageStep1";
import SignUpStep1 from "./page/Sign Up Flow/SignUpStep1";
import SignUpStep2 from "./page/Sign Up Flow/SignUpStep2";
import SignUpStep3 from "./page/Sign Up Flow/SignUpStep3";
import SignUpStep4 from "./page/Sign Up Flow/SignUpStep4";
import UserProfile from "./page/Profile/UserProfile";
import EditProfilePage from "./page/Profile/EditProfilePage";

import { InitialUserProvider } from "./contexts/userContext";
import { TweetContextProvider } from "./contexts/tweetContext";
import ComposeTweet from "./page/Compose Tweet/ComposeTweet";

const BrowserRouter = createBrowserRouter([
  {
    path: URLs.home,
    element: <OnboardingPage/>,
    errorElement: <ErrorPage />,
  }, 
  {
    path: URLs.login,
    element: <LoginPageStep1/>,
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
  },
  {
    path: URLs.edit,
    element: <EditProfilePage/>,
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