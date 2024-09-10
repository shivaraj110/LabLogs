import { PrismaClient, Subject } from "@prisma/client";
import { LoaderFunctionArgs } from "@remix-run/node";
import { json, Link, useLoaderData } from "@remix-run/react";

export const prisma = new PrismaClient();

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const id = Number(params.userId);
  const res = await prisma.user.findMany({
    where: {
      userId: id,
    },
    select: {
      subjects: {
        select: {
          subjectId: true,
          subjectName: true,
          subDescription: true,
        },
      },
    },
  });
  return json({ subjects: res });
};

export default function Subjects() {
  const { subjects } = useLoaderData<typeof loader>();
  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 pt-48 gap-6">
      <div className="col-span-3 text-gray-600 font-semibold text-2xl">
        your subjects
      </div>
      {subjects.map((s) =>
        s.subjects.map((p) => (
          <Link
            to={`/assignments/${p.subjectId}`}
            className="p-3 mt-12  rounded-md shadow-md bg-teal-100 hover:bg-teal-200 subCards hover:translate-y-2">
            <div className=" text-2xl font-semibold text-gray-600 text-center">
              {p.subjectName}
            </div>
            <div className="text-slate-600 text-md pl-3 py-4 ">
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
