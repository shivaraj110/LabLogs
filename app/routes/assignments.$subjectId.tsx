import { LoaderFunctionArgs } from "@remix-run/node";
import { Link, redirect, useLoaderData, useParams } from "@remix-run/react";
import Card from "../components/Card";
import React from "react";
import axios from "axios";
export const loader = async ({ params }: LoaderFunctionArgs) => {
  try {
    const subjectId = Number(params.subjectId);
    const res = await axios.get(
      "https://lablogs-backendapi.vercel.app/api/v1/assignments",
      {
        data: {
          subjectId,
        },
      }
    );
    return res.data.response;
  } catch {
    alert("something went wrong !");
  }
};

export const deleteAssignments = async (assignmentId: number) => {
  axios.delete("https://lablogs-backendapi.vercel.app/api/v1/assignment", {
    data: {
      assignmentId,
    },
  });
};

export default function Assignment() {
  const res = useLoaderData<typeof loader>();
  const params = useParams();
  const subjectId = params.subjectId;
  let count = 0;
  return (
    <div className="flex flex-col">
      <div className="  flex-row justify-between">
        <div className="pt-40 text-gray-500 font-semibold text-xl">
          {" "}
          Assignments
        </div>
        <div className="col-span-1 pl-36 flex-row -translate-y-9 ">
          <Link
            to={`/addAssignment/${subjectId}`}
            className="group cursor-pointer outline-none  hover:rotate-90 duration-300"
            title="Add New Assignment">
            <svg
              className="stroke-teal-500 fill-none group-hover:fill-teal-800 group-active:stroke-teal-200 group-active:fill-teal-600 group-active:duration-0 duration-300"
              viewBox="0 0 24 24"
              height="50px"
              width="50px"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeWidth={1.5}
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
              />
              <path strokeWidth={1.5} d="M8 12H16" />
              <path strokeWidth={1.5} d="M12 16V8" />
            </svg>
          </Link>
        </div>
      </div>

      {res.map((a: any) => (
        <div key={a.assignmentId} className="pt-6">
          <div className="text-xl font-bold font-mono text-gray-600 text-center flex justify-center pt-12">
            {++count}. Assignment Title - {a.title}{" "}
            <div
              onClick={() => {
                deleteAssignments(a.assignmentId);
                redirect(`/assignments/${subjectId}`);
              }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 ml-6 cursor-pointer">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </div>
          </div>
          <div className="text-gray-500 font-semibold  text-center pt-4 pb-8 pl-6">
            {a.description}
          </div>
          <div className="pt-6 pb-16 items-center">
            <Card code={a.codeSnippet} title={a.title} />
          </div>
        </div>
      ))}
    </div>
  );
}
