import React, { useContext, useMemo } from 'react';
import Input from '../../components/Input/Input'; 
import PageHeader from '../../components/Page Header/PageHeader';
import Button from '../../components/Button/Button';
import { URLs } from '../../Constants';
import { Link } from 'react-router-dom';
import { InitialUserContext } from '../../contexts/userContext';
import { dateFormat } from '../../utils/date_format';

import * as yup from 'yup';

// Yup validation schema
const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    dateOfBirth: yup.date()
        .max(new Date(), 'Date of birth must be in the past')
        .test(
            'age',
            'You must be at least 18 years old',
            value => {
                const today = new Date();
                const cutoff = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
                return value <= cutoff;
            }
        )
        .required('Date of birth is required'),
});

export default function SignUpStep2() {
    const userData = useContext(InitialUserContext);
    const form = userData.form;
    const dateOfBirth = new Date(form.year, form.month - 1, form.day);


    const displayDate = dateFormat(form);

    const { nameValid, emailValid, dateOfBirthValid } = useMemo(() => {
        let isValid = { name: false, email: false, dateOfBirth: false };
        
        try {
            validationSchema.validateSyncAt('name', { name: form.name });
            isValid.name = true;
        } catch (error) {
            console.log(error);
        }

        try {
            validationSchema.validateSyncAt('email', { email: form.email });
            isValid.email = true;
        } catch (error) {
            console.log(error);
        }

        try {
            validationSchema.validateSyncAt('dateOfBirth', { dateOfBirth });
            isValid.dateOfBirth = true;
        } catch (error) {
            console.log(error);
        }

        return { 
            nameValid: isValid.name, 
            emailValid: isValid.email, 
            dateOfBirthValid: isValid.dateOfBirth 
        };
    }, [form.name, form.email, dateOfBirth]);

    const onBackClick = () => {
        navigate(-1);
    }

    return (
        <>
            <article className='flex flex-col flex-grow bg-neutral-1000 min-h-screen mx-auto max-w-lg border-x border-x-neutral-600'>
                <section className="gap-y-4 shrink-0 pt-0 px-1.24338rem pb-5 rounded-2xl text-neutral-50 mx-auto">
                    <PageHeader showBackButton={true} onBackClick={onBackClick}>
                        Step 2 of 4
                    </PageHeader>

                    <h3 className="flex flex-col py-5 self-stretch items-start font-inter font-bold text-2xl leading-normal">
                        Create your account
                    </h3>

                    <form className="flex flex-col gap-5 self-stretch items-start"> 
                        <Input type="text" value={form.name} width="w-full" validationStatus={nameValid}>
                            Name
                        </Input>

                        <Input type="email" value={form.email} width="w-full" validationStatus={emailValid}>
                            Email
                        </Input>

                        <Input type="text" value={displayDate} width="w-full" validationStatus={dateOfBirthValid}>
                            Date of Birth
                        </Input>

                        <div className="flex flex-col items-center gap-3 flex-grow flex-shrink-0 basis-0 pt-56">
                            <Link to={URLs.signUpStep3}>
                                <Button 
                                    type='primary' 
                                    variant='solid'
                                    width="w-72"
                                    padding="px-6 py-4"
                                    isDisabled={!nameValid || !emailValid || !dateOfBirthValid}
                                >
                                    Sign Up
                                </Button>
                            </Link>
                        </div>
                    </form>
                </section>
            </article>
        </>
    );
}