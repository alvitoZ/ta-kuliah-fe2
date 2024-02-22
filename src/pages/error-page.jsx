import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();
  console.log("error", error.message);
  return (
    <div id="error-page">
      <div className="flex h-screen">
        <div className="m-auto flex">
          <span className={`text-primary text-6xl`}>403</span>
          <div className="bg-primary mx-8 h-24 w-0.5"></div>
          <div>
            <span className={`text-3xl text-white`}>Oops!</span>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}
