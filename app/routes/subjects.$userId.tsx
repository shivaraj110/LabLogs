import { LoaderFunctionArgs } from "@remix-run/node";
import { json, Link, useLoaderData, useParams } from "@remix-run/react";
import axios from "axios";
export const loader = async ({ params }: LoaderFunctionArgs) => {
  try {
    const id = Number(params.userId);
    const res = await axios.get(
      "https://lablogs-backendapi.vercel.app/api/v1/subjects",
      {
        data: {
          userId: id,
        },
      }
    );
    return json({ subjects: res.data.response });
  } catch (err) {
    console.log("loader error : " + err);
  }
};

export default function Subjects() {
  const params = useParams();
  const userId = params.userId;
  const { subjects } = useLoaderData<typeof loader>();
  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 pt-48 gap-6">
      <div className="col-span-3 text-gray-600 font-semibold grid grid-cols-2 gap-0 mt-2 text-2xl">
        <div className="mt-2 col-span-1">your subjects </div>

        <div className="col-span-1">
          <Link
            to={`/addSubject/${userId}`}
            className="group cursor-pointer outline-none hover:rotate-90 duration-300"
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

      {subjects.map((s: any) =>
        s.subjects.map((p: any) => (
          <Link
            to={`/assignments/${p.subjectId}`}
            className="p-3 mt-12  rounded-md shadow-md col-span-3 md:col-span-1 transiii bg-teal-100 hover:bg-teal-200 subCards  hover:translate-y-2">
            <div
              className=" text-2xl font-semibold text-gray-600 text-center"
              key={p.subjectId}>
              {p.subjectName}
            </div>
            <div
              className="text-slate-600 text-md pl-3 py-4 "
              key={p.subjectId + 1}>
              {p.subDescription}
            </div>
          </Link>
        ))
      )}
      {!subjects ? (
        <section className="dots-container mt-72">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </section>
      ) : null}
    </div>
  );
}
