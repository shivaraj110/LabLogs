import { Form, redirect, useNavigation } from "@remix-run/react";
import { addSubject } from "../db";
import { ActionFunction, ActionFunctionArgs } from "@remix-run/node";
import React from "react";
export const action: ActionFunction = async ({
  request,
  params,
}: ActionFunctionArgs) => {
  try {
    const formData = await request.formData();
    const userId = Number(params.userId);
    let name = JSON.stringify(formData.get("name"));
    name = name.replace(/^"(.*)"$/, "$1");
    let description = JSON.stringify(formData.get("description"));
    description = description.replace(/^"(.*)"$/, "$1");
    const res = await addSubject(name, description, userId);
    return redirect(`/subjects/${res?.userId}`);
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
                Add new subject
              </div>
              <input
                name="name"
                type="text"
                className=" rounded-md p-1 border mt-10 text-center bg-teal-100"
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
