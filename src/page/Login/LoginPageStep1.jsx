import { useState, useContext } from "react";
import PageHeader from "../../components/Page Header/PageHeader";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Divider from "../../components/Onboarding/Divider";
import { URLs } from "../../Constants";
import { Link, useNavigate} from "react-router-dom";
import { InitialUserContext } from "../../contexts/userContext";
import { login } from "../../services/authentication";

import Logo100 from '../../assets/login-100.svg'; 
import LogoX from '../../assets/login-group-27162.svg';
import Google from "../../assets/google.svg";

const LoginHeader=()=>{
    return( 
    <>
    <div id="100x-group" className="flex gap-0 mx-auto ">
      <img className="w-[2.56013rem] h-[1.12663rem] fill-neutral-50" src={Logo100} alt={100} />
      <img src={LogoX} alt="x" />
    </div>
    </>
    ); 
  }

export default function LoginPageStep1() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { form, setForm } = useContext(InitialUserContext);

    // const mockEmail = "batman@example.com";
    // const mockPassword = "gothamrocks";

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(form.email, form.password);
            
            if (response.ok) {
                const data = await response.json(); 
                setForm({
                    ...form,
                    email: email,
                    password: password,
                    token: data.token,
                    isLoggedIn: true,
                
                })
                console.log("Login successful", data);
                navigate(URLs.feed);
            } else {
                const errorData = await response.json();
                console.log(`Login failed with status: ${response.status}`, errorData);
            }
        } catch (error) {
            console.error("Error during login", error);
        }
    };
    
    

    return(
        <>
        <section className='flex w-full flex-grow bg-neutral-1000 min-h-screen mx-auto max-w-lg flex-col border-x border-x-neutral-600 p-3 gap-4'>
            <div className="flex items-center">
                <div className='flex'>
                    <PageHeader showCloseButton={true}/>
                </div>
                <div className="mx-auto">
                    <LoginHeader/>
                </div>
            </div>

            <section className="flex flex-col justify-center gap-y-8 pt-8">
                <div className="mx-auto">
                    <div className=" text-neutral-50 font-inter font-extrabold leading-normal text-3xl self-stretch">
                        Sign in to 100x
                    </div>
                </div>

                <div className="mx-auto">
                    <Button 
                        type="secondary"
                        padding="py-3 px-4"
                        width="w-80"
                    >
                        <img className="w-[1.25rem] h-[1.25rem] fill-neutral-50" src={Google} alt="Google" />
                        <span className="ml-2">Sign in with Google</span>
                    </Button>
                </div>
                
                <div className="px-16">
                    <Divider text="or" orientation="horizontal"/>
                </div>

                <div className="flex flex-col justify-center mx-auto gap-y-8">
                    <form action="" className="mx-auto gap-y-9" onSubmit={handleOnSubmit}>
                        <Input 
                            type="text"
                            placeholder="Email"
                            padding="py-2 px-5"
                            width="w-full"
                            value={email}
                            onChange={handleEmailChange}
                        >
                            Email
                        </Input>

                        <Input 
                            type="password"
                            placeholder="Password"
                            padding="py-2 px-5"
                            width="w-full"
                            value={password}
                            onChange={handlePasswordChange}
                        >Password</Input>

                        <Button 
                            type="secondary"
                            padding="py-3 px-4"
                            width="w-80"
                            isDisabled={email === "" || password === ""}
                            onClick={() => {
                                setForm({
                                    ...form,
                                    email: email,
                                    password: password,
                                });
                            }}
                        >
                            Next
                        </Button>
                    </form>

                    <Button
                        type="secondary"
                        variant="outline"
                        padding="py-3 px-4"
                        width="w-80"
                    >
                        Forgot password
                    </Button>

                    <div className="flex flex-col items-start gap-5 self-stretch">
                        <div className="text-neutral-50 font-inter text-base font-normal leading-4">
                            Don't have an account? <Link to={URLs.signUpStep1}><span className="text-twitter-blue-default">Sign Up</span></Link>
                        </div>
                    </div>
                </div>
            </section>
        </section>
        </>
    ); 
};