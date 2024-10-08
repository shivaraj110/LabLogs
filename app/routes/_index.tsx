import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import React from "react";
export const meta: MetaFunction = () => {
  return [
    { title: "LabLogs" },
    { name: "description", content: "Welcome to LabLogs!" },
  ];
};

export default function Index() {
  return (
    <div>
      <div className="grid grid-cols-2  max-[800px]:pt-24  pt-48">
        <div className="col-span-2 md:col-span-1 lg:pl-28 md:pl-14 pl-1 md:pr-0 flex flex-col">
          <div className="text-5xl font-extrabold text-gray-600 ">
            Manage your programming lab assignments
          </div>
          <div className="text-lg text-gray-400 font-semibold  pb-5 pt-3">
            Add and update your assignments collection and access them from
            anywhere.
          </div>
          <Link to={"/"} className=" flex justify-center md:justify-start ">
            <button className=" w-10 font-semibold rounded-2xl btn text-md">
              Get Started
            </button>
          </Link>
        </div>
        <div className="col-span-2 md:col-span-1 ">
          <img
            src="./working.svg"
            alt="working svg"
            className=" md:ml-32 mt-20 mb-6 md:mt-0"
          />
        </div>
      </div>
    </div>
  );
}
