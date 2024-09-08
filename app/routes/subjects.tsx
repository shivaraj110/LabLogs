import { PrismaClient, Subject } from "@prisma/client";
import { json, Link, useLoaderData } from "@remix-run/react";

export const prisma = new PrismaClient();

export const loader = async () => {
  const res = await prisma.subject.findMany({
    select: {
      subjectName: true,
      subDescription: true,
      subjectId: true,
    },
  });
  return json({ subjects: res });
};

export default function Subjects() {
  const { subjects } = useLoaderData<typeof loader>();
  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 pt-48 gap-6">
      <div className="col-span-3 text-gray-600 font-semibold text-2xl">
        your subjetcs
      </div>
      {subjects.map((s) => (
        <Link
          to={`/assignments/${s.subjectId}`}
          className="p-3 mt-12  rounded-md shadow-md bg-teal-100 hover:bg-teal-200 subCards hover:translate-y-2">
          <div className=" text-2xl font-semibold text-gray-600 text-center">
            {s.subjectName}{" "}
          </div>
          <div className="text-slate-600 text-sm pl-3 py-4 ">
            {s.subDescription}
          </div>
        </Link>
      ))}
    </div>
  );
}
