import React, { useContext, useState } from 'react'

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import DatePicker from '../../components/DatePicker/DatePicker';
import PageHeader from '../../components/Page Header/PageHeader';

import { URLs } from '../../Constants';
import { Link, useNavigate} from 'react-router-dom';
import { InitialUserContext } from '../../contexts/userContext';

export default function SignUpStep1() {
    const navigate = useNavigate();

    const {form, setForm} = useContext(InitialUserContext);
    const [inputValue, setInputValue] = useState({
        name: '',
        email: '',
        day: 1,
        month: 1,
        year: 2023,
    });

    function handleOnSubmit(event){
        event.preventDefault();
        setForm(prevform => ({
            ...prevform,
            name: inputValue.name,
            email: inputValue.email,
            day: parseInt(inputValue.day, 10),
            month: parseInt(inputValue.month, 10),
            year: parseInt(inputValue.year, 10),
        }));
        navigate(URLs.signUpStep2);
    };

    const handleOnChange = (event) => {
        const { id, value } = event.target;
        setInputValue(prevState => ({
            ...prevState,
            [id]: value,
        }));
    };

    const onBackClick = () => {
        navigate(-1);
    }


  return (
    <>
    <article className='flex flex-col flex-grow bg-neutral-1000 min-h-screen mx-auto max-w-lg border-x border-x-neutral-600'>
        <section className=" gap-y-4 shrink-0 pt-0 px-1.24338rem pb-5 rounded-2xl text-neutral-50 mx-auto">
            <PageHeader showBackButton={true} onBackClick={onBackClick}>
                Step 1 of 4
            </PageHeader>

            <h3 className="flex flex-col py-5 self-stretch items-start font-inter font-bold text-2xl leading-normal">
                    Create your account
            </h3>

            <form className="flex flex-col gap-5 self-stretch items-start" onSubmit={handleOnSubmit}> 

                <Input 
                    id="name"
                    type="text" 
                    value={inputValue.name} 
                    width="w-full"
                    onChange={handleOnChange}
                >
                    Name
                </Input>

                <Input 
                    id="email"
                    type="email" 
                    onChange={handleOnChange} 
                    value={inputValue.email} 
                    width="w-full"
                >
                    Email
                </Input>

                <div className="flex flex-col items-start gap-2 w-full">
                    <p className="text-base font-bold font-inter leading-normal text-neutral-50">
                        Date of birth
                    </p>
                    <p className="text-secondary-gray font-inter text-sm font-normal leading-normal">
                        This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
                    </p>
                    <DatePicker handleInputChange={handleOnChange}/>
                </div>

                <div className="flex flex-col items-center gap-3 flex-grow flex-shrink-0 basis-0 pt-56 mx-auto">
                    {/* <Link to={URLs.signUpStep2}>
                    </Link> */}
                    <Button 
                        type='secondary' 
                        variant='solid'
                        width="w-80"
                        padding="px-6 py-5"
                        isDisabled={inputValue.name === '' || inputValue.email === '' }
                        onClick = {handleOnSubmit}
                    >
                        Create account 
                        </Button>
                </div>
            </form>
        </section>
    </article>
    </>
  )
}
