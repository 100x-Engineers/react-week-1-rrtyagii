import PageHeader from "../../components/Page Header/PageHeader";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

export default function Login() {
    return(
        <>
        <div className='flex w-full flex-grow bg-neutral-1000 min-h-screen mx-auto max-w-lg flex-col border-x border-x-neutral-600'>
            <div className='mx-auto'>
                <PageHeader loginPage={true}>
                    Sign in to 100x
                </PageHeader>
            </div>
            
        </div>
        </>
    ); 
};