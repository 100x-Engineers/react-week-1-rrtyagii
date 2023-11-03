import Button from "./components/Button/Button";

export default function App() {
  return (
    <>
      <h1 className="flex justify-center text-3xl font-bold underline">
        Hello world!
      </h1>

      <Button label={"Sign In"} variant={"solid"} color={"bg-neutral-50"} size={"medium"} textColor={"text-black"}/>
    </>
  ); 
}