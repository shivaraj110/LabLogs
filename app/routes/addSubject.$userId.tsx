import { Form, redirect, useNavigation } from "@remix-run/react";
import { ActionFunction, ActionFunctionArgs } from "@remix-run/node";
import React from "react";
import axios from "axios";
export const action: ActionFunction = async ({
  request,
  params,
}: ActionFunctionArgs) => {
  try {
    const formData = await request.formData();
    const userId = Number(params.userId);
    let name = String(formData.get("name"));
    let description = String(formData.get("description"));
    const res = await axios.post(
      "https://lablogs-backendapi.vercel.app/api/v1/subject",
      {
        name,
        description,
        userId,
      }
    );
    return redirect(`/subjects/${res.data.userId}`);
  } catch {
    alert("something went wrong!");
  }
};
export default function AddSubject() {
  const navigation = useNavigation();
  const isSubmitting = !(navigation.state === "idle");
  return (
    <div>
      <div className="flex pt-48 justify-center">
        <div className=" md:col-span-1">
          <Form method="post">
            <div className=" rounded-lg p-8 bg-teal-200 w-fit flex flex-col hover:bg-teal-300 subCards ">
              <div className="text-center text-gray-500 text-2xl font-bold">
                Add a new subject
              </div>
              <div className="text-start ml-4 text-gray-500 text-sm max-w-52 mt-4 font-semibold">
                Warning
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 inline">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                  />
                </svg>{" "}
                : You cannot edit or delete the Subjects you had created.
                <a className="underline cursor-pointer ml-2">learn more</a>
              </div>
              <input
                name="name"
                type="text"
                className=" rounded-md p-1 border mt-4 text-center bg-teal-100"
                placeholder="subject name"
              />
              <input
                name="description"
                type="text"
                className=" rounded-md p-4 border mt-3 text-center bg-teal-100"
                placeholder="description"
              />
              <button
                type="submit"
                className="cursor-pointer transition-all font-semibold text-gray-200 mt-6 rounded-md bg-teal-500 px-6 py-2 rounded-lg\nborder-blue-600\nborder-b-[4px] hover:brightness-110 hover:border-b-[6px]\nactive:border-b-[2px] active:brightness-90">
                {isSubmitting ? "Adding" : "Add"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
