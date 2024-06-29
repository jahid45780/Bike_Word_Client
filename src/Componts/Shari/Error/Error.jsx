import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
             

              <section >
              <img className=" h-52 w-52 rounded-full mx-auto mt-36" src="https://i.ibb.co/t4KFdwr/209070583-10740175.jpg" alt="" />

                <p className=" text-9xl text-center animate-bounce font-semibold mt-5" > 404 </p>

                <h1 className=" text-3xl text-center" > Sorry, we couldnt find this page. </h1>

                <p className=" text-3xl text-center mt-2 " > But dont worry, you can find plenty of other things on our homepage.  </p>

                <p className="text-center mx-auto p-2" >  <Link to='/' > <button className=" text-4xl  btn  p-2  mb-2 bg-sky-500" >__ Back Home__ </button> </Link> </p>

              </section>

    </div>
  );
}