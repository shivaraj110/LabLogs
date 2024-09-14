import { Form, Link, redirect, useNavigation } from "@remix-run/react";
import { insertUser } from "../db";
import { ActionFunction, ActionFunctionArgs } from "@remix-run/node";
import React from "react";
export const action: ActionFunction = async ({
  request,
}: ActionFunctionArgs) => {
  try {
    const formData = await request.formData();
    const fname = JSON.stringify(formData.get("fname"));
    const lname = JSON.stringify(formData.get("lname"));
    const email = JSON.stringify(formData.get("email"));
    const password = JSON.stringify(formData.get("password"));
    const res = insertUser({
      fname,
      lname,
      email,
      password,
    });
    return redirect(`/subjects/${(await res)?.userId}`);
  } catch {
    alert("something went wrong !");
  }
};
export default function Signup() {
  const navigation = useNavigation();
  const isSubmitting = !(navigation.state === "idle");
  return (
    <div>
      <div className="grid grid-cols-2 pt-48">
        <div className="col-span-2 sm:col-span-1">
          <div className="text-5xl font-extrabold text-gray-600 lg:pl-28 pl-1 md:pr-0">
            Manage your programming lab assignments
          </div>
          <div className="text-lg text-gray-400 font-semibold lg:pl-28 pb-5 pt-3">
            Add and update your assignments collection and access them from
            anywhere.
          </div>
          <Link to={"/subjects"} className="pl-24">
            <button className=" w-10 font-semibold rounded-2xl btn text-md">
              Get Started
            </button>
          </Link>
        </div>
        <div className="col-span-2 md:col-span-1  pl-44">
          <Form method="post">
            <div className=" rounded-lg p-8 bg-teal-200 w-fit flex flex-col hover:bg-teal-300 subCards ">
              <div className="text-center text-gray-500 text-2xl font-bold">
                Sign up
              </div>
              <input
                name="fname"
                type="text"
                className=" rounded-md p-1 border mt-10 text-center bg-teal-100"
                placeholder="first name"
              />
              <input
                name="lname"
                type="text"
                className=" rounded-md p-1 border mt-3 text-center bg-teal-100"
                placeholder="last name"
              />
              <input
                name="email"
                type="text"
                className=" rounded-md p-1 border mt-3 text-center bg-teal-100"
                placeholder="email"
              />
              <input
                name="password"
                type="text"
                className=" rounded-md p-1 border mt-3 text-center bg-teal-100"
                placeholder="password"
              />
              <button
                type="submit"
                className="cursor-pointer transition-all font-semibold text-gray-200 mt-6 rounded-md bg-teal-500 px-6 py-2 rounded-lg\nborder-blue-600\nborder-b-[4px] hover:brightness-110 hover:border-b-[6px]\nactive:border-b-[2px] active:brightness-90">
                {isSubmitting ? "Siginig up" : "Signup"}
              </button>
              <p className=" mt-1 text-sm text-gray-500">
                already have an account?{" "}
                <Link to={"/login"} className="underline">
                  {" "}
                  login{" "}
                </Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
