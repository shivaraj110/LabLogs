import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <div className="font-sans p-4">home</div>
      <Link to={"/signup"}> signup </Link>
      <Link to={"/subjects"}>Subjects</Link>
    </div>
  );
}
