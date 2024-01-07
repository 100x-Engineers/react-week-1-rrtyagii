import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
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
import { AuthProvider } from "./contexts/AuthContext";
import ComposeTweet from "./page/Compose Tweet/ComposeTweet";
import { useAuth } from "./contexts/AuthContext";
import SignUpStepUsername from "./page/Sign Up Flow/SignUpStepUsername";

//Public Routes
// Protected Routes

// const ProtectedRoutes = ({children})=>{
//   const {token} = useAuth();
//   return token ? children : <Navigate to={URLs.login}/>;
// }

// const ProtectedRoutesSignUp = ({children})=>{
//   const {token} = useAuth();
//   return token ?  children : <Navigate to={URLs.signUpStep1}/>;
// }


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
    element: <SignUpStep2/>,
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
    path: URLs.username,
    element: <SignUpStepUsername/>,
    errorElement: <ErrorPage />,
  },
  {
    path: URLs.feed,
    element: <HomeFeed/>,
    errorElement: <ErrorPage />,
  },
  {
    path: URLs.profile,
    element: <UserProfile/>,
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
    <AuthProvider>
      <InitialUserProvider>
        <TweetContextProvider>
          <RouterProvider router={BrowserRouter} />
        </TweetContextProvider>
      </InitialUserProvider>
    </AuthProvider>
  );
}