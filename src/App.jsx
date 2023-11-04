import Button from "./components/Button/Button";
import ProfileHeader from "./components/Profile-Header/ProfileHeader";
import profilePhoto from "../public/images/user-avatar.svg"; 
import profileCover from "../public/images/profile-cover.svg"; 

export default function App() {
  return (
    <>
    <div className="bg-black"> 
      {/* <h1 className="flex justify-center text-3xl font-bold underline">
          Hello world!
        </h1>

        <Button variant="solid" type="primary" isDisabled={false}>
          Post
        </Button>

        <Button variant="solid" type="secondary" isDisabled={false}>
          Create Account
        </Button> */}

        <ProfileHeader props={
          {
            id: 1, 
            userName : "aarya", 
            userFullName : "Aarya", 
            bio : "Don't do it", 
            userImage : profilePhoto, 
            userBackground : profileCover, 
            following : 123, 
            followers : 123, 
            bioLink : "www.google.com", 
            joinedAt : "12 january 2302",
          }
        }/>

<Button variant="solid" type="secondary" isDisabled={false}>
          Create Account
        </Button>
    </div>
    </>
  ); 
}