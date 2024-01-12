import React, {useState, useContext} from 'react'
import Input from '../../components/Input/Input';
import PageHeader from '../../components/Page Header/PageHeader';
import Button from '../../components/Button/Button';
import { InitialUserContext } from '../../contexts/userContext';
import { URLs } from '../../Constants';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import { dateFormat } from '../../utils/date_format';


function SignUpStepUsername() {

    const navigate = useNavigate();
    const [username, setUserName] = useState('');
    const {form, setForm} = useContext(InitialUserContext);

    const displayDate = dateFormat(form);

    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setForm({
            ...form, 
            username
        });
    
        try {
            const response = await axios.post('http://localhost:5050/signup', {
                user_name: username,
                password: form.password,
                email: form.email,
                display_name: form.name,
                date_of_birth: displayDate
            });
            console.log(response);
            alert("navigating to next page")
            navigate(URLs.feed);
        } catch (error) {
            console.error(error);
        }
    }

    const onBackClick = () => {
        navigate(-1);
    }

    return (
    <>
    <article className='flex flex-col flex-grow bg-neutral-1000 min-h-screen mx-auto max-w-lg border-x border-x-neutral-600'>
        <section className=" gap-y-4 shrink-0 pt-0 px-1.24338rem pb-5 rounded-2xl text-neutral-50 mx-auto">
        <PageHeader showBackButton={true} onBackClick={onBackClick}>
            UserName
        </PageHeader>

        <div className="pt-3 flex flex-col items-start gap-2 self-stretch">
            <h3 className="font-inter font-bold text-2xl leading-normal">
                You'll need a username
            </h3>
            <p className="self-stretch text-neutral-500 font-inter text-sm font-normal leading-normal">
                Make sure it's 8 characters or more.
            </p>
        </div>

        <form className="flex flex-col pt-6 gap-10 items-start w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col w-full">
                <Input 
                    type="text" 
                    onChange={handleUserNameChange} 
                    width='w-full'  
                >
                    Username
                </Input>
            </div>

            <div className="flex flex-col items-center gap-3 flex-grow flex-shrink-0 basis-0 pt-56 w-full">
                    <Button 
                        type='secondary' 
                        variant='solid'
                        width="w-72"
                        padding="px-6 py-3"
                        isDisabled={username.length < 8}
                    >
                        Next
                    </Button>
            </div>
        </form>
    </section>
    </article>
    </>
  )
}

export default SignUpStepUsername