import { Form, Link } from "@remix-run/react";
export default function Login() {
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
                Login
              </div>
              <p className="mt-2 text-gray-500 font-semibold ">email</p>
              <input
                type="text"
                className=" rounded-md p-1 border mt-3 text-center bg-teal-100"
                placeholder="example@gmail.com"
              />
              <p className="mt-2 text-gray-500 font-semibold ">password</p>
              <input
                type="text"
                className=" rounded-md p-1 border mt-3 text-center bg-teal-100"
                placeholder="69696969"
              />
              <button
                type="submit"
                className="cursor-pointer transition-all mt-6 rounded-md bg-teal-500 text-white px-6 py-2 rounded-lg\nborder-blue-600\nborder-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]\nactive:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                Login
              </button>
              <p className=" mt-1 text-sm text-gray-500">
                don't have an account?{" "}
                <Link to={"/signup"} className="underline">
                  {" "}
                  signup{" "}
                </Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
