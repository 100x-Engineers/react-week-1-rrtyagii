import SignUpStep1 from '../src/page/Sign Up Flow/SignUpStep1'; 
import SignUpStep2 from '../src/page/Sign Up Flow/SignUpStep2'; 
import SignUpStep3 from '../src/page/Sign Up Flow/SignUpStep3';
import SignUpStep4 from '../src/page/Sign Up Flow/SignUpStep4';

export default function App() {
  return (
    <div className="bg-neutral-1000 min-h-screen mx-auto max-w-lg flex flex-col border-x border-x-neutral-600">
      <main className="flex w-full flex-grow justify-center">
        <SignUpStep4/>
      </main>
    </div>
  );
}

