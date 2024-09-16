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
    const subjectId = Number(params.subjectId);
    let title = String(formData.get("title"));
    let description = String(formData.get("description"));
    let codeSnippet = String(formData.get("code"));

    const res = await axios.post(
      "https://lablogs-backendapi.vercel.app/api/v1/assignment",
      {
        title,
        description,
        codeSnippet,
        subjectId,
      }
    );
    return redirect(`/assignments/${res.data.response.subjectId}`);
  } catch {
    alert("something went wrong!");
  }
};
export default function AddSubject() {
  const navigation = useNavigation();
  const isSubmitting = !(navigation.state === "idle");
  return (
    <div>
      <div className="flex pt-36 justify-center">
        <div className=" md:col-span-1">
          <Form method="post">
            <div className=" rounded-lg p-8 bg-teal-200 w-fit flex flex-col hover:bg-teal-300 subCards ">
              <div className=" text-gray-500 text-2xl font-bold">
                Add a new assignment
              </div>
              <input
                name="title"
                type="text"
                className=" rounded-md p-1 pl-4 border mt-10  bg-teal-100"
                placeholder="title"
              />
              <input
                name="description"
                type="text"
                className=" rounded-md p-4 border mt-3  bg-teal-100"
                placeholder="description"
              />
              <input
                name="code"
                type="text"
                className=" rounded-md size-96 pb-80 pl-4 border mt-3  bg-teal-100"
                placeholder="code"
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
