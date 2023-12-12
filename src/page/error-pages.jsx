import { useRouteError, Link} from "react-router-dom";
import { URLs } from "../Constants";
import Button from "../components/Button/Button";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="font-inter flex flex-col text-neutral-50 justify-center items-center mx-auto gap-y-5 m-28">
      <h1 className="text-[5rem] font-bold">404! Oops.</h1>
      <p className="text-3xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-2xl">
        {error.statusText || error.message}
      </p>
      <div className="flex gap-6">
        <Link to={URLs.home}>
          <Button type="primary" variant="solid" width="w-72">Home</Button>
        </Link>
      </div>
    </div>
  );
}