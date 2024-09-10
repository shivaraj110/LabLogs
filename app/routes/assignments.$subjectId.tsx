import { LoaderFunctionArgs } from "@remix-run/node";
import { prisma } from "./subjects.$userId";
import { useLoaderData } from "@remix-run/react";
import Card from "~/components/Card";
type codeInput = {
  code: string;
  title: string;
};
export const loader = async ({ params }: LoaderFunctionArgs) => {
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
};

export default function Assignment() {
  const res = useLoaderData<typeof loader>();
  let count = 0;
  return (
    <div>
      {res.map((a) => (
        <div key={a.assignmentId} className="pt-32">
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
