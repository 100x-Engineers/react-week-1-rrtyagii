import React, {useState, useContext} from 'react'; 
import { URLs } from '../../Constants';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { InitialUserContext } from '../../contexts/userContext';
import Input from '../../components/Input/Input'; 
import PageHeader from '../../components/Page Header/PageHeader';
import Button from '../../components/Button/Button';

const MOCK_VERIFICATION_CODE = '123456';

export default function SignUpStep3() {
    const navigate = useNavigate();
    const {form} = useContext(InitialUserContext);

    const [verificationCode, setVerificationCode] = useState('');
    const [isCodeValid, setIsCodeValid] = useState(false);

    const handleCodeChange = (event) => {
        setVerificationCode(event.target.value);
        if (isCodeValid !== null) {
            setIsCodeValid(null); 
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (verificationCode === MOCK_VERIFICATION_CODE) {
            setIsCodeValid(true);
            navigate(URLs.signUpStep4);
        } else {
            setIsCodeValid(false);
        }
    }; 

    return (
    <>
    <article className='flex flex-col flex-grow bg-neutral-1000 min-h-screen mx-auto max-w-lg border-x border-x-neutral-600'>
        <section className=" gap-y-4 shrink-0 pt-0 px-1.24338rem pb-5 rounded-2xl text-neutral-50 mx-auto">
        <PageHeader showBackButton={true} onBackClick={onBackClick}>
            Step 3 of 4
        </PageHeader>

        <div className="pt-3 flex flex-col items-start gap-2 self-stretch">
            <h3 className="font-inter font-bold text-2xl leading-normal">
                We sent you a code
            </h3>
            <p className="self-stretch text-neutral-500 font-inter text-sm font-normal leading-normal">
                Enter it below to verify {form.email}
            </p>
        </div>

        <form className="flex flex-col pt-6 gap-10 items-start w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col w-full">
                <Input 
                    type="text" 
                    value={verificationCode} 
                    onChange={handleCodeChange} 
                    width='w-full' 
                    maxLength="6" 
                    pattern='[0-9]{6}'
                    autoComplete="one-time-code"
                >
                    Verification Code
                </Input>

                <Link className="self-end text-twitter-blue-default font-inter text-sm font-normal leading-normal pt-3">
                    Didn't receive a code?
                </Link>
            </div>


            <div className="flex flex-col items-center gap-3 flex-grow flex-shrink-0 basis-0 pt-56">
                <Button 
                    type='secondary' 
                    variant='solid'
                    width="w-72"
                    padding="px-6 py-4"
                    isDisabled={isCodeValid || verificationCode.length < 6}
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
