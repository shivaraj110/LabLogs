import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      {/* <div className="font-sans p-4">home</div> */}
      {/* <Link to={"/signup"}> signup </Link> */}
      {/* <Link to={"/subjects"}>Subjects</Link> */}
      <div className="grid grid-cols-2 pt-48">
        <div className="col-span-2 sm:col-span-1">
          <div className="text-5xl font-extrabold text-gray-600 lg:pl-28 pl-1 md:pr-0">
            Manage your programming lab assignments
          </div>
          <div className="text-lg text-gray-400 font-semibold lg:pl-28 pb-5 pt-3">
            Add and update your assignments collection and access them from
            anywhere.
          </div>
          <Link to={"/subjects"} className="">
            <button className=" p-1.5 w-10 font-semibold rounded-2xl startBtn  text-gray-500 text-md">
              Get Started
            </button>
          </Link>
        </div>
        <div className="col-span-2 md:col-span-1">
          <img
            src="./public/working.svg"
            alt="working svg"
            className=" md:ml-32 mt-20 mb-6 md:mt-0"
          />
        </div>
      </div>
    </div>
  );
}
