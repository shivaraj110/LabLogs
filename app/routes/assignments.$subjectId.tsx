import { LoaderFunctionArgs } from "@remix-run/node";
import { prisma } from "./subjects.$userId";
import { Link, useLoaderData, useParams } from "@remix-run/react";
import Card from "~/components/Card";
export const loader = async ({ params }: LoaderFunctionArgs) => {
  try {
    const id = Number(params.subjectId);
    const res = await prisma.assignment.findMany({
      where: {
        subjectId: id,
      },
      select: {
        title: true,
        description: true,
        codeSnippet: true,
        assignmentId: true,
      },
    });
    return res;
  } catch {
    alert("something went wrong !");
  }
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
            title="Add New Subject">
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

      {res.map((a) => (
        <div key={a.assignmentId} className="pt-6">
          <div className="text-xl font-bold font-mono text-gray-600 text-center pt-12">
            {++count}. Assignment Title - {a.title}
          </div>
          <div className="text-gray-500 font-semibold  text-center pt-4 pb-8 pl-6">
            {a.description}
          </div>
          <div className="pt-6 pb-16">
            <Card code={a.codeSnippet} title={a.title} />
          </div>
        </div>
      ))}
    </div>
  );
}
