import Login from "./page/Login"
import Input from "./components/OnboardingComponent/Input";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState(''); 
  const [validation, setValidation] = useState(null); 
  
  const handleInputChange=(e)=>{
    setInput(e.target.value); 
    console.log(input)
  }

  const handleValidation = () => {
    if (input.length > 3) {
      setValidation(true);
    } else {
      setValidation(null);
    }
  }

  const handleOnBlur=()=>{
    handleValidation()
  }

  return (
    <>
    <main className="bg-black">
      <div className="mx-auto flex h-screen w-full max-w-lg">
        <Input 
        type="password" 
        inputValue={input}
        validationStatus={validation}
        onChange={handleInputChange}
        onBlur={handleOnBlur}
        >
          Password
        </Input>
      </div>
    </main>
    </>
  ); 
}